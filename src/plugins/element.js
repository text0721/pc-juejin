import Vue from "vue";
import { Button, Message, Card, MessageBox, Icon } from "element-ui";

Vue.use(Button);
Vue.use(Card);
Vue.use(Icon);

Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$prompt = MessageBox.prompt;
