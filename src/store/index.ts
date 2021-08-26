import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutaions.js';
import actions from './actions';
import { state } from './state';

Vue.use(Vuex);

const store = {
  state,
};

export default new Vuex.Store(store);

// export default new Vuex.Store({
//   state: {
//     news: [],
//     jobs: [],
//     ask: [],
//     user: {},
//     item: {},
//     list: [],
//   },
//   getters: {
//     fetchedAsk(state) {
//       return state.ask;
//     },
//     fetchedItem(state) {
//       return state.item;
//     },
//   },
//   mutations: mutations,
//   actions: actions,
// });
