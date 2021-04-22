<!-- v-model="requiredItem[item.num]" -->
<template>
  <div id="app">
    <el-row>
      <div class="word">文本关键词提取:</div>
    </el-row>    
    <el-row>
      <el-col :span="20">
        <div class="input_text">
          <el-input
            type="textarea"
            :rows="8"
            placeholder="请输入需要进行关键词提取的文本"
            v-model="textarea">
          </el-input>        
        </div>
      </el-col>
      <el-col :span="4">
        <div class="btn">
          <el-button type="primary" @click="keywordExtraction">提取</el-button>
        </div>    
      </el-col>
    </el-row>
    <el-row>
      <div class="word">提取后的关键词为：</div>
    </el-row>         
    <el-row>
      
      <el-col :span="20">
        <div class="output_text">
          <el-input
            type="textarea"
            id = "keyword"
            :rows="4"
            placeholder=""
            v-model="keyword">
          </el-input>        
        </div>
      </el-col>
      <el-col :span="4">   
      </el-col>
    </el-row>      
  </div>

</template>

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
      textarea: '',
      keyword: '',
    }
  },
  methods:{
    keywordExtraction(){
      var textarea = this.textarea.replace(/(^\s*)|(\s*$)/g, "");
      console.log(textarea.length)  
      if(textarea.length == 0){
        this.$message({
          duration: 2000,
          message: '待提取关键字的文本信息不能为空',
          type: 'warning'
        });
      }
      else{
        var that = this;
        let data = {}
        data["data"] = textarea;
        $.ajax({  
            type:"POST",//type可以为post也可以为get  
            url: "/css/keywordExtraction",  
            data:
              JSON.stringify(data)
            ,//这行不能省略，如果没有数据向后台提交也要写成data:{}的形式  
            contentType: 'application/json; charset=UTF-8',
            dataType:"json",//这里要注意如果后台返回的数据不是json格式，那么就会进入到error:function(data){}中  
            async: false,
            success:function(value){             
                console.log(value)
                document.getElementById("keyword").value = value
            },  
            error:function(value){ 
                alert("文本关键词提取出现错误");  
            } 
        });         
      }
    }
  }
};
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    
  }
  .el-row {
    text-align: center;
    margin-left: 100px;
    margin-right: 100px;   
  }
  .el-col {
    border-radius: 4px;
  }
  .input_text{
    margin-top: 10px;
    margin-left: 100px;
    margin-right: 10px;
  }
  .btn{
    margin-top: 50px;
    margin-left: 10px;
    margin-right: 30px;   
  }
  .output_text{
    margin-top: 5px;
    margin-left: 100px;
    margin-right: 10px;
  } 
  .word{
    margin-top: 20px; 
    margin-left: 100px;
    float: left;   
  } 
</style>