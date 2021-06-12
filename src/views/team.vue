<template>
  <div class="team-container">
    <div class="titleWarp">
      <!-- <div class="firstT">文案文案文案</div> -->
      <div class="TwoT">我们的团队</div>

      <div class="avaterone">
        <avatercom v-for="(item, index) in list"
                   :key="index"
                   :Myavater="item.Myavater"
                   :Myname="item.Myname"
                   :Mypost="item.Mypost" />
      </div>
      <div class="btitle">博士研究生</div>
      <div class="avatertwo">
        <avatercom v-for="(item, index) in listby"
                   :key="index"
                   :Myavater="item.Myavater"
                   :Myname="item.Myname"
                   :Mypost="item.Mypost" />
      </div>
      <div class="btitle">硕士研究生</div>
      <div class="avatertwo">
        <avatercom v-for="(item, index) in lists"
                   :key="index"
                   :Myavater="item.Myavater"
                   :Myname="item.Myname"
                   :Mypost="item.Mypost" />
      </div>
      <div class="btitle">硕士毕业生</div>
      <div class="avatertwo">
        <avatercom v-for="(item, index) in listsb"
                   :key="index"
                   :Myavater="item.Myavater"
                   :Myname="item.Myname"
                   :Mypost="item.Mypost" />
      </div>
    </div>
  </div>
</template>

