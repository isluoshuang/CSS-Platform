<!-- v-model="requiredItem[item.num]" -->
<template>
  <div class="fill-container">
    <div class="fill" v-if="!isError">
      <router-link to="/list" tag="span" class="back">&lt; 返回</router-link>
      <h2>{{qsItem.title}}</h2>
      <div class="content">
        <div class="content-item" v-for="item in qsItem.question">
          <div v-if = "!item.isHidden">
            <p class="qs-title" style="margin-bottom: 10px;">
              {{item.num}}&nbsp;{{item.title}}&nbsp;{{getMsg(item)}}
            </p>
            <p v-for="option in item.options" class="option" v-if="item.type === 'radio' || item.type === 'checkbox' || item.type === 'scene'">
              <label style="margin-right: 8px">
                <input 
                type="radio" 
                id = "radio"
                :name="`${item.num}-${item.title}`"
                v-model="requiredItem[item.num]"
                v-if="item.type === 'radio'"
                :value="option">
                <input 
                type="checkbox" 
                id = "checkbox"
                :name="`${item.num}-${item.title}`"
                v-model="requiredItem[item.num]"
                v-if="item.type === 'checkbox'"
                :value="option">
                <input 
                type="radio" 
                id = "radio"
                :name="`${item.num}-${item.title}`"
                v-model="requiredItem[item.num]"
                v-if="item.type === 'scene'"
                :value="option">
                <span v-if="item.type != 'rate'">
                  {{option}}
                </span>
                <el-button v-if="item.type === 'scene'" @click = "showNext(item.num,requiredItem[item.num])" style="margin-bottom: 3px; margin-left: 5px">
                  下一题
                </el-button>
              </label>
            </p>
            <p v-for="option in item.options" class="option" style="float: left;" v-if="item.type === 'rate'">
              <label style="margin-right: 8px">
                <input 
                type="radio" 
                id = "radio"
                :name="`${item.num}-${item.title}`"
                v-model="requiredItem[item.num]"
                v-if="item.type === 'rate'"
                :value="option">{{option}}
              </label>
            </p>            
          </div>
          <textarea 
            id = "textarea"
            v-if = "item.type === 'textarea'" 
            v-model="requiredItem[item.num]">
          </textarea>
        </div>
      </div>
      <transition name="fade">
        <div class="dialog" v-if="showDialog">
          <div class="submit-dialog" v-if="submitError">
            <header>
              <span>提示</span>
              <span class="close-btn" @click="showDialog = false">X</span>
            </header>
            <p>{{info}}</p>
            <div class="btn-box">
              <button class="yes" @click="showDialog = false">确定</button>
              <button @click="showDialog = false">取消</button>
            </div>
          </div>
          <div class="submit-dialog" v-else>
            <header>
              <span>提示</span>
              <span class="close-btn" @click="showDialog = false">X</span>
            </header>
            <p>{{info}}</p>
          </div>
        </div>
      </transition>  
      <footer>
        <button @click="submit" class="submit">提交</button>
      </footer>
    </div>
    <div class="error" v-else>
      404 Not Found
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
// import storage from '../store.js'

