<template>
  <div>
    <header-title v-show="isShow"></header-title>
    <div class="view">
      <three-scene @ready="show"></three-scene>
    </div>
    <div class="left" v-show="isShow">
      <div class="event"></div>
      <div class="proportion"></div>
    </div>
    <div class="right" v-show="isShow">
      <div class="flow"></div>
      <div class="car"></div>
      <div class="floor bg"></div>
    </div>
    <div class="bottom">
      <div class="dispatch" v-show="isShow"></div>
      <div class="manage" v-show="isShow"></div>
    </div>
  </div>
</template>
<script>
import ThreeScene from "../../components/three-scene";
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
  left: 30px;
  top: 124px;
  z-index: 3;
  animation: fadeInLeftBig 4s;
  -webkit-animation: fadeInLeftBig 4s;
  .event {
    background-image: url("../../assets/事件.png");
    width: 361px;
    height: 262px;
    background-size: cover;
  }
  .proportion {
    margin-top: 15px;
    background-image: url("../../assets/占比.png");
    width: 361x;
    height: 329px;
    background-size: cover;
  }
}
.right {
  position: absolute;
  right: 28px;
  z-index: 3;
  top: 124px;
  animation: fadeInRightBig 4s;
  -webkit-animation: fadeInRightBig 4s;
  .bg {
    width: 340px;
    height: 220px;
    background-size: cover;
  }
  .flow {
    background-image: url("../../assets/客流.png");
    width: 372px;
    height: 196px;
    background-size: cover;
  }
  .car {
    margin-top: 10px;
    background-image: url("../../assets/car.png");
    width: 372px;
    height: 196px;
    background-size: cover;
  }
  .floor {
    margin-top: 10px;
    background-image: url("../../assets/电梯.png");
    width: 372px;
    height: 196px;
    background-size: cover;
  }
}
.bottom {
  position: absolute;
  top: 745px;
  left: 30px;
  right: 26px;
  z-index: 3;
  height: 316px;
  display: flex;
  justify-content: space-between;
  .dispatch {
    background-image: url("../../assets/dispatch.png");
    background-size: cover;
    width: 928px;
    height: 316px;
  }
  .manage {
    background-image: url("../../assets/事件处理.png");
    background-size: cover;
    width: 928px;
    height: 316px;
  }
}
</style>
