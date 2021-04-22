<!-- v-model="requiredItem[item.num]" -->
<template>
  <div id="app">
    <el-row>
      <div class="word">请选择需要进行MIC计算的数据库字段:</div>
    </el-row>    

    <el-row>
      <span class="demon">字段0</span>
      <el-cascader
        v-model="value"
        :options="options"
        :props="{ expandTrigger: 'hover' }">
      </el-cascader>

      <span class="demon">字段1</span>
      <el-cascader
        v-model="value1"
        :options="options"
        :props="{ expandTrigger: 'hover' }">
      </el-cascader>

      <el-button type="primary" class="click" @click="compute">计算</el-button>
    </el-row>

    <el-row>
      <div class="word">统计结果为：</div>
    </el-row>
    <el-row>
      <el-input placeholder="计算结果" v-model="mic_result" :disabled="true"></el-input>
      <!-- <div class="word">polarity代表情感极性，取值范围是[-1, 1]，-1代表完全负面，1代表完全正面</div> -->
    </el-row>
    <el-row>
      <div class="word">MIC取值范围是[0, 1]，1代表非常相关，0代表不相关</div>
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
  name: 'MicCompute',
  data() {
    return {
      value: [],
      options: [],
      value1: [],
      mic_result: ''
    }
  },
  mounted() {
    var that = this;
    $.ajax({  
      type:"get",//type可以为post也可以为get  
      url: "/css/getOptions",  
      data: {},//这行不能省略，如果没有数据向后台提交也要写成data:{}的形式  
      contentType: 'application/json; charset=UTF-8',
      dataType:"json",//这里要注意如果后台返回的数据不是json格式，那么就会进入到error:function(data){}中  
      async: false,
      success:function(value){               
        console.log(value)
        that.options = value;
      },
      error:function(value){ 
        alert("数据库出现了错误！");  
      } 
    });
  },  
  methods:{
    compute(){
      console.log(this.value)
      console.log(this.value1)
      let value = this.value
      let value1 = this.value1
      var that = this
      if(value!=[]){
        if(value1==[]){
          alert("请先选择后计算")
        }
        else{
          if(value[0]==value1[0] && value[1]==value1[1]){
            let value_user = [value,value1]
            $.ajax({
              type:"post",//type可以为post也可以为get  
              url: "/css/get_mic_data",  
              data: JSON.stringify(value_user),//这行不能省略，如果没有数据向后台提交也要写成data:{}的形式  
              contentType: 'application/json; charset=UTF-8',
              dataType:"json",//这里要注意如果后台返回的数据不是json格式，那么就会进入到error:function(data){}中  
              async: false,
              success:function(value){               
                console.log(value)
                that.mic_result = value;
                // that.options = value;
              },
            });
            // 显示mic值
          }
          else{
            alert("请选择同一数据库同一集合下的不同字段")
          }
        }
      }
      else{
        alert("请先选择后计算")
      } 
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
    margin-top: 10px; 
    margin-left: 20%;
    float: left;   
    font-size: larger;
  } 
  .demon{
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
    margin-left: 10px;
    font-size: large;
  }
  .click{
    width: 100px;
    margin-left: 25px;
    font-size: large;
  }
  .el-input.is-disabled .el-input__inner {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
      width: 170px;
  }
</style>