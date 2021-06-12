<template>
  <div class="scientific-container">

    <div class="warp">
      <div class="contentBox">
        <!-- <div class="territory">科研领域</div> -->
        <div class="characteristic">科研领域</div>
      </div>
      <div class="cardContent">
        <div class="card"
             @click="dialogVisible1 = true">
          <div class="icon">
            <img class="img"
                 src="../../static/newhHome/price.svg"
                 alt="" />
          </div>
          <div class="introduction">分布式人工智能</div>
          <div class="contentMore">
            人工智能和大数据技术推动了数字经济的高速发展，然而传统的集中式…
          </div>
        </div>
        <div class="card"
             @click="dialogVisible2 = true">
          <div class="icon icon1">
            <img class="img"
                 src="../../static/newhHome/package.svg"
                 alt="" />
          </div>
          <div class="introduction">数字社会治理</div>
          <div class="contentMore">
            为了更好地破除传统社会治理的复杂性、碎片化与模糊化，中心借助数…
          </div>
        </div>
        <div class="card"
             @click="dialogVisible3 = true">
          <div class="icon icon2">
            <img class="img"
                 src="../../static/newhHome/service.svg"
                 alt="" />
          </div>
          <div class="introduction">数字政府建设</div>
          <div class="contentMore">
            加快数字政府建设是“推进国家治理体系和治理能力现代化”的一项重大举措…
          </div>
        </div>
        <div class="card"
             @click="dialogVisible4 = true">
          <div class="icon icon3">
            <img class="img"
                 src="../../static/newhHome/insurance.svg"
                 alt="" />
          </div>
          <div class="introduction">智慧城市</div>
          <div class="contentMore">
            智慧城市治理的核心是“以人为本”。中心致力于将城市治理与物联网、云…
          </div>
        </div>
      </div>
    </div>

    <div class="dialogSty">
      <el-dialog width="1200px"
                 top="110px"
                 :visible.sync="dialogVisible1">
        <img class="logo"
             src="../../static/newhHome/zjucss.png"
             alt="" />
        <div class="title">分布式人工智能</div>

        <div class="content">
          人工智能和大数据技术推动了数字经济的高速发展，然而传统的集中式数据利用导致数据隐私泄露、数据孤岛、数据垄断等问题，对经济增长和公众福利造成负面影响。数据作为新生产要素无法充分有序流动，原因在于缺乏有效的数据所有权保护和定价机制。<br />
          中心针对目前数字化转型中的数据分散和难以定价问题，研究在数据分散情况下如何实现人工智能建模，基于联邦学习、区块链等分布式人工智能技术，构建保护数据隐私和鼓励数据交换的数据要素市场机制，实现通用的分布式建模和管理框架，并用于公共服务智慧化建设。<br />
          <b>代表性工作</b><br />
          （1）针对“如何在智慧治理中保护用户隐私”的问题，提出了深度学习隐私保护方法以及公共服务Pay-by-Data数据付费方法，显式定义用户与企业和政府之间的数据交换，采用基于市场的机制来优化数据收集模式和定价。（Multimedia
          Tools and Applications, 2020, 79, 33503）<br />
          （2）将区块链智能合约与数据库结合，实现了数据溯源和保护的分布式数据库；为“最多跑一次”、智慧城市管理等场景提供隐私保护的方法支持。提出了一种基于区块链的联邦学习系统（Galaxy
          Federated Learning,
          GFL），通过智能合约建立数据提供方、模型提供方和计算力提供方之间的信任和激励机制，可以有效保护数据和模型的安全及价值，让多个数据所有者在本地设备上安全地训练机器学习模型。<br />
          （3）联邦学习中客户端的数据标注成本很高，我们提出基于对比学习的联邦无监督表示学习(Federated
          Unsupervised Representation Learning,
          FURL)，并解决了表示空间的不一致性和特征的不对齐性这两大挑战，从而可以在无监督的场景下得到一个表示模型，为各种下游任务提供支持。
        </div>
        <div class="imags">
          <div class="imag">
            <img src="../../static/newhHome/分布式人工智能.png"
                 alt="" />
            <span>Pay-by-data</span>
          </div>
          <div class="imag">
            <img src="../../static/newhHome/分布式人工智能2.png"
                 alt="" />
            <span>GFL</span>
          </div>
          <div class="imag">
            <img src="../../static/newhHome/分布式人工智能3.png"
                 alt="" />
            <span>FURL</span>
          </div>
        </div>
      </el-dialog>

      <el-dialog width="1200px"
                 top="110px"
                 :visible.sync="dialogVisible2">
        <img class="logo"
             src="../../static/newhHome/zjucss.png"
             alt="" />
        <div class="title">数字社会治理</div>

        <div class="content">
          为了更好地破除传统社会治理的复杂性、碎片化与模糊化，中心借助数据科学和计算机科学前沿技术，协同浙江大学社会治理研究院，推进社会治理的精密智治研究，旨在引领、倡导、影响大数据时代下的社会治理研究与实践，并为我国加强和创新数字社会治理、打造共建共治共享的社会治理格局献智献策。<br />
          中心致力于为数字社会治理提供切实可行的路径，通过人工智能方法解决数据的所有权保护和定价，实现数据的合理流通及使用。推动地方协作创新平台建设，汇聚政府与社会资源，反哺数字治理的实施。推进建立浙江省若干具有典型性和高影响力的社会治理创新样板区。深度参与长江经济带、长三角、大湾区等重点区域社会治理研究平台建设。发布中国县域社会治理等指数，通过对数据比较分析、因果推断、趋势研判，为学术研究和政府决策提供重要支撑，为社会各界广泛参与到县域社会治理的决策、执行和评价提供平台。<br />
          <b>代表性工作</b><br />
          1. 数字社会治理改革<br />
          政府数字化改革需要有效运用以互联网为基础的技术治理手段，让民众参与到公共服务供给的设计、协调、评价、反馈等过程之中，让数据互联成为部门协调的重要载体。中心在此方向上提出了分布式数据管理与利用的新模式，并支持了公共数据平台规划等多个项目的开展。<br />
          2.中国县域社会治理指数模型及其应用<br />
          中心参与构建的中国县域社会治理指数模型，包含社会管理、政社共治、社会自治、科技支撑等四大维度，在刻画中国县域社会治理新进展的同时，树立中国县域社会治理标杆城市，引领各县（市）区、各治理主体积极作为，提高县域社会治理水平。<br />
          3. 社会数字建模及分析<br />
          利用社交媒体和环境数据，实现对城市幸福感的精准预测以及对城市可持续性的深入分析（Int.
          J. Environ. Res. Public Health 2020, 17(21),
          8167）；在教育领域，提出了基于机器学习的K12教育新模式和测量方法；针对留守儿童，提出了基于SVM的精准预测模型（PloS
          ONE, 2020, 15(11), e0242483）。
        </div>
      </el-dialog>

      <el-dialog width="1200px"
                 top="150px"
                 :visible.sync="dialogVisible3">
        <img class="logo"
             src="../../static/newhHome/zjucss.png"
             alt="" />
        <div class="title">数字政府建设</div>

        <div class="content">
          加快数字政府建设是“推进国家治理体系和治理能力现代化”的一项重大举措，也是引领全球政府治理理论与实践的重要抓手。自2016年国务院提出“互联网+”政务服务以来，中国开展了数字政府建设的广泛探索，形成了“最多跑一次”改革（浙江）、一网通管（上海）、秒办（深圳）等富有特色的前沿实践。尽管如此，政府如何运用数字技术实现职责边界的重新划分、组织形态的系统重构以及决策方式的深刻变革，仍然缺少充分的理论研究。<br />
          着眼于数字技术与政府治理的深度整合，中心借助数据科学和计算机前沿技术，推进数字政府研究，力图率先推进数字时代的组织理论、物品理论和决策理论新进展。<br />
          <b>代表性工作</b><br />

          基于对浙江省、湖北省武汉市和江苏省“互联网+政务服务”的实证研究，本方向业已出版《“最多跑一次”改革：浙江经验、中国方案》的专著，在Chinese
          Journal of Political Science、The China
          Review、《治理研究》等中英文期刊发表专业论文，提出了“整体智治”的现代政府治理新形态，被认为是基于中国经验推动公共管理普遍理论进步的重要成果。
          基于理论研究的既有贡献，本方向也实质性参与、推动了“互联网+政务服务”和数字政府建设的实践进展，相关政策报告得到国家领导人或省部级领导人肯定性批示逾10项。<br />
        </div>

      </el-dialog>

      <el-dialog width="1200px"
                 top="110px"
                 :visible.sync="dialogVisible4">
        <img class="logo"
             src="../../static/newhHome/zjucss.png"
             alt="" />
        <div class="title">智慧城市</div>

        <div class="content">
          智慧城市治理的核心是“以人为本”。中心致力于将城市治理与物联网、云计算、大数据、AI及区块链技术紧密结合，以每一个个体的“人”为基本研究单元，建立一个自下而上的城市治理研究范式。通过对人的所有行为的聚合，挖掘宏观规律，实现系统感知、实时获取、精准挖掘、快速响应的研究路径。从而提升城市资源运用的效率，优化城市管理和服务，改善市民的生活质量。<br />
          <br />
          <b>代表性工作</b><br />

          1.智慧交通<br />
          网约车流量预测及可视化展示、道路坑洞监测等，具体介绍在“可计算数字交通虚拟实验室”页面。交通方面，利用手机陀螺仪数据分析，实现城市路面状况的精准监测（Sensors,
          2020, 20(19),
          5564）；与百度等合作，利用地图搜索数据，预测城市未来交通拥堵情况（KDD2018）；与帝国理工Washington院士合作，实现对城市间轨道交通延迟的精确预测；利用网约车大数据，对城市网约车需求和路径做精准建模。<br />
          2020年11月，中心与浙江大学未来交通实验室<br />
          2.智慧医疗<br />
          在医疗卫生改革服务领域，承担自科基金重点项目“提升基层医疗卫生服务能力”等项目，收集与医共体建设、运行和绩效有关的医疗、医保和医药数据，提出一种五层评价模型，并利用多维数据分析，形成对医共体改革的有效评估，结果被新华文摘全文转载（治理研究
          1 (2020):2）。利用EEG和fMRI脑信号+深度网络算法实现对用户情绪和满意度的准确测度（Front.
          Neurosci., 2018, 12,76）；与省医保、网新恩普等合作，提出了基于机器学习的“医保诈骗监测”和“异常处方检测”（Int.J. Environ. Res. Public Health 2020, 17(19),7265）；提出了一种基于机器学习的老年人失能风险预测方法（Archives ofGerontology and Geriatrics (2020): 104121）。
        </div>

      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      dialogVisible1: false,
      dialogVisible2: false,
      dialogVisible3: false,
      dialogVisible4: false,
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
.scientific-container {
  min-width: 1170px;
  width: 100%;
  padding-top: 190px;
  padding-bottom: 240px;
  background: #f5f9fa;
  .warp {
    width: 1405px;
    margin: 0 auto;
    .contentBox {
      // padding-left: 255px;
      // position: relative;
      // .territory {
      //   width: 384px;
      //   height: 65px;
      //   font-size: 46px;
      //   font-family: PingFangSC-Ultralight, PingFang SC;
      //   font-weight: 200;
      //   color: #333333;
      //   line-height: 65px;
      // }
      .characteristic {
        width: 1405px;
        // height: 143px;
        font-size: 56px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #333333;
        line-height: 78px;
        // margin-left: 28px;
        margin-bottom: 80px;
      }
    }
    .cardContent {
      display: flex;
      justify-content: space-between;
      width: 1405px;
      margin: 0 auto;
      // height: 364px;
      // margin-top: 68px;
      .card {
        width: 291px;
        height: 364px;
        border-radius: 14px;
        padding-left: 28px;
        .icon {
          display: inline-block;
          margin-top: 38px;
          width: 76px;
          height: 76px;
          border-radius: 17px;
          .img {
            width: 100%;
            height: 100%;
          }
        }

        .introduction {
          width: 172px;
          height: 33px;
          font-size: 24px;
          margin-top: 38px;
          margin-bottom: 28px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #100551;
          line-height: 33px;
        }
        .contentMore {
          width: 262px;
          height: 100px;
          font-size: 20px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #7f8e9d;
          line-height: 33px;
        }
      }
      .card:hover {
        cursor: pointer;
      }
      .card:hover {
        // transform: scale(1.2);
        transition: all 1s ease 0s;
        background-color: #fff;
        box-shadow: 19px 42px 83px 0px #f2f2f3;
        border-radius: 14px;
      }
    }
  }
}
</style>

<style lang="scss" >
.dialogSty .el-dialog {
  position: relative;
  width: 1200px;
  // height: 679px;
  background: #ffffff;
  box-shadow: 0px 30px 120px 0px rgba(0, 0, 0, 0.1);
  border-radius: 27px;
  padding-bottom: 85px;
  .logo {
    position: absolute;
    top: 38px;
    right: 0;
    width: 441px;
    height: 90px;
  }
  .el-dialog__body {
    padding: 15px 100px 0 100px;
    .title {
      margin-top: 15px;
      // width: 416px;
      height: 45px;
      font-size: 32px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #000000;
      line-height: 45px;
    }
    .content {
      margin-top: 24px;
      margin-bottom: 32px;
      font-weight: 500;
      width: 1000px;
      font-size: 14px;
      font-family: PingFangSC-Light, PingFang SC;
      color: #000000;
      line-height: 24px;
    }
    .imags {
      display: flex;
      width: 1000px;
      justify-content: space-between;
      text-align: center;
      .imag {
        display: flex;
        display: inline-block;
        justify-content: center;
        span {
          display: block;
          // width: 112px;
          height: 24px;
          font-size: 18px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #000000;
          line-height: 24px;
        }
      }
    }
  }
}
</style>


