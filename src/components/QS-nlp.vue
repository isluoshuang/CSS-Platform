<!-- v-model="requiredItem[item.num]" -->
<template>
  <div id="app">
    <div class="bg">
      <div class="n1">
        <span class="el-icon-document"></span>
        <router-link :to="`/getSentiment`">英文文本情感分析</router-link>
      </div>
      <div class="n1">
        <span class="el-icon-document"></span>
        <router-link :to="`/keywordExtraction`">中文文本关键词提取</router-link>
      </div>
      <div class="n1">
        <span class="el-icon-document"></span>
        <router-link :to="`/getWordFrequency`">英文文本词频统计</router-link>
      </div>
      <div class="n1">
        <span class="el-icon-document"></span>
        <router-link :to="`/freAnlysisPuc`">英文文本标点符号频次统计</router-link>
      </div>      
    </div>
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
  .n1{
    margin: 0 auto;
    margin-top: 38px;
    border-radius: 8px;
    background-color: white;
    width: 230px;
    font-size: 17px;
    color: #409EFF;
    padding: 20px 20px 20px 30px;
    text-align: center;
  }
</style>