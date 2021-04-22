@app.route('/get_mic_data', methods=['GET','POST'])
def MICvalue():
    choice_user = request.get_json()  # 获取前端用户选择的数据
    flag = True
    # data = request.get_json() #bytes
    # print(data)
    choice0 = {}
    choice1 = {}
    # choice[0]['db'] = data[0][db]
    # choice[0]['col'] = data[0][col]
    # choice[0]['field'] = data[0][field]
    # choice[1]['db'] = data[1][db]
    # choice[1]['col'] = data[1][col]
    # choice[1]['field'] = data[1][field]
    choice0['db'] = choice_user[0][0]
    choice0['col'] = choice_user[0][1]
    choice0['field'] = choice_user[0][2]
    choice1['db'] = choice_user[1][0]
    choice1['col'] = choice_user[1][1]
    choice1['field'] = choice_user[1][2]
    print("choice0", choice0)
    print("choice1", choice1)
    # choice0['db'] = 'EpidemicData'
    # choice0['col'] = '上海'
    # choice0['field'] = '新增确诊'
    # choice1['db'] = 'EpidemicData'
    # choice1['col'] = '河北'
    # choice1['field'] = '新增确诊'
    # print(choice0)
    # print(choice1)

    # 获取数据
    # client = MongoClient("10.72.100.5",8027,username='double',password='double')
    client = MongoClient("10.72.100.5",8027)
    db = client.admin
    db.authenticate("double", "double")
    conn = MongoClient(host='mongodb://10.72.100.5:8027/'+'admin',username='double',password='double')
    database = conn[choice0['db']]
    collection0 = database[choice0['col']]
    results0 = collection0.find({},{choice0['field']:1,"_id":0}).sort("_id",pymongo.ASCENDING)   # 按照_id排序
    collection1 = database[choice1['col']]
    results1 = collection1.find({},{choice1['field']:1,"_id":0}).sort("_id",pymongo.ASCENDING)   # 按照_id排序
    # 1表示显示此字段，0表示不显示此字段，默认会显示_id
    rawdata0 = []
    rawdata1 = []
    for result in results0:
        rawdata0.append(result[choice0['field']])
    for result in results1:
        rawdata1.append(result[choice1['field']])

    # 清理数据
    for i in range(len(rawdata0)-1,-1,-1):   # 假定rawdata0与rawdata1的长度相同
        if rawdata0[i] and rawdata1[i]:
            try:   # 将数字形式的数据转换为浮点数
                rawdata0[i] = float(rawdata0[i])
                rawdata1[i] = float(rawdata1[i])
            except ValueError:
                flag = False   # 存在非数值字段
        else:
            del rawdata0[i]
            del rawdata1[i]

    print("rawdata0", rawdata0)
    print("rawdata1", rawdata1)
    # 计算MIC
    m = MINE()
    if rawdata0:   # 当rawdata0与rawdata1不为空时
        if flag:
            # 将数据映射到[0,1]区间
            min_max_scaler = MinMaxScaler()
            data1_std = min_max_scaler.fit_transform(np.array(rawdata0).reshape(-1, 1))
            data2_std = min_max_scaler.fit_transform(np.array(rawdata1).reshape(-1, 1))
            data1 = data1_std.reshape(1,-1)[0]
            data2 = data2_std.reshape(1,-1)[0]
            m.compute_score(data1,data2)
            # str(m.mic())
            return json.dumps(m.mic())
        else:
            return "请选取数值字段"
    else:
        return "您所选取的两个字段无对应数据"

# 获取options
@app.route('/getOptions', methods=['post', 'get'])
def getOptions():
    client = MongoClient("10.72.100.5",8027)
    db = client.admin
    db.authenticate("double", "double")
    dblist = client.list_database_names()   # 服务器上除系统数据库外的所有数据库
    print('所有的数据库：', dblist)
    j = 0 
    for i in range(len(dblist)):
        if dblist[j] == 'admin':
            dblist.pop(j)
        elif dblist[j] == 'config':
            dblist.pop(j)
        elif dblist[j] == 'local':
            dblist.pop(j)
        else:
            j += 1
    print(dblist)
    options_list = []
    for i in range(len(dblist)):    
        db = dblist[i]
        database = client[db]
        collection_list = database.list_collection_names()   # 指定数据库中的所有集合
        
        child_list0 = []
        for j in range(len(collection_list)):
            coll = collection_list[j]
            collection = database[coll]
            document = collection.find_one()
            field_list = list(document.keys())[1:]   # 指定数据库中的所有字段(除了"_id")
            
            child_list1 = []
            for k in range(len(field_list)):
                child_list1.append({'value':field_list[k],'label':field_list[k]})
                
            child_list0.append({'value':collection_list[j],'label':collection_list[j],'children':child_list1})
            
        options_list.append({'value':dblist[i],'label':dblist[i],'children':child_list0})
   
    return json.dumps(options_list)