webpackJsonp([6],{189:function(e,t,s){s(767);var r=s(24)(s(717),s(782),null,null);e.exports=r.exports},197:function(e,t){var s=e.exports={version:"2.5.7"};"number"==typeof __e&&(__e=s)},203:function(e,t,s){e.exports={default:s(204),__esModule:!0}},204:function(e,t,s){var r=s(197),a=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return a.stringify.apply(a,arguments)}},717:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){var r=s(203),a=s.n(r);!function(){var e=document.createElement("script");e.src="https://hm.baidu.com/hm.js?5f228c169bee6b288c0b4652cccda107";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}(),t.default={name:"firstdemo",inject:["reload"],data:function(){return{form:{name:"",password:""},username:sessionStorage.getItem("user"),count:""}},mounted:function(){console.log(this.username)},activated:function(){this.$router.go(0)},methods:{submit:function(){var t={};if(t.name=this.form.name,t.password=this.form.password,""==t.name||""==t.password)""==t.name?this.$message.error({message:"用户名为空，请输入用户名",duration:3e3}):""==t.password&&this.$message.error({message:"密码为空，请输入密码",duration:3e3});else{var s=this;e.ajax({type:"POST",url:"/css/login",data:a()(t),contentType:"application/json; charset=UTF-8",dataType:"json",async:!1,success:function(e){"register_success"==e.status?(sessionStorage.setItem("user",s.form.name),s.$message({message:"注册成功",duration:1500,type:"success"}),s.username=s.form.name,console.log(s.username),s.$router.push({path:"/"})):"login_success"==e.status?(sessionStorage.setItem("user",s.form.name),s.$message({message:"登陆成功",duration:1500,type:"success"}),s.username=s.form.name,window.location.reload()):"login_fail"==e.status&&s.$message.error({message:"用户名已注册或者密码错误",duration:3e3})},error:function(e){alert("账户登陆出现错误！")}})}},quit:function(){this.form.name="",this.form.password="",this.username=null,sessionStorage.clear(),location.reload()},returnMain:function(){this.$router.push({path:"/"})}}}}.call(t,s(72))},752:function(e,t,s){t=e.exports=s(176)(),t.push([e.i,".firstdemo{width:500px;height:400px;background:#fff;box-shadow:0 3px 24px 0 rgba(0,0,0,.12);border-radius:6px;margin:100px auto}.count{margin:0 auto;margin-top:50px}.count,.pw{width:260px}.pw{margin:0 auto}.login{margin-left:165px}.login,.quit{margin-top:40px;border-radius:30px}.quit{margin-left:145px}",""])},767:function(e,t,s){var r=s(752);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);s(177)("bd445cee",r,!0)},782:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"firstdemo"},[s("el-form",{ref:"form",attrs:{model:e.form}},[s("div",{staticStyle:{"margin-top":"70px"},attrs:{type:"flex"}},[s("el-form-item",{staticStyle:{"margin-top":"30px","margin-left":"115px","text-align":"center"}},[s("div",{staticStyle:{color:"#666666","font-size":"25px","line-height":"60px","font-weight":"400",width:"270px",height:"33px","margin-top":"20px"}},[e._v("\n              计算社会科学平台\n            ")])])],1),e._v(" "),null==this.username?s("div",[s("div",{staticClass:"count",attrs:{type:"flex"}},[s("el-form-item",{attrs:{label:"账户：",prop:"name"}},[s("el-input",{attrs:{size:"small"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),e._v(" "),s("div",{staticClass:"pw",attrs:{type:"flex"}},[s("el-form-item",{attrs:{label:"密码：",prop:"password"}},[s("el-input",{attrs:{size:"small",type:"password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1)],1),e._v(" "),s("div",{staticClass:"login",attrs:{type:"flex"}},[s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("登录")]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("注册")])],1)],1)]):null!=this.username?s("div",[s("div",{staticClass:"count",attrs:{type:"flex"}},[s("el-form-item",{attrs:{label:"账户：",prop:"name"}},[s("el-input",{attrs:{size:"small",disabled:!0},model:{value:this.username,callback:function(t){e.$set(this,"username",t)},expression:"this.username"}})],1)],1),e._v(" "),s("div",{staticClass:"quit",attrs:{type:"flex"}},[s("el-form-item",[s("el-button",{attrs:{type:"info"},on:{click:e.quit}},[e._v("退出登录")]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:e.returnMain}},[e._v("返回主页")])],1)],1)]):e._e()])],1)},staticRenderFns:[]}}});