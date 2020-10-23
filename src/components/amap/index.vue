<template>
  <div class="amap-wrapper">
    <el-amap vid="amapContainer"></el-amap>
  </div>
</template>

<script>
import VueAMap, { lazyAMapApiLoaderInstance } from "vue-amap";
let amapManager = new VueAMap.AMapManager();
export default {
  name: "Map",
  data() {
    return {
      zoom: 13,
      center: [117.230859, 25.217816]
    };
  },
  mounted() {
    lazyAMapApiLoaderInstance.load().then(() => {
      // your code ...
      this.map = new AMap.Map("amapContainer", {
        center: this.center,
        zoom: this.zoom
      });
    });
  }
};
</script>

<style lang="scss" scoped>
.amap-wrapper {
  height: 100vh;
}
</style>