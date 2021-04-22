<!--基本html代码区域-->
<template>
  <div class="firstdemo">
      <el-form ref="form" :model="form">
          <div type="flex" style="margin-top: 70px;">
            <el-form-item style="margin-top: 30px; margin-left: 115px;text-align: center;">
              <div style="color: #666666; font-size: 25px; line-height:60px; font-weight:400;width:270px; height:33px;margin-top: 20px;">
                计算社会科学平台
              </div>
            </el-form-item>
          </div>
          <div v-if="this.username == null">
            <div type="flex" class="count">
              <el-form-item label="账户：" prop="name">
                  <el-input v-model="form.name" size="small"></el-input>
              </el-form-item>
            </div>
            <div type="flex" class="pw">
              <el-form-item label="密码：" prop="password">
                  <el-input v-model="form.password" size="small" type="password"></el-input>
              </el-form-item>
            </div>
            <div type="flex" class="login">
              <el-form-item>
                  <el-button type="primary" @click="submit">登录</el-button>
                  <el-button type="primary" @click="submit">注册</el-button>
              </el-form-item>
            </div>
          </div>
          <div v-else-if="this.username != null">
            <div type="flex" class="count">
              <el-form-item label="账户：" prop="name">
                  <el-input v-model="this.username" size="small" :disabled="true"></el-input>
              </el-form-item>
            </div>
            <div type="flex" class="quit">
              <el-form-item>
                  <el-button type="info" @click="quit">退出登录</el-button>
                  <el-button type="primary" @click="returnMain">返回主页</el-button>
              </el-form-item>
            </div>
          </div>
      </el-form>
         
  </div>
</template>
 
 
<!--数据存贮交互，事件控制地区-->
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?5f228c169bee6b288c0b4652cccda107";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

export default {
  name: 'firstdemo',
  inject:['reload'],
  data () {
    return {
        form:{
            name:'',
            password:'',
        },
        username: sessionStorage.getItem('user'),
        count:"",//倒计时
    }
  },
  mounted(){
    console.log(this.username)
  },
  activated: function() {
    this.$router.go(0);
  },
  methods:{
      /*提交进行判断的函数 */
      submit(){
        let send_data = {}
        send_data["name"] = this.form.name
        send_data["password"] = this.form.password
        if (send_data["name"] == '' || send_data["password"] == '') {
          if (send_data["name"] == '')
          {
            this.$message.error({
                      message: '用户名为空，请输入用户名',
                      duration: 3000,
                    });            
          }
          else if (send_data["password"] == '') {
            this.$message.error({
                      message: '密码为空，请输入密码',
                      duration: 3000,
                    });
          }
        }
        else{
          var that = this;
          var flag = false;
          $.ajax({  
              type:"POST",//type可以为post也可以为get  
              url: "/css/login",  
              data:
                JSON.stringify(send_data)
              ,//这行不能省略，如果没有数据向后台提交也要写成data:{}的形式  
              contentType: 'application/json; charset=UTF-8',//传输数据的时候不能省略这句！！！
              dataType:"json",//这里要注意如果后台返回的数据不是json格式，那么就会进入到error:function(data){}中  
              async: false,
              success:function(value){             
                  if (value["status"] == "register_success") {
                    sessionStorage.setItem('user', that.form.name);
                    that.$message({
                      message: '注册成功',
                      duration: 1500,
                      type: 'success'
                    });
                    that.username = that.form.name
                    console.log(that.username)
                    that.$router.push({path: '/'})
                  }
                  else if (value["status"] == "login_success") {
                    sessionStorage.setItem('user', that.form.name);
                    that.$message({
                      message: '登陆成功',
                      duration: 1500,
                      type: 'success'
                    });
                    that.username = that.form.name
                    // that.reload();
                    window.location.reload();

                    // flag = true
                    // that.$router.push({path: '/'})
                  }
                  else if (value["status"] == "login_fail") {
                    that.$message.error({
                      message: '用户名已注册或者密码错误',
                      duration: 3000,
                    });
                  }
              },  
              error:function(value){ 
                  alert("账户登陆出现错误！");  
              } 
          });  
          // if (flag == true) {
          //   this.$router.push({path: '/'})
          // }
        }
      },
      quit(){
        this.form.name = ''
        this.form.password = ''
        this.username = null
        sessionStorage.clear();
        location.reload()
        // this.$router.push({path: '/'})
      },
      returnMain(){
        this.$router.push({path: '/'})
      },
  },
}
</script>

<style>
.firstdemo{
  width:500px;
  height:400px;
  background:rgba(255,255,255,1);
  box-shadow:0px 3px 24px 0px rgba(0, 0, 0, 0.12);
  border-radius:6px;
  margin:100px auto;
}
.count {
  width: 260px;
  margin: 0 auto;
  margin-top: 50px;
}
.pw{
  width: 260px;
  margin: 0 auto;
}
.login{
  margin-left: 165px;
  margin-top: 40px;
  border-radius:30px;
}
.quit{
  margin-left: 145px;
  margin-top: 40px;
  border-radius:30px;
}
</style>