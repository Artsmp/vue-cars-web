<template>
  <div>
    <!-- 车辆数据渲染 -->
    <Cars />
    <!-- 地图 -->
    <Map />
    <!-- 导航菜单 -->
    <NavBar />
    <!-- 会员页面 -->
    <div id="children-view" :class="{open: show}">
      <router-view />
    </div>
  </div>
</template>

<script>
import Map from "@/components/amap"; // 地图组件
import Cars from "@/components/cars"; // 汽车列表数据渲染
import NavBar from "@/components/navbar"; // 汽车菜单列
export default {
  name: "Index",
  components: { Map, Cars, NavBar },
  data() {
    return {
    }
  },
  computed: {
    show() {
      const route = this.$route;
      console.log(route);
      return route.name === 'Index' ? false : true;
    }
  },
  watch: {
    // '$route': {
    //   immediate: true,
    //   handler(newVal) {
    //     if (newVal.name === 'User') {
    //       this.showUserBar = true;
    //     } else {
    //       this.showUserBar = false;
    //     }
    //   }
    // }
  }
};
</script>

<style lang="scss" scoped>
#children-view {
  position: fixed;
  z-index: 101;
  right: -410px;
  top: 0;
  bottom: 0;
  width: 410px;
  background-color: #34393f;
  transition: all .3s;
  &.open {
    right: 0;
  }
}
</style>