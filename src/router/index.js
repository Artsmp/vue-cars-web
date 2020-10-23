import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/index/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
    children: [
      {
        path: "/user",
        name: "User",
        component: () =>
          import(/* webpackChunkName: "user" */ "@/components/user")
      }
    ]
  },
];

const router = new VueRouter({
  routes
});

// 解决点击同一个路由报错的问题
const originalPush = router.push;
router.push = function (location) {
  return originalPush.call(this, location).catch(err => err);
}

console.log(router);

export default router;
