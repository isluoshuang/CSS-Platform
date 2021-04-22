<template>
  <div class="data-container">
    <template v-if="!isError">
      <span class="back" @click="goBack()">&lt; 返回</span>
      <h2>{{qsItem.title}}</h2>
      <p>此统计分析只包含完整回收的数据</p>
    </template>
    <div class="content" v-if="!isError">
      <template v-for="(item, index) in qsItem.question">
        <div class="content-item">
          <div class="item-left">
            <p>{{item.num}} &nbsp; {{item.title}}</p>
              <p class="option" v-for="option in item.options">{{option}}</p>
          </div>

          <div class="item-right" v-if="item.type === 'radio'">
            <p>数据占比</p>
            <div :id="`radio-${item.num}`">
            </div>
          </div>

          <div class="item-right" v-else-if="item.type === 'textarea'">
            <div class="textareaAll">
              <el-table
                :data="tableData"
                height="250"
                style="width: 100%">
                <el-table-column
                  prop="text"
                  label="回答汇总"
                  width="360">
                </el-table-column>
              </el-table>
            </div>
          </div>
          <div class="item-right" v-else-if="item.type === 'rate'">
            <p>数据占比</p>
            <div :id="`rate-${item.num}`"></div>
          </div>
          <div class="item-right" v-else-if="item.type === 'checkbox'">
            <p>数据占比</p>
            <div :id="`chart-${item.num}`">
            </div>
          </div>
        </div>
      </template>
    </div>
    <div class="error" v-if="isError">
      404 Not Found
    </div>
  </div>
</template>

<script src="echarts.min.js"></script>
<script>

