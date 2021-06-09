<template>
  <div class="qs-list">
    <ul v-if="qsList.length == 0 ? false : true">
      <li></li>
      <li>标题</li>
      <li>截止时间</li>
      <li>状态</li>
      <li>操作<span @click="$router.push({name: 'qsEdit', params: {num: 0}})">+新建问卷</span></li>
    </ul>
    <template v-for="item in qsList">
      <ul>
        <li><input type="checkbox" v-model="item.checked"></li>
        <li>{{item.title}}</li>
        <li>{{item.time}}</li>
        <li :class="item.state === 'inissue' ? 'inissue' : ''">{{item.stateTitle}}</li>
        <li>
          <button @click="iterator = edit(item); iterator.next()">编辑</button>
          <button @click="iterator = delItem(item.num); iterator.next()">删除</button>
          <router-link :to="`/fill/${item.user}/${item.num}`" tag="button">填写问卷</router-link>
<!--           <button @click="$router.push({name: 'qsFill', params: {num: item.num;user:sessionStorage.getItem('user') }})">填写问卷</button> -->
          <button @click="iterator = watchData(item); iterator.next()">统计分析</button>
  <!--         <button @click="iterator = analyzeData(item); iterator.next()">分析问卷</button> -->
        </li>
      </ul>
    </template>
    <div class="list-bottom" v-if="qsList.length == 0 ? false : true">
      <label><input type="checkbox" id="all-check" v-model="selectAll">全选</label>
      <button @click="iterator = delItems(); iterator.next()">删除</button>
    </div>
      <div class="add-qs" v-if="qsList.length === 0">
        <button class="add-btn" 
        @click="$router.push({name: 'qsEdit', params: {num: 0}})">+&nbsp;&nbsp;新建问卷</button>
      </div>
    <div class="shadow" v-if="showDialog">
      <div class="del-dialog">
        <header>
          <span>提示</span>
          <span class="close-btn" @click="showDialog = false">X</span>
        </header>
        <p>{{info}}</p>
        <div class="btn-box">
          <button class="yes" @click="iterator.next();">确定</button>
          <button @click="showDialog = false">取消</button>
        </div>
      </div>
    </div>
  </div>
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
// import storage from '../store.js'

/**
 * A module that define qs-list router view
 */
  export default {
    name: 'qsList',
    data() {
      return {
        qsList: [],
        showDialog: false,
        iterator: {},
        info: ''
      }
    },
    mounted() {
      let user = {}
      user["user"] = sessionStorage.getItem('user')
      // if (user["user"] == null) {
      //   alert("请先进入登陆/注册页面");
      //   this.$router.push({path: '/login'})
      // }
     // else{
        var that = this;
        // let change_num = [];
        $.ajax({  
            type:"post",//type可以为post也可以为get  
            url: "/css/list",  
            data: JSON.stringify(user),//这行不能省略，如果没有数据向后台提交也要写成data:{}的形式  
            contentType: 'application/json; charset=UTF-8',
            dataType:"json",//这里要注意如果后台返回的数据不是json格式，那么就会进入到error:function(data){}中  
            async: false,
            success:function(value){               
              console.log(value)
              that.qsList = value;
              // that.qsList.forEach( item => {
              //   let [year, month, day] = item.time.split('-')
              //   if (year < new Date().getFullYear() && item.state != 'issueed') {
              //     item.state = 'issueed'
              //     item.stateTitle = '已发布'
              //     change_num.push(item.num)
              //   } else if (year == new Date().getFullYear() 
              //     && month < new Date().getMonth() + 1 && item.state != 'issueed') {
              //     item.state = 'issueed'
              //     item.stateTitle = '已发布'
              //     change_num.push(item.num)
              //   } else if (year == new Date().getFullYear() 
              //     && month == new Date().getMonth() + 1 
              //     && day < new Date().getDate() && item.state != 'issueed') {
              //     item.state = 'issueed'
              //     item.stateTitle = '已发布'
              //     change_num.push(item.num)
              //   }
              // })                              
            },  
            error:function(value){ 
                alert("查询出现了错误！");  
            } 
        });         
      //}
    },
    methods: {
      showDialogMsg(info) {
        this.showDialog = true;
        this.info = info;
      },
      *delItem(num) {
        // console.log(this.qsList)
        // console.log("hhhhh")
        // console.log(num)
        yield this.showDialogMsg('确认要删除此问卷？')

        yield (() => {
          var that = this;
          let index = 0;
          for (let length = this.qsList.length; index < length; index++) {
            if (this.qsList[index].num === num) break;
          }
          let data = {}
          data["num"] = num;
          data["user"] = sessionStorage.getItem('user');
          $.ajax({  
              type:"post",//type可以为post也可以为get  
              url: "/css/deleteList",  
              data: JSON.stringify(data),//这行不能省略，如果没有数据向后台提交也要写成data:{}的形式  
              contentType: 'application/json; charset=UTF-8',
              dataType:"json",//这里要注意如果后台返回的数据不是json格式，那么就会进入到error:function(data){}中  
              success:function(value){ 
                  that.qsList.splice(index, 1); //delete the index element                             
              },  
              error:function(value){ 
                  that.loading = false; 
                  alert("删除失败！");  
              } 
          }); 

          this.showDialog = false;
        })();
      },
      *delItems() {
        yield this.showDialogMsg('确认要删除选中的问卷？');

        yield (() => {
          this.showDialog = false;
          if (this.selectAll) {
            this.qsList = [];
            return;
          }
          if (this.selectGroup == []) return;

          this.selectGroup.forEach( item => {
            if (this.qsList.indexOf(item) > -1) this.qsList.splice(this.qsList.indexOf(item), 1);
          } )
        })();     
      },
      *edit(item) {
        yield (() => {
          if (item.state === 'noissue') {
            this.showDialogMsg('确认要编辑？');
          } else {
            this.showDialogMsg('只有未发布的问卷才能编辑');
          }
        })();
        yield (() => {
          if (item.state !== 'noissue') {
            this.showDialog = false;
          } else {
            this.showDialog = false;
            this.$router.push({name: 'qsEdit', params: { num: item.num }})
          }
        })();
      },
      *watchData(item) {
        yield (() => {
          if (item.state === 'noissue') {
            this.showDialogMsg('未发布的问卷无数据可查看');
          } else {
            this.$router.push({ name: 'qsData', params: { num: item.num }})
          }
        })();
        yield this.showDialog = false;
      },
      // *analyzeData(item) {
      //   yield (() => {
      //     if (item.state === 'noissue') {
      //       this.showDialogMsg('未发布的问卷无法进行分析');
      //     } else {
      //       this.$router.push({ name: 'qsAnalysis', params: { num: item.num }})
      //     }
      //   })();
      //   yield this.showDialog = false;
      // }      
    },
    computed: {
      selectAll: {
        get() {
          return this.selectCount === this.qsList.length && this.selectCount !== 0;
        },
        set(value) {
          this.qsList.forEach( item => {
            item.checked = value;
          } );
          return value;
        }
      },
      selectCount() {
        let i = 0;
        this.qsList.forEach( item => {
          if (item.checked) i++;
        } );
        return i;
      },
      selectGroup() {
        let group = [];
        this.qsList.forEach( item => {
          if (item.checked) group.push(item);
        } );
        return group;
      }
    },
    // watch: {
    //   qsList: {
    //     handler(val) {
    //       val.forEach( (item, index) => {
    //         item.num = index + 1
    //       } )
    //       storage.save(val);
    //     },
    //     deep: true
    //   }
    // }
  }
</script>

<style lang="scss" scoped>
@import '../style/QS-list';
</style>