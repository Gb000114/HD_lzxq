<template>
  <div>
    <header-title v-show="isShow"></header-title>
    <div class="view">
      <three-scene @ready="show"></three-scene>
    </div>
    <div class="left" v-show="isShow">
      <div class="event"></div>
      <div class="proportion-bg">
        <div class="icon">
          <div class="warn">报警</div>
          <div class="warn off">异常</div>
        </div>
        <div class="proportion">
          <div class="p1">10%</div>
          <div class="p2">30%</div>
          <div class="p3">10%</div>
          <div class="p4">30%</div>
          <div class="p5">20%</div>
        </div>
      </div>
    </div>
    <div class="right" v-show="isShow">
      <div class="flow"></div>
      <div class="car bg">
        <div class="car-data">
          <div class="c1">107</div>
          <div class="c2">500</div>
          <div class="c3">600</div>
        </div>
      </div>
      <div class="floor bg"></div>
    </div>
    <div class="bottom">
      <div class="dispatch" v-show="isShow">
        <div class="title">
          <div class="title-bg"></div>
          <div class="title-data">车船调度</div>
          <div class="icon">
            <div class="warn">车</div>
            <div class="warn off">船</div>
          </div>
        </div>

        <car-table></car-table>
      </div>
      <div class="manage" v-show="isShow"></div>
    </div>
  </div>
</template>
<script>
import ThreeScene from "../../components/three-scene";
import CarTable from "../components/car-table.vue";
import HeaderTitle from "../components/header-title.vue";

export default {
  data() {
    return {
      isShow: false,
    };
  },
  components: {
    ThreeScene,
    HeaderTitle,
    CarTable,
  },
  methods: {
    show() {
      this.isShow = true;
    },
  },
};
</script>
<style lang="less" scoped>
.view {
  width: 100vw;
  height: 100vh;
}
@keyframes fadeInLeftBig {
  from {
    left: -400px;
  }
  to {
    left: 43px;
  }
}
@-webkit-keyframes fadeInLeftBig /*Safari and Chrome*/ {
  from {
    left: -400px;
  }
  to {
    left: 43px;
  }
}
@keyframes fadeInRightBig {
  from {
    right: -400px;
  }
  to {
    right: 46px;
  }
}
@-webkit-keyframes fadeInRightBig /*Safari and Chrome*/ {
  from {
    right: -400px;
  }
  to {
    right: 46px;
  }
}

.left {
  position: absolute;
  left: 43px;
  top: 119px;
  z-index: 3;
  animation: fadeInLeftBig 4s;
  -webkit-animation: fadeInLeftBig 4s;
  .event {
    background-image: url("../../assets/事件.png");
    width: 340px;
    height: 220px;
    background-size: cover;
  }
  .proportion-bg {
    margin-top: 14px;
    background-image: url("../../assets/占比-bg.png");
    width: 340px;
    height: 450px;
    .icon {
      position: relative;
      top: 22px;
      left: 242px;
      display: flex;
      .warn {
        background-image: url("../../assets/warn.png");
        width: 36px;
        height: 14px;
        background-size: cover;
        font-size: 10px;
        text-align: center;
      }
      .off {
        background-image: url("../../assets/white.png");
        margin-left: 2px;
      }
    }
    .proportion {
      background-image: url("../../assets/占比.png");
      width: 219px;
      height: 235px;
      background-size: cover;
      position: relative;
      top: 76px;
      left: 55px;
      .p1 {
        position: absolute;
        top: 72px;
        left: 54px;
      }
      .p2 {
        position: absolute;
        top: 70px;
        right: 66px;
      }
      .p3 {
        position: absolute;
        top: 133px;
        left: 24px;
      }
      .p4 {
        position: absolute;
        top: 136px;
        right: 41px;
      }
      .p5 {
        position: absolute;
        top: 178px;
        right: 103px;
      }
    }
  }
}
.right {
  position: absolute;
  right: 46px;
  z-index: 3;
  top: 119px;
  animation: fadeInRightBig 4s;
  -webkit-animation: fadeInRightBig 4s;
  .bg {
    width: 340px;
    height: 220px;
    background-size: cover;
  }
  .flow {
    background-image: url("../../assets/客流.png");
    width: 340px;
    height: 220px;
    background-size: cover;
  }
  .car {
    margin-top: 14px;
    background-image: url("../../assets/car-bg.png");
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    .car-data {
      background-image: url("../../assets/car.png");
      width: 287px;
      height: 187px;
      .c1 {
        position: relative;
        top: 41px;
        right: -179px;
        color: rgba(0, 186, 173, 1);
      }
      .c2 {
        position: relative;
        right: -179px;
        top: 72px;
        color: rgba(251, 118, 131, 1);
      }
      .c3 {
        position: relative;
        right: -179px;
        top: 100px;
        color: rgba(118, 221, 251, 1);
      }
    }
  }
  .floor {
    margin-top: 14px;
    background-image: url("../../assets/floor.png");
  }
}
.bottom {
  position: absolute;
  top: 821px;
  left: 43px;
  right: 43px;
  z-index: 3;
  height: 229px;
  display: flex;
  justify-content: space-between;
  .title {
    position: relative;
    left: 13px;
    top: 8px;
    display: flex;
    align-items: center;
    .title-bg {
      background-image: url("../../assets/大数据 (2).png");
      width: 19px;
      height: 19px;
      background-size: cover;
    }
    .title-data {
      font-size: 16px;
      margin-left: 8px;
    }
    .icon {
      position: absolute;
      right: 25px;
      display: flex;
      .warn {
        background-image: url("../../assets/warn.png");
        width: 36px;
        height: 14px;
        background-size: cover;
        font-size: 10px;
        text-align: center;
      }
      .off {
        background-image: url("../../assets/white.png");
        margin-left: 2px;
      }
    }
  }

  .dispatch {
    background-image: url("../../assets/车船.png");
    background-size: cover;
    width: 898px;
    height: 239px;
  }
  .manage {
    background-image: url("../../assets/事件处理.png");
    background-size: cover;
    width: 898px;
    height: 239px;
  }
}
</style>
