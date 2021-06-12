<template>
  <div class="header-container"
       id="header">
    <ul class="titleStart">
      <a>
        <img class="icon"
             @click="goto('mainWarp')"
             src="../../../static/zjucss.png" />
      </a>
    </ul>
    <ul class="titleEnd">
      <li>
        <a class="tab"><span id="span"
                @click="goto('introduce')">中心介绍</span></a>
      </li>
      <li>
        <a class="tab"><span id="span"
                @click="goto('scientificWarp')">科研领域</span></a>
      </li>
      <li>
        <a class="tab"
           to="/pubResources"><span id="span"
                @click="goto('pubResources')">公开资源</span></a>
      </li>
      <li>
        <a class="tab"
           to="/virLaboratory"><span id="span"
                @click="goto('virLaboratory')">虚拟实验室</span></a>
      </li>
      <li>
        <a class="tab"
           to="/team"><span id="span"
                @click="goto('team')">科研团队</span></a>
      </li>
      <li>
        <a class="tab"
           to="/result"
           @click="goto('result')"><span id="span">研究成果</span></a>
      </li>
      <li>
        <a class="tab"
           to="/newsTrends"><span id="span"
                @click="goto('newsTrends')">新闻动态</span></a>
      </li>
      <li>
        <a class="tab"
           to="/contact"><span id="span"
                @click="goto('contact')">联系方式</span></a>
      </li>
    </ul>
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
  methods: {
    goto (location) {
      this.$parent.sildeMethod(location);
    },
    changeBackgroundTo () {
      let headerWarp = document.getElementById("header");
      headerWarp.style.backgroundColor = "#104e5b";
    },
    changeBackgroundBack () {
      let headerWarp = document.getElementById("header");
      headerWarp.style.backgroundColor = "rgba(0, 0, 0, 0)";
    },
  },
};
</script>

<style lang="scss" scoped>
// @import "../style/components";
.header-container {
  display: flex;
  position: fixed;
  width: 100%;
  min-width: 1170px;
  height: 100px;
  justify-content: space-between;
  z-index: 100;
  .titleStart {
    line-height: 100px;
    .icon {
      height: 34px;
      width: 167px;
      margin-left: 54px;
      margin-top: 33px;
    }
  }
  .titleEnd {
    display: flex;
    justify-content: space-evenly;
    width: 882px;
    margin-right: 257px;
    // padding-top: 43px;
    li {
      cursor: pointer;
      display: inline-block;
      height: 100%;
      line-height: 100px;
      list-style: none;
      .tab {
        text-decoration: none;
        #span {
          width: 72px;
          height: 25px;
          font-size: 18px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #ffffff;
          line-height: 25px;
        }
      }
    }
  }
}
</style>