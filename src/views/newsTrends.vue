<template>
  <div class="newsTrends-container">
    <div class="titleWarp">
      <div class="title2">ZJUCSS新闻动态</div>
    </div>
    <div class="newWarp">
      <div class="leftNew"
           @click="toOpenUrl(leftNews.url)">
        <img class="bigImg"
             :src=leftNews.img />
        <div class="leftDate">{{leftNews.date}}</div>
        <div class="leftTitle">{{leftNews.title}}</div>
        <div class="leftContent">
          {{leftNews.content}}
        </div>
      </div>
      <div class="rightNews">
        <RightNewsCom v-for="(item, index) in rightNews"
                      :key="index"
                      :img="item.img"
                      :title="item.title"
                      :date="item.date"
                      :url="item.url" />
      </div>
    </div>
  </div>
</template>

<script>
import RightNewsCom from "../components/public/rightNewscom";
export default {
  components: {
    RightNewsCom,
  },
  props: {},
  data () {
    return {
      rightNews: [],
      leftNews: {},
    };
  },
  computed: {},
  watch: {},
  created () {
    this.initNews();
  },
  mounted () { },
  methods: {
    toOpenUrl (url) {
      window.open(url);
    },
    initNews () {
      let this_ = this;
      $.ajax({
        type: "get", //type可以为post也可以为get
        // dataType : "json",
        url: "https://raw.githubusercontent.com/isluoshuang/CSS-Platform/master/news.txt",
        // data: JSON.stringify(user),//这行不能省略，如果没有数据向后台提交也要写成data:{}的形式
        // contentType: "application/json; charset=UTF-8",
        // changeOrigin: true,
        // dataType: "json", //这里要注意如果后台返回的数据不是json格式，那么就会进入到error:function(data){}中
        async: true,
        success: function (value) {
          let ss1 = value.split(",,");
          ss1.map((item) => {
            if (JSON.parse(item).content === undefined) {
              this_.rightNews.push(JSON.parse(item));
            } else {
              this_.leftNews = JSON.parse(item);
            }
          });
        },
        error: function (value) { },
      });
    },
  },
};
</script>


<style lang="scss" scoped>
.newsTrends-container {
  display: block;
  min-width: 1170px;
  padding-top: 190px;
  // padding-left: 253px;
  padding-bottom: 312px;
  background-color: #ffffff;
  overflow: hidden;
  .titleWarp {
    width: 1405px;
    margin: 0 auto;
    margin-bottom: 80px;
    // .title1 {
    //   height: 65px;
    //   font-size: 46px;
    //   font-family: PingFangSC-Ultralight, PingFang SC;
    //   font-weight: 200;
    //   color: #333333;
    //   line-height: 65px;
    // }
    .title2 {
      // height: 124px;
      margin-top: 7px;
      margin-bottom: 80px;
      font-size: 56px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #333333;
      line-height: 78px;
    }
  }
  .newWarp {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 1405px;
    height: 759px;
    .leftNew {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      width: 822px;
      height: 100%;
      cursor: pointer;
      .bigImg {
        width: 100%;
        height: 507px;
        border-radius: 4px;
        margin-bottom: 36px;
        border: none;
      }
      .leftDate {
        width: 173px;
        height: 29px;
        font-size: 20px;
        font-family: Helvetica;
        color: #a3a3a3;
        line-height: 29px;
      }
      .leftTitle {
        height: 58px;
        font-size: 50px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
        line-height: 59px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-bottom: 22px;
      }
      .leftContent {
        width: 822px;
        height: 118px;
        font-size: 20px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
        line-height: 29px;
        margin-top: -14px;
      }
    }

    .rightNews {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      width: 418px;
      margin-bottom: 2px;
    }
  }
}
</style>
