import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store";
import "./plugins/element.js";
import "./static/iconfont.css";


import mock from "./mock/index";
Vue.use(mock);

// 引入公共资源
import "./styles/reset.css";
import "./styles/iconfont.css";

Vue.config.productionTip = false;

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
