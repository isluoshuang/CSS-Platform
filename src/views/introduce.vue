<template>
  <div class="introduce-container">
    <div class="title">
      <img src="../../static/newhHome/about.png" alt="" class="about" />
      <span class="who">我们是谁</span>
      <span class="characteristic">我们的特点</span>
    </div>
    <div class="introduce_content">
      <div>
        计算社会科学研究中心于2018年依托浙江大学公共管理学院成立。中心结合浙江大学在社会科学、计算科学、工程科学等方面的有利条件，运用分布式人工智能等前沿技术工具，以社会治理、数字政府、智慧城市为主要研究对象，创新文科发展理念和学术研究范式。
      </div>
      <div>
        中心主要场地位于浙江大学公共管理学院大楼，已建设完成具有领先水平的全景可视化和多模态交互式展示实验场地、强大的社会仿真建模计算资源（包含高性能数据库服务器和GPU建模集群）、用于微观社会科学实验的动作和视觉捕捉实验环境，并将其应用到县域社会治理指数构建、智慧城市运行监测、医保数据建模、城市幸福感分析等多个公共治理应用中。
      </div>
    </div>
    <div class="pic_content">
      <img  class="contentImg" src="../../static/newhHome/introductory.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.introduce-container {
  min-width: 1405px;
  width: 100%;
  height: fit-content;
  background-color: #ffffff;
  padding-bottom: 191px;
  .title {
    position: relative;
    display: inline-block;
    margin-top: 170px;
    width: 1079px;
    height: 338px;
    .about {
      margin-left: 245px;
      width: 1079px;
      height: 201px;
      background: #fafbff #f5f9fa;
    }
    .who {
      position: absolute;
      top: 109px;
      left: 257px;
      width: 192px;
      height: 65px;
      font-size: 46px;
      font-family: PingFangSC-Ultralight, PingFang SC;
      font-weight: 200;
      color: #333333;
      line-height: 65px;
    }
    .characteristic {
      position: absolute;
      top: 181px;
      left: 257px;
      width: 293px;
      height: 78px;
      font-size: 56px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #333333;
      line-height: 78px;
    }
  }
  .introduce_content {
    width: 1405px;
    height: 384px;
    margin: 0 auto;
    width: 1405px;
    height: 192px;
    font-size: 20px;
    font-family: PingFangSC-Light, PingFang SC;
    font-weight: 300;
    color: #000000;
    line-height: 38px;
  }
  .pic_content {
    margin: 0 auto;
    margin-top: 64px;
    width: 1405px;
    height: 779px;
  }
  .contentImg{
    width: 100%;
    height: 100%;
  }
}
</style>
