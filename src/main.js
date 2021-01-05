// @ts-nocheck
import Vue from "vue";
import App from "./App";

import router from "./router";
import store from "./store";

import "./plugins/element";

// 引入公共资源
import "./styles/reset.css";

import "./plugins/lazyload";

Vue.config.productionTip = false;

new Vue({
  beforeCreate() {
    // 绑定全局事件总线对象
    Vue.prototype.$bus = this; //方式2，常用
  },
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
