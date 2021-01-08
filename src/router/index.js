// @ts-nocheck
import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../pages/HomeContent";

// 重写push和replace方法
// 目的：为了让编程式导航重复点击时不报错~
const push = VueRouter.prototype.push;
const replace = VueRouter.prototype.replace;

VueRouter.prototype.push = function ( location, onComplete, onAbort ) {
  // 如果用户想处理失败，就处理
  if ( onComplete && onAbort ) {
    return push.call( this, location, onComplete, onAbort );
  }
  // 如果用户不处理失败，给默认值：空函数
  return push.call( this, location, onComplete, () => { } );
};

VueRouter.prototype.replace = function ( location, onComplete, onAbort ) {
  // 如果用户想处理失败，就处理
  if ( onComplete && onAbort ) {
    return replace.call( this, location, onComplete, onAbort );
  }
  // 如果用户不处理失败，给默认值：空函数
  return replace.call( this, location, onComplete, () => { } );
};

// 安装插件
Vue.use( VueRouter );

export default new VueRouter( {
  // 路由配置
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/following",
      component: Home,
    },
    {
      path: "/recommend",
      component: Home
    },
    {
      path: "/backend",
      component: Home
    },
    {
      path: "/frontend",
      component: Home
    },{
      path: "/android",
      component: Home
    },
    {
      path: "/ios",
      component: Home
    },
    {
      path: "/ai",
      component: Home
    },
    {
      path: "/freebie",
      component: Home
    },
    {
      path: "/career",
      component: Home
    },
    {
      path: "/acticle",
      component: Home
    }

  ],
  // 每次切换路由页面滚动条位置
  scrollBehavior () {
    return { x: 0, y: 0 };
  },
} );
