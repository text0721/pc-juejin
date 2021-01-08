import Vue from 'vue'
import App from './App.vue'
import router from "./router/index"
import store from "./store"
import './plugins/element.js'
import "./styles/reset.css"
Vue.config.productionTip = false

new Vue( {
  beforeCreate () {
    Vue.prototype.$bus = this
  },
  render: ( h ) => h( App ),
  router,
  store,
} ).$mount( "#app" );
