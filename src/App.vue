<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  created() {},
};
</script>
<style lang="less">
html,
body {
  margin: 0px !important;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  color: #fff;
}

#app {
  width: 100vw;
  height: 100vh;
}
</style>
