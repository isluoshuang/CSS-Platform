# encoding:utf-8 -*-
#!/usr/bin/python3
 
from pymongo import MongoClient
import hashlib
import sys
import datetime

host = "localhost"
# user = "root"
# password = "ls269031126"
database = "question"
con_list = "list"
charset = "utf8"

#连接数据库
def open():
    # conn = MongoClient()
    conn = MongoClient(host='mongodb://10.72.100.5:8027/question',username='qs',password='double')
    return conn

#断开数据库连接
def close(conn):
    conn.close()

#获取首页的list
def get_list_info(user):
    conn = open()
    mydb = conn[database]
    mycol = mydb[con_list] 
    result = mycol.find(user)
    close(conn)
    return result

#获取特定用户的特定问卷信息
def fill_list(user):
    conn = open()
    mydb = conn[database]
    mycol = mydb[con_list] 
    myquery = { "user": user}
    result = mycol.find(myquery)
    result = list(result[:])
    close(conn)
    return result

#将新问卷存入数据库或者修改数据库已有问卷
def addList(data):
    conn = open()
    mydb = conn[database]
    mycol = mydb[con_list]
    myquery = { "user": data['user'] }
    result = mycol.find(myquery)
    result_list = list(result[:])
    # print("hhhhh\n\n")
    # print(data)
    # print(data["num"])
    # print(result_list)
    # print(len(result_list))
    if data != None:
        if data["num"] == 1 and len(result_list) !=0:
            result = list(mycol.find().sort("num", -1).limit(1))[0]['num']
            data["num"] = result + 1
            mycol.insert_one(data)
        elif data["num"] == 1 and len(result_list) ==0:
            mycol.insert_one(data)
        else:
            myquery = { "num": data["num"] }
            newvalues = { "$set": data }
            mycol.update_one(myquery, newvalues)
            # mycol.delete_one(myquery)
    else:
        pass
    close(conn)
    return

#删除问卷
def deleteList(data):
    conn = open()
    mydb = conn[database]
    mycol = mydb[con_list]
    myquery = data
    mycol.delete_one(myquery)
    infor = mydb["choose"]
    infor.delete_many(myquery)
    close(conn)
    return

#将问卷填写信息存入数据库
def addChoose(data):
    conn = open()
    mydb = conn[database]
    mycol = mydb["choose"]
    if data != None:
        mycol.insert_one(data)
    else:
        pass
    close(conn)
    return

def get_choose_info(user):
    print(user)
    conn = open()
    mydb = conn[database]
    mycol = mydb["choose"]
    myquery = { "user": user }  
    print(myquery) 
    result = mycol.find(myquery)
    result = list(result[:])
    print(result)
    close(conn)
    return result

#将关键词提取文本存入数据库
def addkeywordExtraction(data):
    conn = open()
    mydb = conn[database]
    mycol = mydb["keyword"]
    if data != None:
        mycol.insert_one(data)
    else:
        pass
    close(conn)
    return

def login(data):
    conn = open()
    mydb = conn[database]
    mycol = mydb["user"]
    myquery = { "name": data['name'] }
    result = mycol.find(myquery)
    # print(result.count())
    # result = list(result[:])
    # print(result)
    if result.count() == 0:
        mycol.insert_one(data)
        state = {"state": "register_success"}
    else:
        result = list(result[:])
        if result[0]["password"] == data["password"]:
            state = {"state": "login_success"}
        else:
            state = {"state": "login_fail"}
    return state

def uploadFile(name, filename):
    conn = open()
    mydb = conn[database]
    mycol = mydb["uploadFile"]
    data = {}
    data["name"] = name;
    data["filename"] = filename;
    mycol.insert_one(data)
    state = {"state": "insert_success"}
    return state

def searchFile(name):
    conn = open()
    mydb = conn[database]
    mycol = mydb["uploadFile"]
    myquery = { "name": name }
    result = mycol.find(myquery)
    result = list(result[:])
    print(result)
    if len(result) == 0:
        state = [{"filename": "donot_have_file"}]
        return state
    else:
        filename = []
        for file in result:
            filename.append(file)
        mycol.delete_many(myquery)
        return filename
    return

def deleteFile(name, fileName):
    conn = open()
    mydb = conn[database]
    mycol = mydb["uploadFile"]
    myquery = {}
    myquery["name"] = name;
    myquery["filename"] = fileName
    print(myquery)
    mycol.delete_many(myquery)
    return

def user_result(user, num):
    conn = open()
    mydb = conn[database]
    mycol = mydb["choose"]
    myquery = {"num":int(num) }
    result = mycol.find(myquery)
    result = list(result[:])
    # print(result)
    return result

# def college_result(college_num):
#     conn = open()
#     mydb = conn[database]
#     mycol = mydb["choose"]
#     myquery = {"num":college_num}
#     result = mycol.find(myquery)
#     result = list(result[:])
#     print(result)
#     return
#获取帐号密码
# def APIlogin(result):
#     conn, cursor = open()
#     result[0] = MySQLdb.escape_string(result[0])
#     result[1] = MySQLdb.escape_string(result[1])
#     cursor.execute("select user_id,password from login where user_id = '%s'" % result[0])
#     result = cursor.fetchall()
#     close(conn, cursor)
#     return result





# #添加用户,密码两次 md5 加密
# def insertUser(username, password):
#     conn, cursor = open()
#     today = datetime.date.today()
#     Md5 = hashlib.md5()
#     Md5.update(password)
#     Md5hex = Md5.hexdigest()
#     Md52 = hashlib.md5()
#     Md52.update(Md5hex)
#     password_twice = Md52.hexdigest()
#     cursor.execute("insert into user values('1','%s','1','%s','%s')" % (
#         username, today.strftime("%Y-%m-%d"), password_twice))
#     conn.commit()
#     close(conn, cursor)
#     return

