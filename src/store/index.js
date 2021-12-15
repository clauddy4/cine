import Vue from "vue";
import Vuex from "vuex";

import articles from './modules/articles';
import article from "./modules/article";
import auth from "./modules/auth";
//import newArticles from './modules/news';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        articles,
        article,
        auth,
        //newArticles
    }
})
