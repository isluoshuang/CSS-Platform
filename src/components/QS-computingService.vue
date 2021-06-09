<!-- v-model="requiredItem[item.num]" -->
<template>
  <el-main>
  <div class="qs">
    <el-upload
      class="upload"
      drag
      :action="getUser()"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      accept=".csv,.txt,.pdf"
      :file-list="fileList">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div slot="tip" class="el-upload__tip">仅支持上传csv/txt/pdf格式文件</div>
    </el-upload>

    <el-row>
      <el-button  type="primary" icon="el-icon-menu" @click="showuser">数据分析工具</el-button>
    </el-row>

    <el-row>
      <el-col :span="6">
        <el-input
          placeholder="请输入PCA降维维度"
          v-model="pca_data"
          clearable>
        </el-input>
      </el-col>       
      <el-col :span="6">
        <el-button type="primary" plain @click="PrincipalComponentsAnalysis" :plain="true">PCA降维</el-button>
      </el-col>
      <el-col :span="6">
        <el-input
          placeholder="输入t-SNE降维维度(<4)"
          v-model="TSNE_data"
          clearable>
        </el-input>
      </el-col>
      <el-col :span="6">
        <el-button type="primary" plain @click="TSNE" :plain="true">t-SNE降维</el-button>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="6">
        <el-input
          placeholder="输入进行差异检验的数字"
          v-model="Tnum"
          clearable>
        </el-input>
      </el-col>
      <el-col :span="6">
        <el-button type="primary" plain @click="Ttest" :plain="true">单样本T检验</el-button>
      </el-col>
      <el-col :span="6">
        <el-tooltip class="item" effect="dark" content="需要先上传训练集再上传测试集" placement="right">
          <el-button type="primary" plain @click="nb" :plain="true">朴素贝叶斯</el-button>
        </el-tooltip>
      </el-col>
      <el-col :span="6" class = "box">
        <el-tooltip class="item" effect="dark" content="请上传需要进行插值处理的csv文件" placement="right">
          <el-button type="primary" plain @click="poly" :plain="true">插值法处理缺失值</el-button>
        </el-tooltip>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="6" class = "box">
        <el-button type="primary" plain @click="dtw" :plain="true">时序DTW分析</el-button>
      </el-col>
      <el-col :span="6" class = "box">
        <el-tooltip class="item" effect="dark" content="请上传txt文本用于生成词云" placement="right">
          <el-button type="primary" plain @click="wordCloud" :plain="true">词云生成</el-button>
        </el-tooltip>
      </el-col>
      <el-col :span="6" class = "box">
        <el-tooltip class="item" effect="dark" content="请上传需要提取文献内容的PDF文件" placement="right">
          <el-button type="primary" plain @click="pdf2word" :plain="true">文献PDF内容提取</el-button>
        </el-tooltip>
      </el-col>
      <el-col :span="6" class = "box">
        <el-tooltip class="item" effect="dark" content="请上传两份csv文件用于计算MIC值" placement="right">
          <el-button type="primary" plain @click="MIC" :plain="true">MIC计算</el-button>
        </el-tooltip>
      </el-col>
    </el-row>

    <el-row style="margin: 10px 0px 10px 0px">
      <el-button  type="primary" icon="el-icon-menu">机器学习模型</el-button>
    </el-row>

    <el-row class = "box">
      <el-col :span="6">
        <el-input
          placeholder="请输入聚类中心点个数"
          v-model="cluster_data"
          clearable>
        </el-input>
      </el-col>
      <el-col :span="6">
        <el-button type="primary" plain @click="kmeans" :plain="true">聚类</el-button>
      </el-col>
      <el-col :span="6">
          <el-tooltip class="item" effect="dark" content="请先上传训练集再上传测试集" placement="right">
            <el-button type="primary" plain @click="decisionTree" :plain="true">决策树</el-button>
          </el-tooltip>
      </el-col>
      <el-col :span="6">
          <el-tooltip class="item" effect="dark" content="请先上传训练集再上传测试集" placement="right">
            <el-button type="primary" plain @click="randomForest" :plain="true">随机森林</el-button>
          </el-tooltip>
      </el-col>
    </el-row>
    <el-row class = "box">
      <el-col :span="6">
        <el-tooltip class="item" effect="dark" content="请先上传训练集再上传测试集" placement="right">
          <el-button type="primary" plain @click="svm" :plain="true">SVM</el-button>
        </el-tooltip>
      </el-col>
      <el-col :span="6">
      <el-tooltip class="item" effect="dark" content="请先上传训练集再上传测试集" placement="right">
        <el-button type="primary" plain @click="svr" :plain="true">SVR</el-button>
      </el-tooltip>
      </el-col>
      <el-col :span="6">
        <el-tooltip class="item" effect="dark" content="请先上传训练集再上传测试集" placement="right">
          <el-button type="primary" plain @click="linearRegression" :plain="true">多元线性回归</el-button>
        </el-tooltip>
      </el-col>
      <el-col :span="6">
        <el-tooltip class="item" effect="dark" content="请先上传训练集再上传测试集" placement="right">
          <el-button type="primary" plain @click="logisticRegression" :plain="true">逻辑回归</el-button>
        </el-tooltip>
      </el-col>
    </el-row>

    <el-row>
      <el-button type="primary" icon="el-icon-download">
        <a :href="'/css/download/'+username +'/' + download_file+''" download=download_file style="text-decoration:none"><span style="color: white">下载文件</span></a>
      </el-button>
    </el-row> 
  </div>

    <el-row class = "box">
      <el-col :span="6">
        <el-tooltip class="item" effect="dark" content="点击跳转数据库字段MIC计算" placement="right">
          <router-link :to="`/micCompute`">数据库MIC计算</router-link>
        </el-tooltip>
      </el-col>
    </el-row>

  </el-main>
