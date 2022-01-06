<template>
  <div>
    <header-title></header-title>
    <div class="view">
      <three-scene></three-scene>
    </div>
    <div class="left">
      <div class="event"></div>
      <div class="proportion-bg">
        <div class="icon">
          <div class="warn">报警</div>
          <div class="warn off">异常</div>
        </div>
        <div class="proportion"></div>
      </div>
    </div>
    <div class="right">
      <div class="flow"></div>
      <div class="car bg">
        <div class="car-data"></div>
      </div>
      <div class="floor bg"></div>
    </div>
    <div class="bottom">
      <div class="dispatch">
        <car-table></car-table>
      </div>
      <div class="manage"></div>
    </div>
  </div>
</template>
<script>
import ThreeScene from "../../components/three-scene";
import CarTable from '../components/car-table.vue';
import HeaderTitle from "../components/header-title.vue";

export default {
  components: {
    ThreeScene,
    HeaderTitle,
    CarTable,
  },
};
</script>
<style lang="less" scoped>
.view {
  width: 100vw;
  height: 100vh;
}
.left {
  position: absolute;
  left: 43px;
  top: 119px;
  z-index: 3;
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
      top: 33px;
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
    }
  }
}
.right {
  position: absolute;
  right: 46px;
  z-index: 3;
  top: 119px;
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
    }
  }
  .floor {
    margin-top: 14px;
    background-image: url("../../assets/floor.png");
  }
  .manage {
    margin-top: 14px;
    background-image: url("../../assets/车船.png");
    background-size: cover;
    height: 239px;
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
  .dispatch {
    background-image: url("../../assets/车船.png");
    background-size: cover;
    width: 898px;
    height: 239px;
  }
  .manage {
    background-image: url("../../assets/车船.png");
    background-size: cover;
    width: 898px;
    height: 239px;
  }
}
</style>
