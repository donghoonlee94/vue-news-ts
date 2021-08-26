import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutaions.js';
import actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
    user: {},
    item: {},
    list: [],
  },
  getters: {
    fetchedAsk(state) {
      return state.ask;
    },
    fetchedItem(state) {
      return state.item;
    },
  },
  mutations: mutations,
  actions: actions,
});