<script>
import avatercom from "../components/public/avatercom";
export default {
  components: {
    avatercom,
  },
  props: {},
  data () {
    return {
      list: [
        {
          Myavater: "./static/newhHome/avaters/1.png",
          Myname: "吴超",
          Mypost: "中心主任",
        },
        {
          Myavater: "./static/newhHome/avaters/2.png",
          Myname: "王朝",
          Mypost: "助理研究员",
        },
        {
          Myavater: "./static/newhHome/avaters/3.png",
          Myname: "李皓",
          Mypost: "博士后",
        },
      ],
      listby: [
        {
          Myavater: "./static/newhHome/avaters/man.png",
          Myname: "唐作其",
          Mypost: "博士研究生 · 2018",
        },
        {
          Myavater: "./static/newhHome/avaters/第二行/2.png",
          Myname: "张凤达",
          Mypost: "博士研究生 · 2019",
        },
        {
          Myavater: "./static/newhHome/avaters/第二行/3.png",
          Myname: "沈弢",
          Mypost: "博士研究生 · 2019",
        },
        {
          Myavater: "./static/newhHome/avaters/第二行/4.png",
          Myname: "罗双",
          Mypost: "博士研究生 · 2019",
        },
        {
          Myavater: "./static/newhHome/avaters/第二行/5.png",
          Myname: "朱迪迪",
          Mypost: "博士研究生 · 2020",
        },
        {
          Myavater: "./static/newhHome/avaters/第二行/6.png",
          Myname: "陈莫",
          Mypost: "博士研究生 · 2020",
        },
        {
          Myavater: "./static/newhHome/avaters/man.png",
          Myname: "刘宇轩",
          Mypost: "博士研究生 · 2020",
        },
      ],
      lists: [
        {
          Myavater: "./static/newhHome/avaters/man.png",
          Myname: "梅昊铭",
          Mypost: "硕士研究生 · 2019",
        },
        {
          Myavater: "./static/newhHome/avaters/man.png",
          Myname: "徐聪",
          Mypost: "硕士研究生 · 2019",
        },
        {
          Myavater: "./static/newhHome/avaters/第三行/3.png",
          Myname: "李则熹",
          Mypost: "硕士研究生 · 2020",
        },
        {
          Myavater: "./static/newhHome/avaters/第三行/4.png",
          Myname: "陈芷琳",
          Mypost: "硕士研究生 · 2020",
        },
        {
          Myavater: "./static/newhHome/avaters/第三行/5.png",
          Myname: "何佳晋",
          Mypost: "硕士研究生 · 2020",
        },
        {
          Myavater: "./static/newhHome/avaters/第三行/6.png",
          Myname: "周宇航",
          Mypost: "硕士研究生 · 2020",
        },
        {
          Myavater: "./static/newhHome/avaters/第三行/7.png",
          Myname: "高雨茁",
          Mypost: "硕士研究生 · 2020",
        },
        {
          Myavater: "./static/newhHome/avaters/第四行/1.png",
          Myname: "张杰",
          Mypost: "硕士研究生 · 2020",
        },
        {
          Myavater: "./static/newhHome/avaters/第四行/2.png",
          Myname: "张真源",
          Mypost: "硕士研究生 · 2020",
        },
        {
          Myavater: "./static/newhHome/avaters/第四行/3.png",
          Myname: "章焕锭",
          Mypost: "硕士研究生 · 2020",
        },
        {
          Myavater: "./static/newhHome/avaters/第四行/4.png",
          Myname: "叶寅",
          Mypost: "硕士研究生 · 2020",
        },
        {
          Myavater: "./static/newhHome/avaters/第四行/5.png",
          Myname: "焦令炜",
          Mypost: "硕士研究生 · 2020",
        },
        {
          Myavater: "./static/newhHome/avaters/第四行/6.png",
          Myname: "陈玥",
          Mypost: "硕士研究生 · 2020",
        },
        {
          Myavater: "./static/newhHome/avaters/第四行/7.png",
          Myname: "倪昊",
          Mypost: "硕士研究生 · 2020",
        },
        {
          Myavater: "./static/newhHome/avaters/第五行/1.png",
          Myname: "余敏君",
          Mypost: "硕士研究生 · 2020",
        },
        {
          Myavater: "./static/newhHome/avaters/第五行/2.png",
          Myname: "徐时峰",
          Mypost: "硕士研究生 · 2020",
        },
        {
          Myavater: "./static/newhHome/avaters/第五行/3.png",
          Myname: "郭啸秋",
          Mypost: "硕士研究生 · 2020",
        },
        {
          Myavater: "./static/newhHome/avaters/第五行/4.png",
          Myname: "胡煜",
          Mypost: "硕士研究生 · 2020",
        },
      ],
      listsb: [
        {
          Myavater: "./static/newhHome/avaters/第六行/1.png",
          Myname: "张娇昱",
          Mypost: "2020届毕业生",
        },
        {
          Myavater: "./static/newhHome/avaters/第六行/2.png",
          Myname: "夏威",
          Mypost: "2020届毕业生",
        },
        {
          Myavater: "./static/newhHome/avaters/第六行/3.png",
          Myname: "王丹妮",
          Mypost: "2020届毕业生",
        },
        {
          Myavater: "./static/newhHome/avaters/第六行/4.png",
          Myname: "金松",
          Mypost: "2021届毕业生",
        },
        {
          Myavater: "./static/newhHome/avaters/第六行/5.png",
          Myname: "支广达",
          Mypost: "2021届毕业生",
        },
        {
          Myavater: "./static/newhHome/avaters/man.png",
          Myname: "胡松林",
          Mypost: "2021届毕业生",
        },
        {
          Myavater: "./static/newhHome/avaters/第六行/7.png",
          Myname: "宋彤彤",
          Mypost: "2021届毕业生",
        },
        {
          Myavater: "./static/newhHome/avaters/man.png",
          Myname: "贾鑫康",
          Mypost: "2021届毕业生",
        },
        {
          Myavater: "./static/newhHome/avaters/第七行/2.png",
          Myname: "程文卓",
          Mypost: "2021届毕业生",
        },
        {
          Myavater: "./static/newhHome/avaters/第七行/3.png",
          Myname: "黄小洁",
          Mypost: "2021届毕业生",
        },
        {
          Myavater: "./static/newhHome/avaters/第七行/4.png",
          Myname: "刘丽锋",
          Mypost: "2021届毕业生",
        },
        {
          Myavater: "./static/newhHome/avaters/第七行/5.png",
          Myname: "张召凯",
          Mypost: "2021届毕业生",
        },
        {
          Myavater: "./static/newhHome/avaters/第七行/6.png",
          Myname: "胡一帆",
          Mypost: "2021届毕业生",
        },
        {
          Myavater: "./static/newhHome/avaters/第七行/7.png",
          Myname: "陈文儒",
          Mypost: "2021届毕业生",
        },
        {
          Myavater: "./static/newhHome/avaters/第八行/1.png",
          Myname: "林泽龙",
          Mypost: "2021届毕业生",
        },
        {
          Myavater: "./static/newhHome/avaters/第八行/2.png",
          Myname: "王镇",
          Mypost: "2021届毕业生",
        },
        {
          Myavater: "./static/newhHome/avaters/man.png",
          Myname: "魏祖昌",
          Mypost: "2021届毕业生",
        },
        {
          Myavater: "./static/newhHome/avaters/第八行/4.png",
          Myname: "赵春玲",
          Mypost: "2021届毕业生",
        },
        {
          Myavater: "./static/newhHome/avaters/第八行/5.png",
          Myname: "郑培",
          Mypost: "2021届毕业生",
        },
      ],
    };
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  methods: {},
};
</script>

<style lang="scss" scoped>
.team-container {
  display: block;
  min-width: 1170px;
  width: 100%;
  height: fit-content;
  padding-top: 190px;
  padding-bottom: 191px;
  background: #fafafa;
  .titleWarp {
    width: 1452px;
    margin: auto;
    // padding-left: 257px;
    .firstT {
      margin-bottom: 7px;
      width: 288px;
      // height: 65px;
      font-size: 46px;
      font-family: PingFangSC-Ultralight, PingFang SC;
      font-weight: 200;
      color: #333333;
      line-height: 65px;
    }
    .TwoT {
      width: 293px;
      // height: 124px;
      font-size: 56px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #333333;
      line-height: 78px;
      margin-bottom: 80px;
    }
    .btitle {
      margin: 40px 0 20px 0px;
      // width: 102px;
      height: 28px;
      font-size: 20px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #333333;
      line-height: 28px;
    }
    .avaterone {
      // margin-top: 58px;
    }
    .avatertwo {
      width: 1452px;
    }
  }
}
</style>
