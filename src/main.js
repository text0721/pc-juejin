// @ts-nocheck
import Vue from "vue";
import App from "./App.vue";
import "./plugins/element.js";
import "./static/iconfont.css";

import router from "./router";
import store from "./store";

import "./plugins/element";

import mock from "./mock/index";
Vue.use(mock);

// 引入公共资源
import "./styles/reset.css";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
