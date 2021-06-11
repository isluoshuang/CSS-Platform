<template>
  <div class="longHome-container">
    <v-header ref="header"></v-header>
    <div class="longHome-warp"
         ref="Box"
         @scroll="Scroll">
      <QsMain id="mainWarp" />
      <introduce id="introduce" />
      <scientificPage id="scientificWarp" />
      <pub-resources id="pubResources" />
      <vir-laboratory id="virLaboratory" />
      <team id="team" />
      <result id="result" />
      <news-trends id="newsTrends" />
      <contact id="contact" />
    </div>
  </div>
</template>

<script>
import QsMain from "../components/QS-main";
import scientificPage from "./scientific";
import vHeader from "../components/public/header";
import introduce from "./introduce";
import pubResources from "./pubResources";
import result from "./result";
import team from "./team";
import virLaboratory from "./virLaboratory";
import newsTrends from "./newsTrends"
import contact from "./contact"
export default {
  components: {
    vHeader,
    QsMain,
    scientificPage,
    introduce,
    pubResources,
    result,
    team,
    virLaboratory,
    newsTrends,
    contact
  },
  props: {},
  data () {
    return {};
  },
  computed: {},
  watch: {},
  created () { },
  mounted () {
    document.addEventListener("scroll", this.Scroll);
  },
  methods: {
    sildeMethod (location) {
      document.getElementById(location).scrollIntoView({
        behavior: "smooth", // 平滑过渡
        block: "start", // 上边框与视窗顶部平齐
      });
    },
    Scroll (e) {
      let scrollTop = this.$refs.Box.scrollTop;
      // console.log(scrollTop);
      let fristDivHeight = document.getElementById("mainWarp").clientHeight;
      // if (scrollTop + 100 >= fristDivHeight) {
      if (scrollTop >= 100) {
        this.$refs.header.changeBackgroundTo();
      } else {
        this.$refs.header.changeBackgroundBack();
      }
      // console.log(e)
    },
  },
};
</script>

<style lang="scss" scoped>
body {
  overflow: hidden;
}
// .longHome-warp:after {
//   content: "020";
//   display: block;
//   height: 0;
//   clear: both;
//   visibility: hidden;
// }

.clearfix {
  /* 触发 hasLayout */
  zoom: 1;
}
.longHome-container {
  min-width: 1560px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .longHome-warp {
    // display: block;
    min-width: 1170px;
    width: 100%;
    height: 100%;
    // overflow-y: auto;
    overflow: auto;
    // overflow-x: hidden;
  }
  ::-webkit-scrollbar {
    width: 0 !important;
  }
  ::-webkit-scrollbar {
    width: 0 !important;
    height: 0;
  }
}
</style>