/**
 * A module that define qs-fill router view
 */
  export default {
    name: 'qsFill',
    data() {
      return {
        qsItem: [],
        qsList: [],
        isError: false,
        showDialog: false,
        info: '',
        submitError: false,
        requiredItem: {},
      }
    },
    created() {
      this.fetchData()
    },
    // mounted() {
    //   this.getRequiredItem()
    // },
    methods: {
      fetchData() {
        let user = {}
        user['user'] = this.$route.params.user
        user['num'] = this.$route.params.num
        console.log("testing")
        console.log(this.$route.params.user)
        console.log(this.$route.params.num)
        var that = this;
        $.ajax({  
            type:"post",//type可以为post也可以为get  
            url: "/css/fillList",
            data: JSON.stringify(user),
            contentType: 'application/json; charset=UTF-8',
            dataType:"json",//这里要注意如果后台返回的数据不是json格式，那么就会进入到error:function(data){}中  
            success:function(value){ 
              console.log("success")
              that.qsItem = value[0]
              console.log(that.qsItem)
              that.qsItem.question.forEach( item => {
                if (item.isNeed) {
                  if (item.type === 'checkbox') {
                    that.requiredItem[item.num] = []
                  } else {
                    that.requiredItem[item.num] = ''
                  }
                }
              } )

            },  
            error:function(value){ 
                alert("问卷查询出现错误");  
            } 
        }); 
      },    
      getMsg(item) {
        let msg = ''
        if (item.type === 'radio') {
          msg = '(单选题)'
        } else if (item.type === 'checkbox') {
          msg = '(多选题)'
        } else if (item.type === 'textarea') {
          msg = '(文本题)'
        } else if (item.type === 'rate') {
          msg = '(1表示完全不同意，3表示中立，5表示完全同意)'
        } else if (item.type === 'scene') {
          msg = '(情景题)'
        }
        return item.isNeed ? `${msg} *` : msg
      },
      submit() {
        if (this.qsItem.state === 'inissue') {
          let result = this.validate()
          if (result) {
            console.log(this.requiredItem)
            this.showDialog = true
            this.submitError = false
            // let that = this
            let send_data = {}
            send_data["num"] = this.qsItem.num
            send_data["user"] = this.qsItem.user
            send_data["question"] = this.requiredItem          
            $.ajax({  
                type:"post",//type可以为post也可以为get  
                url: "/css/addChoose",
                data: JSON.stringify(send_data),//这行不能省略，如果没有数据向后台提交也要写成data:{}的形式  
                contentType: 'application/json; charset=UTF-8',
                dataType:"json",//这里要注意如果后台返回的数据不是json格式，那么就会进入到error:function(data){}中  
                success:function(value){ 
                  if (value["status"] == 'success') {
                    // this.$Message.success('新建问卷成功!')
                  }                     
                },  
                error:function(value){ 
                  alert("提交问卷失败！");  
                } 
            });              
            this.info = '提交成功！'
            setTimeout(() => {
              this.showDialog = false
            }, 2000)
            setTimeout(() => {
              this.$router.push({path: '/'})
            }, 500)
          } else {
            this.showDialog = true
            this.submitError = true
            this.info = '提交失败！ 存在必填项未填'
          }
        } else {
          this.showDialog = true
          this.submitError = true
          this.info = '提交失败！ 只有发布中的问卷才能提交'
        }
      },
      // rate(num){
      //   console.log("hhh")
      //   console.log(num)
      //   value1[num] = 
      //   this.requiredItem[num] = this.value1
      //   console.log(this.requiredItem[num])
      //   // this.requiredItem[num] = this.value1
      // },
      validate() { //验证问卷填写是否完成 需要考虑情景题中有些题目不显示出来
        for (let i in this.requiredItem) {
          // console.log("i")
          // console.log(i)
          // console.log(this.qsItem.question[i])
          if (this.requiredItem[i].length === 0){
            for(let q = 0; q < this.qsItem.question.length; q++){
              if(this.qsItem.question[q].num == i && this.qsItem.question[q].type != "scene")
                return false
              else if(this.qsItem.question[q].num == i && this.qsItem.question[q].isHidden == false)
                return false
            }
          }
        }
        return true
      },
      showNext(num, choose){
        // console.log(num)
        // console.log(choose)
        let next
        for (let i = 0; i < this.qsItem.question.length; i++) {
          if (this.qsItem.question[i].num == num) {
            for (let c = 0; c < this.qsItem.question[i].options.length; c++){
              if (this.qsItem.question[i].options[c] == choose){
                next = this.qsItem.question[i].scene[c]
              }
            }
            for(let tmp = i+1; tmp < this.qsItem.question.length; tmp++){
              this.requiredItem[this.qsItem.question[tmp].num] = ''
              this.qsItem.question[tmp].isHidden = true
            }
            break
          }
        }
        console.log("next")
        console.log(next)
        if (next == "0"){
          this.$message('已经是最后一题，可提交问卷');
        }
        for (let i = 0; i < this.qsItem.question.length; i++) {
          if (this.qsItem.question[i].num == next){
            this.qsItem.question[i].isHidden = false
          }
        }
      }
      // saveOption(num){
      //   console.log("fortest")
      //   console.log(num)
      //   console.log(this.requiredItem)
      //   // console.log(this.choose)
      // }      
    },
    watch: {
      '$route': 'fetchData'
    }
  }
</script>

<style lang="scss" scoped>
@import '../style/QS-fill'
</style>