</template>

<script src="jquery.js"></script>
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?5f228c169bee6b288c0b4652cccda107";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

export default {
  name: 'Nlp',
  data() {
    return {
      fileList:[],
      pca_data:'',
      TSNE_data:'',
      cluster_data:'',
      download_file:'',
      username:'',
      Tnum:'',
      database:'数据库',
      databaseList:[],
      value: [],
      options: [],
      value1: [],
      mic_result: ''
    }
  },
  methods:{
    getUser(){
      console.log("hhhh")
      let user = {}
      user["user"] = sessionStorage.getItem('user')
      if (user["user"] == null) {
        alert("请先进入登陆/注册页面");
        this.$router.push({path: '/login'})
      }
      else{
        this.username = sessionStorage.getItem('user')
        // return "http://0.0.0.0/upload/"+user["user"]
        return "https://mo.zju.edu.cn/css/upload/"+user["user"]
      }
    },
    changeDatabase(data){
                    //console.log(data) //公司名-公司id
                    // 处理点击时不选的错误
                    if(typeof data == "object"){
                        return
                    }
                    // 取公司名并赋值
                    this.company = data.split('-')[0]

                    // 存下公司id
                    localStorage.setItem("workAccountId",data.split("-")[1])
    },
    handleRemove(file, fileList) {
      // let data = {}
      // data["fileName"] = file;      
      // console.log(file, fileList);
      $.ajax({  
          type:"POST",//type可以为post也可以为get  
          url: "/css/removeFile/"  + sessionStorage.getItem('user'),  
          data:
            JSON.stringify(file)
          ,//这行不能省略，如果没有数据向后台提交也要写成data:{}的形式  
          contentType: 'application/json; charset=UTF-8',
          dataType:"json",//这里要注意如果后台返回的数据不是json格式，会进入到error:function(data){}中  
          async: false,
          success:function(value){             
              console.log(value)
              if(value["status"] == "no such file"){
                that.$message({
                  message: '文件不存在',
                  type: 'warning'
                });
              }
          },  
          error:function(value){ 
              alert("文件删除出现错误");  
          }  
      });     
    },
    showuser() {
      let user = sessionStorage.getItem('user');
      if(user != null) console.log(user)
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`);
    },
    PrincipalComponentsAnalysis(){
      let data = {}
      data["pca"] = this.pca_data;
      let that = this;
      $.ajax({  
          type:"POST",//type可以为post也可以为get  
          url: "/css/pca/" + sessionStorage.getItem('user'),  
          data:
            JSON.stringify(data)
          ,//这行不能省略，如果没有数据向后台提交也要写成data:{}的形式  
          contentType: 'application/json; charset=UTF-8',
          dataType:"json",//这里要注意如果后台返回的数据不是json格式，会进入到error:function(data){}中  
          async: false,
          success:function(value){
              console.log(value)
              if (value["route"] == "nofile") {
                that.$message({
                  message: '需要先上传数据文件',
                  type: 'warning'
                });
              }
              else {
                that.download_file = value['route']
                console.log(that.download_file)
                that.$message({
                  message: 'PCA降维完成，可以下载降维后的文件',
                  type: 'success'
                });
              }  
          },  
          error:function(value){ 
              alert("PCA降维出现错误");  
          } 
      });         
    },
    TSNE(){
      let data = {}
      data["TSNE"] = this.TSNE_data;
      let that = this;
      $.ajax({  
          type:"POST",//type可以为post也可以为get  
          url: "/css/TSNE/" + sessionStorage.getItem('user'),  
          data:
            JSON.stringify(data)
          ,//这行不能省略，如果没有数据向后台提交也要写成data:{}的形式  
          contentType: 'application/json; charset=UTF-8',
          dataType:"json",//这里要注意如果后台返回的数据不是json格式，会进入到error:function(data){}中  
          async: false,
          success:function(value){             
              console.log(value)
              if (value["route"] == "nofile") {
                that.$message({
                  message: '需要先上传数据文件',
                  type: 'warning'
                });
              }
              else {
                that.download_file = value['route']
                that.$message({
                  message: 't-SNE降维完成，可以下载降维后的文件',
                  type: 'success'
                });          
              }  
          },  
          error:function(value){ 
              alert("t-SNE降维出现错误");  
          } 
      }); 
    },
    kmeans(){
      let data = {}
      data["kmeans"] = this.cluster_data;
      let that = this;
      $.ajax({  
          type:"POST",//type可以为post也可以为get  
          url: "/css/kmeans/" + sessionStorage.getItem('user'),  
          data:
            JSON.stringify(data)
          ,//这行不能省略，如果没有数据向后台提交也要写成data:{}的形式  
          contentType: 'application/json; charset=UTF-8',
          dataType:"json",//这里要注意如果后台返回的数据不是json格式，会进入到error:function(data){}中  
          async: false,
          success:function(value){             
              console.log(value)
              if (value["route"] == "nofile") {
                that.$message({
                  message: '需要先上传数据文件',
                  type: 'warning'
                });
              }
              else {
                that.download_file = value['route']
                that.$message({
                  message: 'k-means聚类完成，可以下载聚类后的文件',
                  type: 'success'
                });          
              }  
          },  
          error:function(value){ 
              alert("k-means聚类出现错误");  
          } 
      });
    },
    Ttest(){
      let data = {}
      data["Tnum"] = this.Tnum;
      let that = this;
      $.ajax({  
          type:"POST",//type可以为post也可以为get  
          url: "/css/Ttest/" + sessionStorage.getItem('user'),  
          data:
            JSON.stringify(data)
          ,//这行不能省略，如果没有数据向后台提交也要写成data:{}的形式  
          contentType: 'application/json; charset=UTF-8',
          dataType:"json",//这里要注意如果后台返回的数据不是json格式，会进入到error:function(data){}中  
          async: false,
          success:function(value){             
              console.log(value)
              if (value["route"] == "nofile") {
                that.$message({
                  message: '需要先上传数据文件',
                  type: 'warning'
                });
              }
              else {
                that.download_file = value['route']
                that.$message({
                  message: '单样本T检验完成，可以下载检验后的文件',
                  type: 'success'
                });          
              }  
          },  
          error:function(value){ 
              alert("单样本T检验出现错误");  
          } 
      });
    },
    dtw(){
      let that = this;
      $.ajax({  
          type:"POST",//type可以为post也可以为get  
          url: "/css/dtw/" + sessionStorage.getItem('user'),  
          data:{},//这行不能省略，如果没有数据向后台提交也要写成data:{}的形式  
          contentType: 'application/json; charset=UTF-8',
          dataType:"json",//这里要注意如果后台返回的数据不是json格式，会进入到error:function(data){}中  
          async: false,
          success:function(value){             
              console.log(value)
              if (value["route"] == "nofile") {
                that.$message({
                  message: '需要先上传数据文件',
                  type: 'warning'
                });
              }
              else if (value["route"] == '需要上传两个文件以进行时序列dtw分析') {
                that.$message({
                  message: '需要上传两个文件以进行时序列dtw分析',
                  type: 'warning'
                });
              }
              else{
                that.download_file = value['route']
                that.$message({
                  message: '时序DTW分析完成，可以下载分析后的文件',
                  type: 'success'
                });          
              }
          },  
          error:function(value){ 
              alert("时序DTW分析出现错误");  
          } 
      });
    },
    nb(){
      let that = this;
      $.ajax({  
          type:"POST",//type可以为post也可以为get  
          url: "/css/nb/" + sessionStorage.getItem('user'),  
          data:{},//这行不能省略，如果没有数据向后台提交也要写成data:{}的形式  
          contentType: 'application/json; charset=UTF-8',
          dataType:"json",//这里要注意如果后台返回的数据不是json格式，会进入到error:function(data){}中  
          async: false,
          success:function(value){
            // console.log(value['route'][-3])
            // if (value['route'][-3]) {}
            console.log(value)
            if (value["route"] == "nofile") {
              that.$message({
                message: '需要先上传训练集和测试集文件',
                type: 'warning'
              });
            }
            else if (value["route"] == '需要上传训练集和测试集以进行模型训练与测试') {
              that.$message({
                message: '需要上传训练集和测试集以进行模型训练与测试',
                type: 'warning'
              });
            }
            else{
              that.download_file = value['route']
              that.$message({
                message: '朴素贝叶斯模型训练与测试完成，可以下载测试集结果文件',
                type: 'success'
              });              
            }
          },  
          error:function(value){ 
              alert("朴素贝叶斯模型训练与测试出现错误");  
          } 
      });
    },
    wordCloud(){
      let that = this;
      $.ajax({  
          type:"POST",//type可以为post也可以为get  
          url: "/css/wordCloud/" + sessionStorage.getItem('user'),  
          data:{},//这行不能省略，如果没有数据向后台提交也要写成data:{}的形式  
          contentType: 'application/json; charset=UTF-8',
          dataType:"json",//这里要注意如果后台返回的数据不是json格式，会进入到error:function(data){}中  
          async: false,
          success:function(value){
            console.log(value['route'])
            // if (value['route'][-3]) {}
            if (value["route"] == "nofile") {
              that.$message({
                message: '需要先上传txt文件',
                type: 'warning'
              });
            }
            else {
              that.download_file = value['route']
              that.$message({
                message: '文本词云生成已完成，可以下载词云图片',
                type: 'success'
              });          
            }
          },  
          error:function(value){ 
              alert("文本词云生成出现错误");  
          } 
      });
    },
    pdf2word(){
      let that = this;
      $.ajax({  
          type:"POST",//type可以为post也可以为get  
          url: "/css/pdf2word/" + sessionStorage.getItem('user'),  
          data:{},//这行不能省略，如果没有数据向后台提交也要写成data:{}的形式  
          contentType: 'application/json; charset=UTF-8',
          dataType:"json",//这里要注意如果后台返回的数据不是json格式，会进入到error:function(data){}中  
          async: false,
          success:function(value){
            console.log(value['route'])
            // if (value['route'][-3]) {}
            console.log(value)
            if (value["route"] == "nofile") {
              that.$message({
                message: '需要先上传pdf文件',
                type: 'warning'
              });
            }
            else {
              that.download_file = value['route']
              that.$message({
                message: '文献PDF内容提取已完成，可以下载word文档',
                type: 'success'
              });          
            }
          },  
          error:function(value){ 
              alert("文献PDF内容提取出现错误");  
          } 
      });
    },
    MIC(){
      let that = this;
      $.ajax({  
          type:"POST",//type可以为post也可以为get  
          url: "/css/MIC/" + sessionStorage.getItem('user'),  
          data:{},//这行不能省略，如果没有数据向后台提交也要写成data:{}的形式  
          contentType: 'application/json; charset=UTF-8',
          dataType:"json",//这里要注意如果后台返回的数据不是json格式，会进入到error:function(data){}中  
          async: false,
          success:function(value){
            console.log(value['route'])
            // if (value['route'][-3]) {}
            console.log(value)
            if (value["route"] == "nofile") {
              that.$message({
                message: '需要先上传数据文件',
                type: 'warning'
              });
            }
            else if (value["route"] == '需要上传两个文件以进行MIC计算') {
              that.$message({
                message: '需要上传两个文件以进行MIC计算',
                type: 'warning'
              });
            }
            else{
              that.download_file = value['route']
              that.$message({
                message: '决策树模型训练与测试完成，可以下载测试集结果文件',
                type: 'success'
              });          
            }
            that.download_file = value['route']
            that.$message({
              message: 'MIC计算已完成，可以下载数据文件',
              type: 'success'
            });          
          },  
          error:function(value){ 
              alert("MIC计算出现错误");  
          } 
      });
    },
    decisionTree(){
      let that = this;
      $.ajax({  
          type:"POST",//type可以为post也可以为get  
          url: "/css/decisionTree/" + sessionStorage.getItem('user'),  
          data:{},//这行不能省略，如果没有数据向后台提交也要写成data:{}的形式  
          contentType: 'application/json; charset=UTF-8',
          dataType:"json",//这里要注意如果后台返回的数据不是json格式，会进入到error:function(data){}中  
          async: false,
          success:function(value){
            console.log(value['route'])
            console.log(value)
            if (value["route"] == "nofile") {
              that.$message({
                message: '需要先上传训练集和测试集文件',
                type: 'warning'
              });
            }
            else if (value["route"] == '需要上传训练集和测试集以进行模型训练与测试') {
              that.$message({
                message: '需要上传训练集和测试集以进行模型训练与测试',
                type: 'warning'
              });
            }
            else{
              that.download_file = value['route']
              that.$message({
                message: '决策树模型训练与测试完成，可以下载测试集结果文件',
                type: 'success'
              });          
            }
          },  
          error:function(value){ 
              alert("决策树模型训练出现错误");  
          } 
      });
    },
    randomForest(){
      let that = this;
      $.ajax({  
          type:"POST",//type可以为post也可以为get  
          url: "/css/randomForest/" + sessionStorage.getItem('user'),  
          data:{},//这行不能省略，如果没有数据向后台提交也要写成data:{}的形式  
          contentType: 'application/json; charset=UTF-8',
          dataType:"json",//这里要注意如果后台返回的数据不是json格式，会进入到error:function(data){}中  
          async: false,
          success:function(value){
            console.log(value['route'])
            console.log(value)
            if (value["route"] == "nofile") {
              that.$message({
                message: '需要先上传训练集和测试集文件',
                type: 'warning'
              });
            }
            else if (value["route"] == '需要上传训练集和测试集以进行模型训练与测试') {
              that.$message({
                message: '需要上传训练集和测试集以进行模型训练与测试',
                type: 'warning'
              });
            }
            else{
              that.download_file = value['route']
              that.$message({
                message: '随机森林模型训练与测试完成，可以下载测试集结果文件',
                type: 'success'
              });          
            }
          },  
          error:function(value){ 
              alert("随机森林模型训练出现错误");  
          } 
      });
    },
    svm(){
      let that = this;
      $.ajax({  
          type:"POST",//type可以为post也可以为get  
          url: "/css/svm/" + sessionStorage.getItem('user'),  
          data:{},//这行不能省略，如果没有数据向后台提交也要写成data:{}的形式  
          contentType: 'application/json; charset=UTF-8',
          dataType:"json",//这里要注意如果后台返回的数据不是json格式，会进入到error:function(data){}中  
          async: false,
          success:function(value){
            console.log(value['route'])
            console.log(value)
            if (value["route"] == "nofile") {
              that.$message({
                message: '需要先上传训练集和测试集文件',
                type: 'warning'
              });
            }
            else if (value["route"] == '需要上传训练集和测试集以进行模型训练与测试') {
              that.$message({
                message: '需要上传训练集和测试集以进行模型训练与测试',
                type: 'warning'
              });
            }
            else{
              that.download_file = value['route']
              that.$message({
                message: 'SVM模型训练与测试完成，可以下载测试集结果文件',
                type: 'success'
              });          
            }
          },  
          error:function(value){ 
              alert("SVM模型训练出现错误");  
          } 
      });
    },
    svr(){
      let that = this;
      $.ajax({  
          type:"POST",//type可以为post也可以为get  
          url: "/css/svr/" + sessionStorage.getItem('user'),  
          data:{},//这行不能省略，如果没有数据向后台提交也要写成data:{}的形式  
          contentType: 'application/json; charset=UTF-8',
          dataType:"json",//这里要注意如果后台返回的数据不是json格式，会进入到error:function(data){}中  
          async: false,
          success:function(value){
            console.log(value['route'])
            console.log(value)
            if (value["route"] == "nofile") {
              that.$message({
                message: '需要先上传训练集和测试集文件',
                type: 'warning'
              });
            }
            else if (value["route"] == '需要上传训练集和测试集以进行模型训练与测试') {
              that.$message({
                message: '需要上传训练集和测试集以进行模型训练与测试',
                type: 'warning'
              });
            }
            else{
              that.download_file = value['route']
              that.$message({
                message: 'SVR模型训练与测试完成，可以下载测试集结果文件',
                type: 'success'
              });          
            }
          },  
          error:function(value){ 
              alert("SVR模型训练出现错误");  
          } 
      });
    },
    linearRegression(){
      let that = this;
      $.ajax({  
          type:"POST",//type可以为post也可以为get  
          url: "/css/linearRegression/" + sessionStorage.getItem('user'),  
          data:{},//这行不能省略，如果没有数据向后台提交也要写成data:{}的形式  
          contentType: 'application/json; charset=UTF-8',
          dataType:"json",//这里要注意如果后台返回的数据不是json格式，会进入到error:function(data){}中  
          async: false,
          success:function(value){
            console.log(value['route'])
            console.log(value)
            if (value["route"] == "nofile") {
              that.$message({
                message: '需要先上传训练集和测试集文件',
                type: 'warning'
              });
            }
            else if (value["route"] == '需要上传训练集和测试集以进行模型训练与测试') {
              that.$message({
                message: '需要上传训练集和测试集以进行模型训练与测试',
                type: 'warning'
              });
            }
            else{
              that.download_file = value['route']
              that.$message({
                message: '线性回归模型训练与测试完成，可以下载测试集结果文件',
                type: 'success'
              });          
            }
          },  
          error:function(value){ 
              alert("线性回归模型训练出现错误");  
          } 
      });
    },
    logisticRegression(){
      let that = this;
      $.ajax({  
          type:"POST",//type可以为post也可以为get  
          url: "/css/logisticRegression/" + sessionStorage.getItem('user'),  
          data:{},//这行不能省略，如果没有数据向后台提交也要写成data:{}的形式  
          contentType: 'application/json; charset=UTF-8',
          dataType:"json",//这里要注意如果后台返回的数据不是json格式，会进入到error:function(data){}中  
          async: false,
          success:function(value){
            console.log(value['route'])
            console.log(value)
            if (value["route"] == "nofile") {
              that.$message({
                message: '需要先上传训练集和测试集文件',
                type: 'warning'
              });
            }
            else if (value["route"] == '需要上传训练集和测试集以进行模型训练与测试') {
              that.$message({
                message: '需要上传训练集和测试集以进行模型训练与测试',
                type: 'warning'
              });
            }
            else{
              that.download_file = value['route']
              that.$message({
                message: '逻辑回归模型训练与测试完成，可以下载测试集结果文件',
                type: 'success'
              });          
            }
          },  
          error:function(value){ 
              alert("逻辑回归模型训练出现错误");  
          } 
      });
    },
    poly(){
      let that = this;
      $.ajax({  
          type:"POST",//type可以为post也可以为get  
          url: "/css/polydata/" + sessionStorage.getItem('user'),  
          data:{},//这行不能省略，如果没有数据向后台提交也要写成data:{}的形式  
          contentType: 'application/json; charset=UTF-8',
          dataType:"json",//这里要注意如果后台返回的数据不是json格式，会进入到error:function(data){}中  
          async: false,
          success:function(value){
            console.log(value['route'])
            console.log(value)
            if (value["route"] == "nofile") {
              that.$message({
                message: '需要先上传数据文件',
                type: 'warning'
              });
            }
            else {
              that.download_file = value['route']
              that.$message({
                message: '文件缺失值插值处理完成，可以下载',
                type: 'success'
              });          
            }  
          },  
          error:function(value){ 
              alert("文件缺失值插值处理出现错误");  
          } 
      });
    }
  }
};
</script>

<style>
  .qs {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50; 

  }
  .upload{
    margin: 20px auto;
   
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  } 
  .el-main {
    background-color: #E4E7ED;
    color: #333;
    text-align: center;
    width: 1000px;
    margin: 20px auto;
  } 
  /* .el-button--primary.is-plain {
    width: 150px;
  }
  .el-button--primary {
      width: 150px;
  } */
  .el-input--suffix .el-input__inner {
    margin-left: 60px;
  }
  .box {

    .top {
      text-align: center;
    }

    .left {
      float: left;
      width: 60px;
    }

    .right {
      float: right;
      width: 60px;
    }

    .bottom {
      clear: both;
      text-align: center;
    }

    .item {
      margin: 4px;
    }

    .left .el-tooltip__popper,
    .right .el-tooltip__popper {
      padding: 8px 10px;
    }
  }
  .el-input--suffix .el-input__inner {
    padding-right: 0px;
  }
  .el-input--suffix .el-input__inner {
    margin-left: 0px;
  }
  /* .el-input__inner {
      width: 170px;
  }
  .el-button--primary, .el-button--primary.is-plain {
    width: 170px;
  } */
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .tab{
    display: inline-block;
    margin: 10px;
    font-size:14px;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    line-height:20px;
  }
</style>