<template>
  <div class="header">
    <div class="title">拈花湾智慧景区应急指挥平台</div>
    <div class="time-detail">
      <div class="times">
        <div class="d1">{{ time }}</div>
        <div class="d2">{{ year }}</div>
      </div>
      <div class="line-white"></div>
      <div class="weather">
        <div class="weather-bg"></div>
        <div class="weather-data">18℃</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: "",
      time: "",
    };
  },
  mounted() {
    this.getTimes();
  },
  methods: {
    getTimes() {
      setInterval(() => {
        let date = new Date();
        let month = new Date(date).getMonth() + 1;
        this.year =
          new Date(date).getFullYear() +
          "/" +
          month +
          "/" +
          new Date(date).getDate();
        let hh = new Date(date).getHours();
        let mm = new Date(date).getMinutes();
        mm = mm > 9 ? mm : "0" + mm;
        let ss = new Date(date).getSeconds();
        ss = ss > 9 ? ss : "0" + ss;
        this.time = hh + ":" + mm + ":" + ss;
      }, 1000);
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  position: absolute;
  top: 31px;
  width: 100%;
  height: 64px;
  display: flex;
  z-index: 3;
  .title {
    background-image: url("../../assets/title-bg.png");
    background-size: 100% 100%;
    color: #fff;
    font-size: 36px;
    margin-bottom: 16px;
    padding-left:15px ;
    margin-left: 43px;
  }
}
.header .time-detail {
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 46px;
}
.time-detail {
  .times {
    display: flex;
    flex-direction: column;
  }
  .weather {
    display: flex;
    margin-left: 25px;
    justify-content: center;
    align-items: center;
    .weather-data {
      margin-left: 25px;
    }
  }
}
.line-white {
  width: 2px;
  height: 22px;
  background: #ffffff;
  margin-top: 8px;
  margin-left: 23px;
}
.d1 {
  line-height: 36px;
  font-size: 16px;
  letter-spacing: 1px;
}
.d2 {
  font-size: 8px;
  position: relative;
  bottom: 3px;
  line-height: 8px;
}
.weather-bg {
  width: 38px;
  height: 38px;
  margin-top: -12px;
  background-image: url("../../assets/云 (1).png");
  background-size: 100% 100%;
}
</style>
