<!-- v-model="requiredItem[item.num]" -->
<template>
  <div id="app">
    <el-row>
      <div class="w">微信文章搜索:</div>
    </el-row>    
    <el-row style="width: 85%;">
      <el-col :span="20">
        <div class="input">
          <el-input
            type="textarea"
            :rows="4"
            placeholder="请输入待搜索的文章标题"
            v-model="textarea">
          </el-input>        
        </div>
      </el-col>
      <el-col :span="4">
        <div class="btn">
          <el-button type="primary" @click="searchArticle">搜索</el-button>
        </div>    
      </el-col>
    </el-row>
    <el-row>
      <div class="w">搜索到的相关文章如下(最多显示10篇 若加载不出文章可再次点击搜索按钮)：</div>
    </el-row>         
    <el-row v-loading="loading">
      <el-table
        :data="tableArticle"
        @cell-click='linkto'
        border
        style="width: 85%; 
        margin-top: 20px">
        <el-table-column
          prop="title"
          label="文章标题">
        </el-table-column>
        <el-table-column
          prop="time"
          label="发表时间"
          width="160">
        </el-table-column>
        <el-table-column
          prop="abstract"
          label="摘要"
          width="380">
        </el-table-column>
        <el-table-column
          prop="url"
          label="链接地址"
          width="160">
          <template slot-scope="scope">
            <el-button
              @click="handleEdit(scope.$index, scope.row)"
              class="buttonText">链接</el-button>
          </template> 
        </el-table-column>
      </el-table>      
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
      article: '',
      tableArticle: [],
      link:[],
      loading: false,
    }
  },
  methods:{
    // getLocalTime(nS) {     
    //   return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');
    // },
    searchArticle(){
      var textarea = this.textarea.replace(/(^\s*)|(\s*$)/g, "");
      console.log(textarea.length)  
      if(textarea.length == 0){
        this.$message({
          duration: 2000,
          message: '待搜索文章的标题信息不能为空',
          type: 'warning'
        });
      }
      else{
        this.loading = true
        var that = this;
        let data = {}
        data["data"] = textarea;
        $.ajax({  
            type:"POST",//type可以为post也可以为get  
            url: "/css/searchArticle/",  
            data:
              JSON.stringify(data)
            ,//这行不能省略，如果没有数据向后台提交也要写成data:{}的形式  
            contentType: 'application/json; charset=UTF-8',
            dataType:"json",//这里要注意如果后台返回的数据不是json格式，那么就会进入到error:function(data){}中  
            async: false,
            success:function(value){
                that.link = []
                that.loading = false
                console.log(value)
                // that.tableArticle = value;
                for(let i = 0; i < value.length; i++){
                  var dict = {}
                  dict["title"] = value[i].article.title;
                  dict["time"] = new Date(parseInt(value[i].article.time) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');
                  dict["abstract"] = value[i].article.abstract;
                  dict["url"] = "<a>" + value[i].article.url;
                  that.link.push(value[i].article.url)
                  that.tableArticle.push(dict);
                }
                // console.log(that.link)
            },  
            error:function(value){ 
                alert("微信文章搜索出现错误");
                that.loading = false
            } 
        });
      }
    },
    handleEdit(index, row) {
      console.log(index, row);
      window.open(this.link[index])
    },
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
    margin-right: 100px;   
  }
  .el-col {
    border-radius: 4px;
  }
  .input{
    margin-top: 10px;
    margin-right: 10px;
  }
  .btn{
    margin-top: 15px;
    margin-left: 10px;
    margin-right: 30px;   
  }
  .w{
    margin-top: 20px; 
    float: left;   
  } 
</style>