import Vue from "vue";
import {
  Button,
  Message,
  Calendar,
  Menu,
  Submenu,
  MenuItem,
  Carousel,
  CarouselItem,
} from "element-ui";

Vue.use(Button);
Vue.use(Calendar);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Carousel);
Vue.use(CarouselItem);

Vue.prototype.$message = Message;
