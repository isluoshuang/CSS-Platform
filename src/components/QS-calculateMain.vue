<!-- v-model="requiredItem[item.num]" -->
<template>
  <div>
    <calculate-header/>
    <!-- <div id="app"> -->
    <el-container id="outside">
      <el-main>
        <div id="introduce">
          <div id="txt1">欢迎来到计算社会科学研究平台</div>
          <div id="txt2">
            计算社会科学研究平台旨在探索如何基于海量数据与新兴计算技术，研究公共管理等诸多社会学科基本命题与研究范式问题，它阐释了社会科学研究在新技术情景下所呈现的新发展、新动态和前景。
          </div>
          <div id="txt3">
            现有功能：自动问卷系统
            (创建问卷，发送问卷给他人填写，并分析问卷结果)；自然语言处理
            (提供不同的文本分析方法，例如文本情感分析)；计算服务
            (应用多种数据分析和机器学习方法来提取数据有用的信息) 。
          </div>
        </div>
        <div id="link1">
          <div id="aside1">
            <img class="logo" src="../../static/icon/icon_1.png" />
            <div id="txt4">
              <a href="http://summerschool.momodel.ai:8899/course/"
                >浙江大学暑期学校</a
              >
            </div>
          </div>
          <div id="aside2">
            <img class="logo" src="../../static/icon/icon_2.png" />
            <div id="txt5">
              <a href="../../../static/order/order.html">CSS中心预约流程</a>
            </div>
          </div>
          <div id="aside3">
            <img class="logo1" src="../../static/icon/icon_3.png" />
            <div id="txt6">
              <a href="https://mo.zju.edu.cn/">人工智能建模平台Mo</a>
            </div>
          </div>
        </div>
        <div id="link1">
          <div id="aside1">
            <img class="logo" src="../../static/icon/icon_4.png" />
            <div id="txt7">
              <a href="http://10.72.100.6:82/">数据驱动建模案例库</a>
            </div>
          </div>
          <div id="aside2">
            <img class="logo" src="../../static/icon/icon_5.png" />
            <div id="txt8">
              <a href="../../../static/DashboardTemplateforBootstrap.html"
                >机房资源分配</a
              >
            </div>
          </div>
          <div id="aside3">
            <img class="logo1" src="../../static/icon/icon_3.png" />
            <div id="txt8">
              <a href="https://mo.zju.edu.cn/dataset">公开数据集</a>
            </div>
          </div>
        </div>
      </el-main>
      <el-footer style="height: 100px">
        <img
          src="../../static/logo.jpg"
          style="
            width: 65px;
            height: 65px;
            margin-top: 17px;
            margin-left: 27%;
            float: left;
          "
        />
        <div id="txt9">1. 扫一扫左侧二维码关注公众号</div>
        <div id="txt10">2. 微信搜索ZJUCSS关注公众号</div>
      </el-footer>
      <!--     <el-main style="margin-top: 18px;background-color: #EFEFEF;">
      <div id="introduce">
        <div id="txt1">平台介绍</div>
        <div id="txt2">概述：社会计算科学研究平台旨在探索如何基于海量数据与新兴计算技术，研究公共管理等诸多社会学科基本命题与研究范式问题，它阐释了社会科学研究在新技术情景下所呈现出的新发展、新动态和前景。</div>
        <div id="txt5">功能：自动问卷系统可以创建问卷，发送问卷给他人填写，并分析问卷结果；自然语言处理提供不同的文本分析方法，例如文本情感分析等；计算服务中应用多种数据分析和机器学习方法来提取数据有用信息。</div>
        <el-carousel :interval="4000" arrow="always">
          <el-carousel-item v-for="item in imagesbox" :key="item.id">
            <img :src="item.idView" class="image">
          </el-carousel-item>
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
         <img src="../../static/pic1.jpg" style="width: 350px;margin: 30px 0px 40px 300px;">
      </div>
      <div id="feedback">
        <div id="txt1">反馈方式</div>
        <el-row>
          <el-col :span="4">
            <img src="../../static/logo.jpg" style="width: 100px;margin: 10px 0px 40px 0px;">
          </el-col>
          <el-col :span="20" id="txt3">
            <div style="margin-bottom: 20px;">1. 扫描左侧二维码扫一扫关注公众号</div>
            <div>2. 微信搜索ZJUCSS关注公众号</div>
          </el-col>
        </el-row>
      </div>
    </el-main> -->
      <!--     <el-aside width="200px">
      <div id="aside1">
        <div id="txt4">
          <a href="http://summerschool.momodel.ai:8899/course/">浙江大学暑期学校</a>
        </div>
      </div>
      <div id="aside2">
        <div id="txt4">
         <a href="../../../static/order/order.html">CSS中心预约流程</a>
        </div>
      </div>
      <div id="aside2">
        <div id="txt4">
         <a href="https://mo.zju.edu.cn/">人工智能建模平台Mo</a>
        </div>
      </div>
      <div id="aside2">
        <div id="txt4">
         <a href="http://10.72.100.6:82/">数据驱动建模案例库</a>
        </div>
      </div>
      <div id="aside2">
        <div id="txt4">
         <a href="../../../static/DashboardTemplateforBootstrap.html">机房资源分配</a>
        </div>
      </div>
    </el-aside> -->
    </el-container>
    <!-- </div> -->
  </div>
