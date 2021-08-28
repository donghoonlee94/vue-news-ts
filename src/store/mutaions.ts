import { NewsItem } from '@/api';
import { RootState } from './state';

enum MutaionTypes {
  SET_NEWS = 'SET_NEWS',
}

const mutations = {
  [MutaionTypes.SET_NEWS]: (state: RootState, news: NewsItem[]) => {
    state.news = news;
  },
};

type Mutations = typeof mutations;

export { mutations, Mutations };

// export default {
//   SET_NEWS(state, news) {
//     state.news = news;
//   },
//   SET_JOBS(state, jobs) {
//     state.jobs = jobs;
//   },
//   SET_ASK(state, ask) {
//     state.ask = ask;
//   },
//   SET_USER(state, username) {
//     state.user = username;
//   },
//   SET_ITEM(state, item) {
//     state.item = item;
//   },
//   SET_LIST(state, list) {
//     state.list = list;
//   },
// };
