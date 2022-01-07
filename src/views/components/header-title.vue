<template>
  <div class="header">
    <div class="header-bg-left">
      <div class="bg-left"></div>
    </div>
    <div class="title">拈花湾智慧景区应急指挥平台</div>
    <div class="header-bg-right">
      <div class="bg-left"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.header {
  position: absolute;
  top: 42px;
  left: 97px;
  width: 1723px;
  height: 54px;
  background-image: url("../../assets/title-bg.png");
  background-size: 100% 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 3;
  .header-bg-left {
    background-image: url("../../assets/2.png");
    width: 545px;
    height: 17px;
    background-size: cover;
    .bg-left {
      background-image: url("../../assets/4.png");
      width: 37px;
      height: 17px;
      position: relative;
      left: 540px;
      background-size: cover;
    }
  }
  .title {
    font-size: 36px;
    margin-top: -18px;
  }
  .header-bg-right {
    background-image: url("../../assets/3.png");
    width: 545px;
    height: 17px;
    background-size: cover;
    .bg-left {
      background-image: url("../../assets/6.png");
      width: 37px;
      height: 17px;
      position: relative;
      right: 32px;
      background-size: cover;
    }
  }
}
</style>
