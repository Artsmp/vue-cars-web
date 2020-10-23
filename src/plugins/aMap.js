import Vue from "vue";
// 引入vue-amap
import VueAMap from 'vue-amap';
Vue.use(VueAMap);
 
// 初始化vue-amap
VueAMap.initAMapApiLoader({
  // 高德的key
  key: 'a67484998aad8af756f17ae94a0ff1da',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 高德 sdk 版本，默认为 1.4.4
  v: '1.4.4',
  uiVersion: '1.0' // ui库版本，不配置不加载,
});