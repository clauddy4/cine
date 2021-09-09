import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articles: [
      {
        id: '1',
        name: 'Статья про Рататуй',
        description: 'Это статья я не знаю',
      },
      {
        id: '2',
        name: 'Про дожор',
        description: 'Это статья нет',
      },
      {
        id: '3',
        name: 'Про без мата',
        description: 'Маты ето плохо',
      },
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
});
