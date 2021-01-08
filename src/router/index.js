// @ts-nocheck
import Vue from "vue";
import VueRouter from "vue-router";

import HomeContent from "../pages/HomeContent";

// const Book = () => import(/* webpackChunkName: "Book" */ "../pages/Book");
import Book from "../pages/book/index.vue";
import BookDetail from "../pages/BookDetail";
import Payment from "../pages/Payment";
import Topay from "../pages/Topay";
import Home from "../pages/home.vue";
import Topic from "../pages/Topic";

// 重写push和replace方法
// 目的：为了让编程式导航重复点击时不报错~
const push = VueRouter.prototype.push;
const replace = VueRouter.prototype.replace;

VueRouter.prototype.push = function(location, onComplete, onAbort) {
  // 如果用户想处理失败，就处理
  if (onComplete && onAbort) {
    return push.call(this, location, onComplete, onAbort);
  }
  // 如果用户不处理失败，给默认值：空函数
  return push.call(this, location, onComplete, () => {});
};

VueRouter.prototype.replace = function(location, onComplete, onAbort) {
  // 如果用户想处理失败，就处理
  if (onComplete && onAbort) {
    return replace.call(this, location, onComplete, onAbort);
  }
  // 如果用户不处理失败，给默认值：空函数
  return replace.call(this, location, onComplete, () => {});
};

// 安装插件
Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/following",
      component: HomeContent,
    },
    {
      path: "/recommend",
      component: HomeContent,
    },
    {
      path: "/backend",
      component: HomeContent,
    },
    {
      path: "/frontend",
      component: HomeContent,
    },
    {
      path: "/android",
      component: HomeContent,
    },
    {
      path: "/ios",
      component: HomeContent,
    },
    {
      path: "/ai",
      component: HomeContent,
    },
    {
      path: "/freebie",
      component: HomeContent,
    },
    {
      path: "/career",
      component: HomeContent,
    },
    {
      path: "/acticle",
      component: HomeContent,
    },
    {
      path: "/HomeContent",
      component: HomeContent,
    },
    {
      path: "/books",
      component: Book,
    },
    {
      // name: "book",
      path: "/book/:id",
      component: BookDetail,
    },
    {
      name: "Payment",
      path: "/payment/:id",
      component: Payment,
    },
    {
      name: "Topay",
      path: "/topay",
      component: Topay,
    },
    {
      path: "/topic",
      component: Topic,
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
