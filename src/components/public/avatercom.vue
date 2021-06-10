<template>
  <div class="avater">
    <img :src="Myavater" alt="" />
    <div class="name">{{ Myname }}</div>
    <div class="post">{{ Mypost }}</div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    Myavater: String,
    Myname: String,
    Mypost: String,
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    // console.log(this.Myavater);
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.avater {
  position: relative;
  display: inline-block;
  width: 184px;
  height: 184px;
  margin-right: 20px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
  border-radius: 3px;
  margin-bottom: 20px;
  .name {
    position: absolute;
    left: 16px;
    bottom: 31px;
    height: 28px;
    font-size: 20px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #ffffff;
    line-height: 28px;
  }
  .post {
    position: absolute;
    left: 16px;
    bottom: 11px;
    height: 20px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #ffffff;
    line-height: 20px;
    // -webkit-background-clip: text;
    // -webkit-text-fill-color: transparent;
  }
}
</style>
