<template>
  <div class="QSMain-container">
    <div class="welcome_title">欢迎来到</div>
    <div class="name_title">
      <div>浙江大学</div>
      <div>计算社会科学研究中心</div>
    </div>
    <div class="input_email">
      <div class="leftInput">
        <img src="../../static/icon/dribbble.png" />
        <input placeholder="请输入你的邮箱地址" />
      </div>
      <button >订阅我们</button>
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
  width: 100%;
  height: 100%;
  background: no-repeat url("../../static/img/home_backgroud.png");
  background-size: cover;
  background-attachment: fixed;
  background-position: center 0;
  .welcome_title {
    position: relative;
    top: 334px;
    margin-left: 261px;
    width: 88px;
    height: 30px;
    font-size: 22px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #ffffff;
    line-height: 30px;
  }
  .name_title {
    position: relative;
    top: 414px;
    margin-left: 257px;
    width: 800px;
    height: 184px;
    font-size: 80px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #ffffff;
    line-height: 92px;
  }
  .input_email {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 478px;
    left: 257px;
    width: 1000px;
    height: 120px;
    background: #ffffff;
    border-radius: 8px;
    flex-wrap: nowrap;
    .leftInput {
      display: flex;
      img {
        display: block;
        width: 50px;
        height: 50px;
        margin-left: 40px;
      }
      input {
        width: 376px;
        height: 44px;
        font-size: 22px;
        border: 0px;
        outline: none;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        line-height: 44px;
        margin-left: 10px;
      }
    }

    button {
      color: #fff;
      width: 300px;
      height: 100px;
      background: #23cf5f;
      border-radius: 6px;
      border: transparent;
      margin-right: 10px;
      font-size: 22px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #ffffff;
      line-height: 30px;
    }
  }
}
</style>
