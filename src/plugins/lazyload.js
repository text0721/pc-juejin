import Vue from "vue";
import VueLazyload from "vue-lazyload";
import load from "../../public/images/1.jpg"; //注意文件路径，写全路径

Vue.use(VueLazyload, {
  // 直接运用时引入不行，不能当做图片解析,要用变量接受再用图片
  // loading: "../assets/imgs/loading.gif",
  loading: load,
});
