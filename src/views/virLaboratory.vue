<template>
  <div class="virLaboratory-container">
    <img class="logoone"
         src="../../static//newhHome/zjucss.png"
         alt="" />
    <div class="contentFirst">
      <div class="titleWarp">
        <!-- <div class="title1">更全面 更高效</div> -->
        <div class="title2">虚拟实验室</div>
      </div>
      <div>
        为促进计算社会科学领域的资源共享和技术成果互动，中心采用虚拟实验室机制对外开放软硬件设施、数据资源以及建模分析能力。
        每个虚拟实验室对应一个具体研究方向或项目课题，由项目负责人将其人员和经费引入此虚拟实验室，而平台为虚拟实验室提供软硬件设施、数据资源、以及建模分析能力。
        第一批虚拟实验室将包括智慧交通、数字经济、智慧医疗这三个课题，目前“可计算数字交通虚拟实验室”已与2020年11月正式启动。
      </div>
    </div>
    <div class="contentTwo">可计算数字交通虚拟实验室</div>
    <div class="classcontentThree">
      2020年11月，计算科学社会研究中心和浙江大学未来交通实验室联合启动“可计算数字交通虚拟实验室”，双方在长期合作基础上，进一步促进联合开展智慧交通研究，深入挖掘交通领域数字化价值，推动交通产业智慧化升级，为政府交通规划、公交优化布局、交通精准管理等应用提供更科学的数据支撑。
      <div class="titleSmall">代表性工作：</div>
    </div>
    <div class="picShow">
      <div class="pic picb1"
           @click="dialogVisible1 = true">
        <img class="img"
             src="../../static//newhHome/hv1.svg"
             alt="" />
        <div class="t">
          <div>基于手机传感器的</div>
          <div>路面坑洞检测</div>
        </div>
      </div>
      <div class="pic picb2"
           @click="dialogVisible2 = true">
        <img class="img"
             src="../../static//newhHome/hv2.svg"
             alt="" />
        <div class="t">
          <div>网约车流量预测与</div>
          <div>可视化分析</div>
        </div>
      </div>
      <div class="pic picb3"
           @click="dialogVisible3 = true">
        <img class="img"
             src="../../static//newhHome/hv3.svg"
             alt="" />
        <div class="t">
          <div>网联环境下无人车</div>
          <div>轨迹优化</div>
        </div>
      </div>
      <div class="pic picb4"
           @click="dialogVisible4 = true">
        <img class="img"
             src="../../static//newhHome/hv4.svg"
             alt="" />
        <div class="t">
          <div>基于配送机器人的</div>
          <div>城市物流车辆</div>
          <div>路径优化</div>
        </div>
      </div>
      <div class="pic picb5"
           @click="dialogVisible5 = true">
        <img class="img"
             src="../../static//newhHome/hv5.svg"
             alt="" />
        <div class="t">
          <div>基于智慧城市的</div>
          <div>杭州TOD模式研究</div>
        </div>
      </div>
    </div>
    <div class="dialogSty">
      <el-dialog width="1200px"
                 top="220px"
                 :visible.sync="dialogVisible1">
        <img class="logo"
             src="../../static/newhHome/zjucss.png"
             alt="" />
        <div class="title">基于手机传感器的路面坑洞检测</div>

        <div class="content">
          路面监测和维护对驾驶舒适度、运输安全及维护基础设施的完整性至关重要。传统的道路状况监测是由专门设计的仪器车辆定期进行的，成本较高，而且只能覆盖道路网络的有限部分。我们提出并实现了一个利用智能手机内置振动传感器和GPS接收器的自动坑洞检测系统。<br /><br />
          将手机固定于汽车座位或中控台上，在杭州市内不同类型道路行驶三天，利用自己设计的APP采集加速度计、GPS以及时间戳三项数据，对数据集进行重采样、重定向、滤波、分割、阈值筛选等处理，将选出的数据段打上GPS位置信息和时间戳，标注为潜在的坑洞信息数据，利用机器学习模型识别最终的坑洞位置。结果表明，我们提出的方法坑洞识别率高，其中采用随机森林方法时表现出最好的分类性能，精确度为88.5%，召回率为75%。最后，我们用其他城市的道路数据集验证了所提出的方法具有良好的普遍性和稳健性。该项成果发表于Sensors,
          2020, 20(19), 5564。
        </div>
        <div class="imags">
          <div class="imag">
            <img src="../../static/newhHome/基于手机传感器的路面坑洞检测1.png"
                 alt="" />
          </div>
          <div class="imag">
            <img src="../../static/newhHome/基于手机传感器的路面坑洞检测2.png"
                 alt="" />
          </div>
          <div class="imag">
            <img src="../../static/newhHome/基于手机传感器的路面坑洞检测3.png"
                 alt="" />
          </div>
        </div>
      </el-dialog>
      <el-dialog width="1200px"
                 top="150px"
                 :visible.sync="dialogVisible2">
        <img class="logo"
             src="../../static/newhHome/zjucss.png"
             alt="" />
        <div class="title">网约车流量预测与可视化分析</div>

        <div class="content">
          网约车公司提供的打车服务自其问世以来增长迅速，正成为城市交通系统中一个关键的组成部分。为了解决网约车时空分配不均匀的问题，我们以杭州市现实数据为基础，开展了“智慧城市网约车流量预测和管理”的相关研究。数据集来源杭州市交通局，为杭州市全市范围2018年12月1日至31日的七家网约车公司的运营数据，其中包括车辆基本信息、订单发起表、订单成功表、经营出发表、经营到达表、车辆定位表等信息。<br />
          深度学习模型：<br />
          通过构建基于LSTM的深度学习模型，引入Attention机制，对网约车历史数据进行分析，结合DBSCAN聚类算法和TOD模式对杭州市区进行区域分块，从而预测网约车流量。相比于传统的预测模型，误差指标均方根误差（RMSE）和平均绝对误差（MAE）分别降低了24.45%和28.13%，能够为交通导流、自动驾驶和交通规划等方面提供数据支持。<br />
          可视化：<br />
          以时间和空间为变量，不同时段不同地区的数据被很好的展现；其中垂直于地面的圆柱表示预测的区域网约车需求量，高度越高则颜色越深，表示该地区的需求量越大；地面上游走的线段代表出发地-目的地对（OD
          pair）的可能路径，颜色越深则表示在该路径的网约车订单数量越多。
        </div>
        <div class="imags">
          <div class="imagt">
            <img src="../../static/newhHome/网约车流量预测与可视化分析.png"
                 alt="" />
            <img src="../../static/newhHome/网约车流量预测与可视化分析2.png"
                 alt="" />
          </div>
        </div>
      </el-dialog>
      <el-dialog width="1200px"
                 top="150px"
                 :visible.sync="dialogVisible3">
        <img class="logo"
             src="../../static/newhHome/zjucss.png"
             alt="" />
        <div class="title">网联环境下无人车轨迹优化</div>

        <div class="content">
          随着无人驾驶技术的发展，智能车已经能够实现较高级别的自动驾驶水平，但是安全性能仍然有待提升。十字路口区域是无人驾驶领域的一个热点研究场景。通过无人车与无人车，无人车与基础设施之间的信息交互，无人车可以获取到超视距的感知信息。无人车的智能调度系统需要在资源受限的路口区域完成安全和高效的无人车调度。<br />
          智能网联是在单车智能背景下提出的新的自动驾驶实现方案，在无人车的基础上，增加智慧路侧设施，实现V2X（vehicle
          to
          everything），提升自动驾驶水平。我们的研究目标是，结合信号灯和车道资源，协同优化无人车的行车轨迹，从而提升道路通行能力、减小能耗以及污染。<br />
          研究内容包括：<br />
          （1）基于轨迹数据的车道识别；<br />
          （2）基于轨迹数据的信号配时估计；<br />
          （3）基于轨迹数据的排队长度估计；<br />
          （4）纵向车辆轨迹与信号灯协同优化；<br />
          （5）横向车辆轨迹与车道资源优化；
        </div>
        <div class="imags">
          <div class="imag">
            <img src="../../static/newhHome/网联环境下无人车轨迹优化.png"
                 alt="" />
            <img src="../../static/newhHome/网联环境下无人车轨迹优化2.png"
                 alt="" />
          </div>
        </div>
      </el-dialog>
      <el-dialog width="1200px"
                 top="220px"
                 :visible.sync="dialogVisible4">
        <img class="logo"
             src="../../static/newhHome/zjucss.png"
             alt="" />
        <div class="title">基于配送机器人的城市物流车辆路径优化</div>

        <div class="content">
          随着网络消费的快速扩张，以及物流需求的迅速增长，传统物流行业正在面临巨大挑战，传统的货车配送加剧城市道路拥堵及环境问题。疫情爆发时期，由于人员短缺，传统物流系统几乎停摆，医疗物资和生活物资运输困难。后疫情时代中，人工配送增加了病毒传播风险。<br />
          为充分利用城市道路资源，提髙物流配送效率，以未来无人车在物流配送领域的全新应用为背景，我们从无人车环境感知与协同决策的角度，提出智能网联环境下无人车配送路径优化方法。<br />
        </div>
        <div class="imags">
          <div class="imagt">
            <img src="../../static/newhHome/基于配送机器人的城市物流车辆路径优化.png"
                 alt="" />
          </div>
        </div>
      </el-dialog>
      <el-dialog width="1200px"
                 top="150px"
                 :visible.sync="dialogVisible5">
        <img class="logo"
             src="../../static/newhHome/zjucss.png"
             alt="" />
        <div class="title">基于智慧城市的杭州TOD模式研究</div>

        <div class="content">
          随着时代的发展，世界城市规模不断扩大，各大城市的交通需求陡然增加，而地面出行所带来的堵塞和环保问题导致政府部门把目光转向地下交通发展，其中地铁是地下交通发展中最重要的交通工具。准确划定地铁站点吸引范围，分析影响地铁站点吸引范围主要因素，不仅对于优化地铁交通服务和规划地铁周边建成环境具有重要意义，同时对于新建地铁站点设施规划具有参考价值。传统的地铁吸引范围划定方法大多依赖于居民日常出行活动的调查和经验意见，存在时间周期长且耗费巨大和吸引范围划定不准确的问题；而多源城市数据的涌现为量化地铁站点周边建成环境及客流空间分布、合理划定地铁站点提供了全新的解决方案。TOD（Transit
          Oriented
          Development，TOD）是高密度城市寻求的城市和交通和谐发展的重要选择，也是未来交通建设的主要参考理念。TOD旨在通过调整城市设计和规划政策，管理城市增长，将土地使用与平衡交通相结合，以减少对汽车的依赖，振兴衰落的中心和郊区。<br />
          我们承秉TOD开发模式，为杭州市轨道三期沿线规划提出适宜的发展方向与布局，实现地下空间利用最大化、交通一体化。<br />
          （1）提出了宏观、中观、微观三个层面的杭州市TOD发展框架。<br />
          （2）从TOD开发视角出发，利用杭州市的手机信令、网约出行、兴趣点、道路网络、公共交通线路等多源城市数据刻画杭州地铁站点周围的TOD信息指标，利用Ｋ均值聚类进行地铁站点聚类，结合TOD指标的空间变化趋势，确定杭州市不同类型地铁站点的吸引范围。<br />
          （3）对杭州市多个重点发展区域（未来科技城、西湖中心、萧山城区、临平新城、大江东产业区等）提出明确的TOD发展目标和策略。
        </div>
        <div class="imags">
          <div class="imagt">
            <img style="width: 534px"
                 src="../../static/newhHome/基于智慧城市的杭州TOD模式研究.png"
                 alt="" />
            <img style="width: 462px"
                 src="../../static/newhHome/基于智慧城市的杭州TOD模式研究2.png"
                 alt="" />
          </div>
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
      dialogVisible5: false,
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
.virLaboratory-container {
  position: relative;
  min-width: 1170px;
  width: 100%;
  height: fit-content;
  padding-top: 190px;
  background-color: #f3fdff;

  .logoone {
    position: absolute;
    top: 112px;
    right: 0px;
    width: 1076px;
    height: 229px;
  }
  .titleWarp {
    // padding-left: 257px;
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
      width: 293px;
      // height: 124px;
      margin-top: 7px;
      font-size: 56px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #333333;
      line-height: 78px;
    }
  }
  .contentFirst {
    margin: 0 auto;
    width: 1406px;
    // height: 152px;
    font-size: 20px;
    font-family: PingFangSC-Light, PingFang SC;
    font-weight: 300;
    color: #000000;
    line-height: 38px;
  }
  .contentTwo {
    width: 1406px;
    margin: auto;
    margin-top: 34px;
    // margin-top: 186px;
    margin-bottom: 30px;
    height: 50px;
    font-size: 36px;
    font-family: PingFangSC-Light, PingFang SC;
    font-weight: 300;
    color: #000000;
    line-height: 50px;
  }
  .classcontentThree {
    position: relative;
    width: 1406px;
    margin: auto;
    height: 152px;
    font-size: 20px;
    font-family: PingFangSC-Light, PingFang SC;
    font-weight: 300;
    color: #000000;
    line-height: 38px;
    margin-bottom: 40px;
    .titleSmall {
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
  .picShow {
    display: flex;
    justify-content: space-between;
    width: 1403px;
    height: 413px;
    margin: 0 auto;
    padding-bottom: 129px;
    .pic {
      width: 258px;
      height: 413px;
      cursor: pointer;
      .img {
        width: 57px;
        height: 43px;
        margin-left: 31px;
        margin-top: 81px;
        margin-bottom: 28px;
      }
      .t {
        margin-left: 31px;
        width: 211px;
        height: 76px;
        font-size: 26px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ffffff;
        line-height: 38px;
      }
    }
    .picb1 {
      background-image: url("../../static//newhHome/v1.png");
    }
    .picb2 {
      background-image: url("../../static//newhHome/v2.png");
    }
    .picb3 {
      background-image: url("../../static//newhHome/v3.png");
    }
    .picb4 {
      background-image: url("../../static//newhHome/v4.png");
    }
    .picb5 {
      background-image: url("../../static//newhHome/v5.png");
    }
  }
}
</style>
