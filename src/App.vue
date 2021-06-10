<template>
  <div id="app" class="zoom">
    <router-view v-if="isRouterAlive" :key="$route.fullPath"></router-view>
  </div>
</template>

<script src="echarts.min.js"></script>
<script>
/**
 * description app.vue
 */

import $ from "jquery";

export default {
  name: "app",
  components: {},
  provide() {
    //组件中通过provide来提供变量，在子组件中通过inject来注入变量。
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      isRouterAlive: true, //控制视图是否显示的变量
      screenWidth: document.body.clientWidth,
    };
  },
  created() {
    this.unfoldSize(this.screenWidth);
  },
  mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      })();
    };
  },
  watch: {
    screenWidth(val) {
      // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
      if (!this.timer) {
        if (val <= 1500) {
          val = 1500;
        } else {
          val = 1920;
        }
        console.log("val的值是",val)
        // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
        this.screenWidth = val;
         console.log("this.screenWidth是",val)
        this.timer = true;
        // let that = this;
        setTimeout(()=> {
          // 打印screenWidth变化的值
          // console.log("+++++++++++", val);
          this.unfoldSize(this.screenWidth);
          this.timer = false;
        }, 400);
      }
    },
  },
  methods: {
    reload() {
      this.isRouterAlive = false; //先关闭，
      this.$nextTick(function () {
        this.isRouterAlive = true; //再打开
      });
    },
    unfoldSize(screenWidth) {
      if(screenWidth>1561){
        screenWidth=1920
      }else{
        screenWidth=1561
      }
      console.log(screenWidth)
      var _w,
        _zoom,
        _hd,
        _orientationChange,
        _doc = document,
        _style = _doc.getElementById("_zoom");
      _style ||
        ((_hd = _doc.getElementsByTagName("head")[0]),
        (_style = _doc.createElement("style")),
        _hd.appendChild(_style));
      _orientationChange = function () {
        _w = _doc.documentElement.clientWidth || _doc.body.clientWidth;
        _zoom = _w / screenWidth;
        _style.innerHTML =
          ".zoom {zoom:" + _zoom + ";-webkit-text-size-adjust:auto!important;}";
      };
      _style.setAttribute("zoom", _zoom);
      _orientationChange();
      window.addEventListener("resize", _orientationChange, false);
      
    },
  },
};
</script>

<style lang="scss">
@import "style/app";
</style>