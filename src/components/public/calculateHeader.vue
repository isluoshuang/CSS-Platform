<template>
  <div class="calculateHeader">
    <router-link to="/">
      <img class="icon" src="../../../static/zjucss.png" />
    </router-link>
    <router-link class="tab" to="/list"
      ><span id="span1">自动问卷系统</span></router-link
    >
    <router-link class="tab" to="/nlp"
      ><span id="span2">自然语言处理</span></router-link
    >
    <router-link class="tab" to="/computingService"
      ><span id="span3">计算服务</span></router-link
    >
    <a class="tab" href="../../../static/readme.html"
      ><span id="span4">说明文档</span></a
    >
    <router-link class="login" to="/login"
      ><span id="span5">{{ loginOrRegister }}</span></router-link
    >
  </div>
</template>

<script>
/**
 * A module that define public header component
 * @exports calculateHeader
 * @author oyh(Reusjs)
 */
export default {
  name: "calculateHeader",
  data() {
    return {};
  },
  computed: {
    loginOrRegister() {
      if (sessionStorage.getItem("user") != null) {
        return sessionStorage.getItem("user");
      } else {
        let temp = "登陆/注册";
        return temp;
      }
    },
  },
  // methods: {
  //   itemClick(){
  //     if (sessionStorage.getItem('user') != null) {
  //       console.log(sessionStorage.getItem('user'))
  //       this.loginOrRegister = sessionStorage.getItem('user');
  //     }
  //   }
  // },
};

var _hmt = _hmt || [];
(function () {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?5f228c169bee6b288c0b4652cccda107";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
</script>

<style>
.calculateHeader {
  width: 100%;
  height: 72px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(232, 234, 237, 1);
  position: relative;
}
#span1 {
  position: absolute;
  top: 35%;
  left: 22%;
  color: rgba(36, 41, 46, 1);
}
#span2 {
  position: absolute;
  top: 35%;
  left: 30%;
  color: rgba(36, 41, 46, 1);
}
#span3 {
  position: absolute;
  top: 35%;
  left: 38%;
  color: rgba(36, 41, 46, 1);
}
#span4 {
  position: absolute;
  top: 35%;
  left: 44%;
  color: rgba(36, 41, 46, 1);
}
#span5 {
  position: absolute;
  top: 35%;
  right: 12%;
  color: rgba(36, 41, 46, 1);
}
.tab {
  display: inline-block;
  margin: 10px;
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  line-height: 20px;
}

#span1:hover {
  color: rgba(51, 141, 251, 1);
}
#span2:hover {
  color: rgba(51, 141, 251, 1);
}
#span3:hover {
  color: rgba(51, 141, 251, 1);
}
#span4:hover {
  color: rgba(51, 141, 251, 1);
}
#span5:hover {
  color: rgba(51, 141, 251, 1);
}
.icon {
  height: 28px;
  width: 140px;
  margin-left: 11%;
  margin-top: 20px;
}
.login {
  height: 20px;
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(36, 41, 46, 1);
  line-height: 20px;
  margin-left: 50%;
}
</style>