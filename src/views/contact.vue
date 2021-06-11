<template>
  <div class="contact-container">
    <div class="content">
      <div class="warp">
        <img class="img1"
             src="../../static/newhHome/定位.png"
             alt="" />
        <div class="addressTitle">地址</div>
        <div class="address">
          浙江大学紫金港校区公共管理学院一楼 杭州市余杭塘路866号  
        </div>
        <img class="img2"
             src="../../static/newhHome/邮件.png"
             alt="" />
        <div class="emailTitle">邮箱</div>
        <div class="email">zjucss@zju.edu.cn</div>
        <img class="img3"
             src="../../static/newhHome/微信.png"
             alt="" />
        <div class="pubnumTitle">微信公众号</div>
        <img class="img4"
             src="../../static/newhHome/wechatpub.png"
             alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {};
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  methods: {},
};
</script>

<style lang="scss" scoped>
.contact-container {
  position: relative;
  // min-width: 1560px;
  min-width: 1170px;
  width: 100%;
  height: 449px;
  background-color: #ffffff;
  background-image: url("../../static//newhHome/map.png");
  background-size: cover;
  background-position: center;
  .content {
    position: absolute;
    width: 1560px;
    height: 256px;
    background: #ffffff;
    border-radius: 4px;
    border: 1px solid #dddddd;
    left: 50%;
    transform: translate(-50%);
    bottom: 321px;
    .warp {
      position: relative;
      width: 100%;
      height: 100%;
      .img1 {
        position: absolute;
        top: 64px;
        left: 64px;
      }
      .img2 {
        position: absolute;
        top: 61px;
        left: 587px;
      }
      .img3 {
        position: absolute;
        top: 64px;
        left: 1121px;
      }
      .addressTitle {
        position: absolute;
        top: 61px;
        left: 104px;
        width: 40px;
        height: 32px;
        font-size: 20px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
        line-height: 32px;
      }
      .emailTitle {
        position: absolute;
        top: 61px;
        left: 640px;
        width: 40px;
        height: 32px;
        font-size: 20px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
        line-height: 32px;
      }
      .pubnumTitle {
        position: absolute;
        top: 61px;
        left: 1173px;
        width: 100px;
        height: 32px;
        font-size: 20px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
        line-height: 32px;
      }

      .address {
        position: absolute;
        top: 103px;
        left: 108px;
        width: 340px;
        height: 64px;
        font-size: 20px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
        line-height: 32px;
      }
      .email {
        position: absolute;
        top: 105px;
        left: 641px;
        width: 216px;
        height: 32px;
        font-size: 20px;
        font-family: Helvetica;
        color: #333333;
        line-height: 32px;
      }
      .img4 {
        position: absolute;
        top: 105px;
        left: 1173px;
        width: 119px;
        height: 118px;
      }
    }
  }
}
</style>
