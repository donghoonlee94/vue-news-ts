import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { mutations } from './mutations';
import actions from './actions';
import { state, RootState } from './state';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state,
  mutations,
};

export default new Vuex.Store(store);
