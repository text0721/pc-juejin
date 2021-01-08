import Vue from "vue";
import Vuex from "vuex";
import home from "./modules/home";
import navtag from "./modules/navtag";

Vue.use( Vuex );

export default new Vuex.Store( {
  modules: {
    home,
    navtag
  },
} );
