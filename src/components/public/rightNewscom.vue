<template>
  <div class="rightNew"
       @click="toOpenUrl(url)">
    <img class="rightImg"
         :src="img"
         alt="" />
    <div class="TitCon">
      <div class="title">{{ title }}</div>
      <div class="content">{{ date }}</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    img: String,
    title: String,
    date: String,
    url: String,
  },
  data () {
    return {};
  },
  computed: {},
  watch: {},
  created () { },
  mounted () {
    console.log(this.Myavater);
  },
  methods: {
    toOpenUrl (url) {
      window.open(url);
    },
  },
};
</script>

<style lang="scss" scoped>
//rightNewscom
.rightNew {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 58px;
  cursor: pointer;
  .rightImg {
    width: 122px;
    height: 98px;
    border-radius: 4px;
    margin-right: 40px;
  }
  .TitCon {
    display: flex;
    flex-direction: column;
    width: 265px;
    .title {
      width: 265px;
      height: 39px;
      font-size: 30px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #333333;
      line-height: 39px;
      margin-bottom: 11px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .content {
      width: 173px;
      height: 29px;
      font-size: 20px;
      font-family: Helvetica;
      color: #a3a3a3;
      line-height: 29px;
    }
  }
}
</style>
