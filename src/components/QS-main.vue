<template>
  <div class="QSMain-container">
    <div class="welcome_title">欢迎来到</div>
    <div class="name_title">
      <div>浙江大学</div>
      <div>计算社会科学研究中心</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.QSMain-container {
  min-width: 1170px;

  height: fit-content;
  background: no-repeat url("../../static/img/home_backgroud.png");
  background-size: cover;
  background-attachment: fixed;
  background-position: center 0;
  padding-top: 334px;
  padding-left: 257px;
  padding-bottom: 395px;
  .welcome_title {
    width: 88px;
    height: 30px;
    font-size: 22px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #ffffff;
    line-height: 30px;
  }
  .name_title {
   margin-top: 50px;
    width: 800px;
    height: 184px;
    font-size: 80px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #ffffff;
    line-height: 92px;
  }

}
</style>
