<template>
  <div class="pubResources-container">
    <img class="xt1" src="../../static/newhHome/xt1.png" alt="" />
    <img class="xt2" src="../../static/newhHome/xt2.png" alt="" />

    <div class="peoCardWarp">
      <div class="titleWarp">
        <!-- <div class="Twirter">更快捷  更方便</div> -->
        <div class="Pus">公开资源</div>
      </div>
      <div class="pcard" @click="toOpenUrl(' http://10.72.100.6:82/')">
        <div class="avater">
          <img src="../../static/newhHome/pub1.png" alt="" />
        </div>
        <div class="content">
          <div class="title">数据驱动建模案例库</div>
          <div class="cot">
            “面向公共管理的数据分析和建模方法”课程作业案例库，旨在启发大家用大数据的方法去解决现实情境下的公共问题。
          </div>
        </div>
      </div>
      <div class="pcard" @click="toOpenUrl('https://mo.zju.edu.cn/')">
        <div class="avater">
          <img src="../../static/newhHome/pub2.png" alt="" />
        </div>
        <div class="content">
          <div class="title">人工智能建模MO平台</div>
          <div class="cot">
            提供快速入手的AI开发环境和在线实训环境，降低开发建模门槛。
          </div>
        </div>
      </div>
      <div
        class="pcard"
        @click="toOpenUrl('https://mo.zju.edu.cn/dataset?&p=1')"
      >
        <div class="avater">
          <img src="../../static/newhHome/pub3.png" alt="" />
        </div>
        <div class="content">
          <div class="title">公开数据集MO</div>
          <div class="cot">
            提供AI开发常用的数据集，包括文本、图像、音视频等类别，涉及医疗、交通、能源、社会治理等多个领域。
          </div>
        </div>
      </div>

      <div class="pcard" @click="toOpenUrl('http://120.27.210.217')">
        <div class="avater">
          <img src="../../static/newhHome/pub4.png" alt="" />
        </div>
        <div class="content">
          <div class="title">在线服务</div>
          <div class="cot">
            <div>机器学习方法</div>
            <div>数据分析工具</div>
          </div>
        </div>
      </div>
      <div class="pcard" @click="toOpenUrl('http://10.72.100.5:8020/')">
        <div class="avater">
          <img src="../../static/newhHome/pub5.png" alt="" />
        </div>
        <div class="content">
          <div class="title">资源申请</div>
          <div class="cot">
            <div>场地申请</div>
            <div>算力申请</div>
          </div>
        </div>
      </div>
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
  methods: {
    toOpenUrl(url) {
      window.open(url);
    },
  },
};
</script>

<style lang="scss" scoped>
.pubResources-container {
  position: relative;
  min-width: 1170px;
  width: 100%;
  height: fit-content;
  padding-top: 190px;
  padding-bottom: 191px;
  background-color: #104e5b;
  overflow: hidden;
  .xt1 {
    position: absolute;
    right: 0;
    top: 0;
  }
  .xt2 {
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .titleWarp {
    margin-bottom: 80px;
    // padding-left: 256px;
    // .Twirter {
    //   width: 384px;
    //   height: 65px;
    //   font-size: 46px;
    //   font-family: PingFangSC-Ultralight, PingFang SC;
    //   font-weight: 200;
    //   color: #9ab0b5;
    //   line-height: 65px;
    // }
    .Pus {
      width: 1405px;
      // height: 124px;
      font-size: 56px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #ffffff;
      line-height: 78px;
    }
  }
  .peoCardWarp {
    display: flex;
    justify-content: space-between;
    align-content: space-between;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 1405px;
    height: 1091px;
    // margin-bottom: 191px;
    .pcard {
      position: relative;
      width: 684px;
      height: 286px;
      background: #275f6a;
      border-radius: 12px;
      cursor: pointer;
      .avater {
        display: inline-block;
        margin-top: 47px;
        margin-left: 47px;
        width: 190px;
        height: 190px;
        background: linear-gradient(
          180deg,
          #376f7a 0%,
          rgba(55, 111, 122, 0) 100%
        );
        border-radius: 119px;
      }
      .content {
        position: absolute;
        display: inline-block;
        width: 346px;
        height: 200px;
        top: 68px;
        left: 276px;
        .title {
          height: 29px;
          font-size: 28px;
          margin-bottom: 18px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #ffffff;
          line-height: 29px;
        }
        .cot {
          width: 346px;
          height: 142px;
          font-size: 20px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #9ab0b5;
          line-height: 36px;
        }
      }
    }
  }
}
</style>
