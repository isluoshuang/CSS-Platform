webpackJsonp([8],{186:function(t,e,r){r(775);var a=r(24)(r(714),r(790),null,null);t.exports=a.exports},197:function(t,e){var r=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=r)},203:function(t,e,r){t.exports={default:r(204),__esModule:!0}},204:function(t,e,r){var a=r(197),n=a.JSON||(a.JSON={stringify:JSON.stringify});t.exports=function(t){return n.stringify.apply(n,arguments)}},714:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){var a=r(203),n=r.n(a);!function(){var t=document.createElement("script");t.src="https://hm.baidu.com/hm.js?5f228c169bee6b288c0b4652cccda107";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}(),e.default={name:"Nlp",data:function(){return{textarea:"",keyword:""}},methods:{getWordFrequency:function(){var e=this.textarea.replace(/(^\s*)|(\s*$)/g,"");if(console.log(e.length),0==e.length)this.$message({duration:2e3,message:"文本信息不能为空",type:"warning"});else{var r={};r.data=e,t.ajax({type:"POST",url:"/css/getWordFrequency",data:n()(r),contentType:"application/json; charset=UTF-8",dataType:"json",async:!1,success:function(t){console.log(t);var e="";for(var r in t)e+=r,e+=":",e+=t[r],e+="  ";document.getElementById("keyword").value=e},error:function(t){alert("文本英文词频统计出现错误")}})}}}}}.call(e,r(72))},760:function(t,e,r){e=t.exports=r(176)(),e.push([t.i,"#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#2c3e50}.el-row{text-align:center;margin-left:100px;margin-right:100px}.el-col{border-radius:4px}.input_text{margin-top:10px;margin-left:100px;margin-right:10px}.btn{margin-top:50px;margin-left:10px;margin-right:30px}.output_text{margin-top:5px;margin-left:100px;margin-right:10px}.word{margin-top:20px;margin-left:100px;float:left}",""])},775:function(t,e,r){var a=r(760);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r(177)("648912b4",a,!0)},790:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("el-row",[r("div",{staticClass:"word"},[t._v("文本英文词频统计:")])]),t._v(" "),r("el-row",[r("el-col",{attrs:{span:20}},[r("div",{staticClass:"input_text"},[r("el-input",{attrs:{type:"textarea",rows:8,placeholder:"请输入需要进行英文词频统计的文本"},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}})],1)]),t._v(" "),r("el-col",{attrs:{span:4}},[r("div",{staticClass:"btn"},[r("el-button",{attrs:{type:"primary"},on:{click:t.getWordFrequency}},[t._v("提交")])],1)])],1),t._v(" "),r("el-row",[r("div",{staticClass:"word"},[t._v("词频统计结果为：")])]),t._v(" "),r("el-row",[r("el-col",{attrs:{span:20}},[r("div",{staticClass:"output_text"},[r("el-input",{attrs:{type:"textarea",id:"keyword",rows:8,placeholder:""},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1)]),t._v(" "),r("el-col",{attrs:{span:4}})],1)],1)},staticRenderFns:[]}}});