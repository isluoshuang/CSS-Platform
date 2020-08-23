<!-- v-model="requiredItem[item.num]" -->
<template>
  <div id="app">
    <el-row>
      <el-col :span="6">
        <el-button type="primary" plain id="btn">
          <router-link :to="`/searchArticle`">搜索微信文章</router-link>
        </el-button>        
      </el-col>
      <el-col :span="18">
        <div id="txt" style="margin-left: 100px">
          tips:给出文章的标题即可搜索相对应的微信文章
        </div>
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
  #btn{
    margin-top: 30px;
    margin-left: 200px;
  }
  #txt{
    text-align: left;
    margin-top: 38px;
  }

</style>