import storage from '../store.js'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/toolbox'
/**
 * A module that define qs-data router view
 */
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?5f228c169bee6b288c0b4652cccda107";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

 
  export default {
    name: 'qsData',
    data() {
      return {
        qsItem: {},
        qsList: [],
        isError: false,
        chartData: [],
        chartNum: [],
        qsChoose: [],
        tableData: [],
      }
    },
    created() {
      this.fetchData()
    },
    mounted() {
      this.renderChartData()
      this.chartNum.forEach( (chartNum, index) => {
        this.renderEChart(chartNum, this.chartData[index])
      } )
    },
    methods: {
      fetchData() {
        let user = {}
        user["user"] = sessionStorage.getItem('user')
        var that = this;
        $.ajax({  
            type:"post",//type可以为post也可以为get  
            url: "/css/list",  
            data: JSON.stringify(user),//这行不能省略，如果没有数据向后台提交也要写成data:{}的形式  
            contentType: 'application/json; charset=UTF-8',
            dataType:"json",//这里要注意如果后台返回的数据不是json格式，那么就会进入到error:function(data){}中  
            async: false,
            success:function(value){ 
              that.qsList = value
              // console.log(that.qsList)
              let i = 0;
              for (let length = that.qsList.length; i < length; i++) {
                if (that.qsList[i].num == that.$route.params.num) {
                  that.qsItem = that.qsList[i]
                  break
                }
              }
              if (i === that.qsList.length) that.isError = true
              // console.log(that.qsItem)
            },  
            error:function(value){ 
                alert("问卷数据显示出现错误");  
            } 
        });  
        let data_num = {}
        data_num["num"] = that.qsItem.num;
        data_num["user"] = that.qsItem.user;
        // console.log(JSON.stringify(data_num))
        $.ajax({  
            type:"POST",//type可以为post也可以为get  
            url: "/css/showData",  
            data:
              JSON.stringify(data_num)
            ,//这行不能省略，如果没有数据向后台提交也要写成data:{}的形式  
            contentType: 'application/json; charset=UTF-8',
            dataType:"json",//这里要注意如果后台返回的数据不是json格式，那么就会进入到error:function(data){}中  
            async: false,
            success:function(value){
              that.qsChoose = value 
              console.log(that.qsChoose)
              let i = 0;
              for (let length = that.qsItem.question.length; i < length; i++) {
                if (that.qsItem.question[i].type == 'textarea') {
                  let num = that.qsItem.question[i].num
                  let int_num = Number(num.substr(1))
                  for (let l = 0; l < that.qsChoose[int_num-1][num].length; l++) {
                    let pair = {}
                    pair['text'] = that.qsChoose[int_num-1][num][l]
                    that.tableData.push(pair)
                  }
                  break
                }
              }
              console.log(that.tableData)
            },  
            error:function(value){ 
                alert("问卷结果查询出现错误");  
            } 
        });                 
      },
      renderChartData() {  
        this.qsItem.question.forEach( item => {
          if (item.type === 'checkbox' || item.type === 'radio' || item.type === 'rate') {
            // || item.type === 'radio'
            let value  = 0
            let sum    = 0
            let data   = []
            let length = item.options.length

            this.chartNum.push(item.num);

            item.options.forEach( (optionName, index) => {
              for (let i = 0; i < this.qsChoose.length; i++) {
                if (this.qsChoose[i][item.num] != undefined) 
                {
                  value = this.qsChoose[i][item.num][optionName]
                }
              }
              // value = this.qsChoose[item.num][optionName]
              sum += value
              // if (index == length - 1) {
              //   value = 1000 - sum
              // } else {
              //   value = Math.floor(Math.random() * (1001 - sum))
              //   sum += value
              // }

              data.push({value: value, name: optionName})
            } )
            this.chartData.push(data)
          }
        }) 
        // console.log(this.chartNum)
        // console.log(this.chartData)
      },
      renderEChart(chartNum, chartData) {
        // `chart-${chartNum}`
        var echarts = require('echarts');
        // console.log(this.qsItem['question'].length)
        // console.log(this.qsItem['question'])
        for (let i = 0; i < this.qsItem['question'].length; i++) {
          // console.log(this.qsItem['question'][i])
          if(this.qsItem['question'][i]['num'] == chartNum && this.qsItem['question'][i]['type'] == 'checkbox'){
            // console.log(this.qsItem['question'][i]['num'])
            // console.log(chartNum)
            // console.log(this.qsItem['question'][i]['type'])

            // console.log(document.getElementById(`chart-${chartNum}`))
            let myChart = echarts.init(document.getElementById(`chart-${chartNum}`))
            let option = {
              tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}选择人次 : {c} ({d}%)"
              },
              series: [
                {
                  name: '数据占比',
                  type: 'pie',
                  radius: '55%',
                  center: ['50%', '60%'],
                  data: chartData
                }
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
      
            let currentIndex = -1;
      
            setInterval(function () {
              var dataLen = option.series[0].data.length;
      
              myChart.dispatchAction({
                type: 'downplay',
                seriesIndex: 0,
                dataIndex: currentIndex
              });
              currentIndex = (currentIndex + 1) % dataLen;
      
              myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: currentIndex
              });
      
              myChart.dispatchAction({
                type: 'showTip',
                seriesIndex: 0,
                dataIndex: currentIndex
              });
            }, 1000);
      
            myChart.setOption(option)           
          }
          else if(this.qsItem['question'][i]['num'] == chartNum && this.qsItem['question'][i]['type'] == 'radio'){
            // console.log(this.qsItem['question'][i]['num'])
            // console.log(chartNum)
            // console.log(this.qsItem['question'][i]['type'])
            // console.log(document.getElementById(`radio-${chartNum}`))            
            var myChart = echarts.init(document.getElementById(`radio-${chartNum}`));
            var myValue = [];
            var myName = [];
            // console.log("hhhh")
            for(let i = 0; i < chartData.length; i++){
              let value = chartData[i].value;
              let name = chartData[i].name;
              myValue.push(value)
              myName.push(name)
            }
            // console.log(myName)
            // console.log(myValue)
            var option = {
              tooltip: {},
              legend: {
                  data:['条形图']
              },
              xAxis: {
                  data: myName
              },
              yAxis: {},
              series: [{
                  name: '选项',
                  type: 'bar',
                  data: myValue                
              }]
            };
            myChart.setOption(option);
          }
          else if(this.qsItem['question'][i]['num'] == chartNum && this.qsItem['question'][i]['type'] == 'rate'){
            // console.log(this.qsItem['question'][i]['num'])
            // console.log(chartNum)
            // console.log(this.qsItem['question'][i]['type'])

            // console.log(document.getElementById(`rate-${chartNum}`))
            let myChart = echarts.init(document.getElementById(`rate-${chartNum}`))
            let option = {
              tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}选择人次 : {c} ({d}%)"
              },
              series: [
                {
                  name: '数据占比',
                  type: 'pie',
                  radius: '55%',
                  center: ['50%', '60%'],
                  data: chartData
                }
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
      
            let currentIndex = -1;
      
            setInterval(function () {
              var dataLen = option.series[0].data.length;
      
              myChart.dispatchAction({
                type: 'downplay',
                seriesIndex: 0,
                dataIndex: currentIndex
              });
              currentIndex = (currentIndex + 1) % dataLen;
      
              myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: currentIndex
              });
      
              myChart.dispatchAction({
                type: 'showTip',
                seriesIndex: 0,
                dataIndex: currentIndex
              });
            }, 1000);
      
            myChart.setOption(option)           
          }
          else{
            this.one = 30
          }
        }
      },
      goBack() {
        this.$router.push({path:'/list'})
      }
    },
    watch: {
      '$route': 'fetchData'
    }
  }
</script>

<style lang="scss" scoped>
@import '../style/QS-data';
</style>