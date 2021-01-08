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

import "./plugins/lazyload";

Vue.config.productionTip = false;

new Vue({
  beforeCreate() {
<<<<<<< HEAD
    Vue.prototype.$bus = this;
=======
    // 绑定全局事件总线对象
    Vue.prototype.$bus = this; //方式2，常用
>>>>>>> xiafenxiao
  },
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
