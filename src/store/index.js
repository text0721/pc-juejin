import Vue from "vue";
import Vuex from "vuex";
import home from "./modules/home";
import navtag from "./modules/navtag";
import book from "./modules/book";
import topic from "./modules/topic";

Vue.use( Vuex );

export default new Vuex.Store( {
  modules: {
    home,
    navtag,
    book,
    topic
  },
} );
