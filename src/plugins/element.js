import Vue from "vue";
import { Button, Message, Calendar, Menu, Submenu, MenuItem } from "element-ui";

Vue.use(Button);
Vue.use(Calendar);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);

Vue.prototype.$message = Message;