</template>

<script>
import calculateHeader from "../components/public/calculateHeader.vue";
var _hmt = _hmt || [];
(function () {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?5f228c169bee6b288c0b4652cccda107";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();

export default {
  name: "qscalcilateMain",
  inject: ["reload"],
  data() {
    return {};
  },
  components: { calculateHeader },
  methods: {},
  watch: {
    $route(to, from) {
      this.$router.go(0);
    },
  },
  activated: function () {
    this.$router.go(0);
  },
};
</script>

<style>
/*  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background:rgba(247,247,247,1);
    height: 100%;
  }*/
/*  #outside {
    margin-left: 200px;
    margin-right: 200px;
  }*/
#introduce {
  margin: 0 auto;
}
#txt1 {
  width: 448px;
  height: 45px;
  font-size: 32px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: rgba(51, 51, 51, 1);
  line-height: 45px;
  text-align: center;
  margin: 70px auto;
  margin-bottom: 1px;
}
#txt2 {
  width: 1000px;
  height: 72px;
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(137, 146, 156, 1);
  line-height: 36px;
  text-align: center;
  margin: 0 auto;
  margin-top: 25px;
}
#txt3 {
  width: 1000px;
  height: 65px;
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(137, 146, 156, 1);
  line-height: 36px;
  text-align: center;
  margin: 0 auto;
  margin-top: 25px;
}

#link1 {
  margin: 80px auto;
  width: 1200px;
  height: 110px;
}
#link2 {
  margin: 50px auto;
  width: 740px;
  height: 110px;
}

#aside1 {
  width: 340px;
  height: 110px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 7px 0px rgba(227, 232, 237, 0.2);
  border-radius: 8px;
  float: left;
  margin-right: 60px;
  margin-left: 5%;
}
#aside2 {
  width: 340px;
  height: 110px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 7px 0px rgba(227, 232, 237, 0.2);
  border-radius: 8px;
  float: left;
  margin-right: 60px;
}
#aside3 {
  width: 340px;
  height: 110px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 7px 0px rgba(227, 232, 237, 0.2);
  border-radius: 8px;
  float: left;
}
#aside4 {
  width: 340px;
  height: 110px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 7px 0px rgba(227, 232, 237, 0.2);
  border-radius: 8px;
  float: left;
  margin-right: 60px;
}
#aside5 {
  width: 340px;
  height: 110px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 7px 0px rgba(227, 232, 237, 0.2);
  border-radius: 8px;
  float: left;
}
#txt4 {
  width: 144px;
  height: 25px;
  font-size: 18px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: rgba(51, 51, 51, 1);
  line-height: 25px;
  margin: 43px auto;
  margin-left: 120px;
}
#txt5 {
  width: 145px;
  height: 25px;
  font-size: 18px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: rgba(51, 51, 51, 1);
  line-height: 25px;
  margin: 43px auto;
  margin-left: 123px;
}
#txt6 {
  width: 172px;
  height: 25px;
  font-size: 18px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: rgba(51, 51, 51, 1);
  line-height: 25px;
  margin: 43px auto;
  margin-left: 113px;
}
#txt7 {
  width: 162px;
  height: 25px;
  font-size: 18px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: rgba(51, 51, 51, 1);
  line-height: 25px;
  margin: 43px auto;
  margin-left: 120px;
}
#txt8 {
  width: 108px;
  height: 25px;
  font-size: 18px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: rgba(51, 51, 51, 1);
  line-height: 25px;
  margin: 43px auto;
  margin-left: 120px;
}
.logo {
  height: 38px;
  width: 38px;
  float: left;
  margin-top: 36px;
  margin-left: 44px;
}
.logo1 {
  height: 38px;
  width: 38px;
  float: left;
  margin-top: 36px;
  margin-left: 34px;
}
.el-footer {
  height: 100px;
  background: rgba(242, 242, 242, 1);
  width: 100%;
  position: absolute;
  bottom: 0px;
  left: 0px;
}
#txt9 {
  width: 253px;
  height: 32px;
  font-size: 18px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  line-height: 32px;
  float: left;
  margin-top: 34px;
  margin-left: 50px;
}
#txt10 {
  width: 255px;
  height: 32px;
  font-size: 18px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  line-height: 32px;
  float: left;
  margin-top: 34px;
  margin-left: 50px;
}
#outside {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: rgba(247, 247, 247, 1);
  /*height: 100%;*/
  position: relative;
  width: 100%;
  min-height: 100%;
  /*设置padding-bottom值大于等于footer的height值，以保证main的内容能够全部显示出来而不被footer遮盖；*/
  padding-bottom: 100px;
  box-sizing: border-box;
}
a:link {
  color: #409eff;
  text-decoration: none;
}
a:visited {
  color: #409eff;
  text-decoration: none;
}
a:hover {
  color: #409eff;
  text-decoration: none;
}
</style>

