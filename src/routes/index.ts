import Vue from 'vue';
import VueRouter, { NavigationGuardNext, Route } from 'vue-router';
import NewsView from '../views/NewsView.vue';
import JobsView from '../views/JobsView.vue';
import AskView from '../views/AskView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';
import Bus from '../utils/bus';
import store from '../store/index.js';

Vue.use(VueRouter);

export default new VueRouter({
  // mode:histoty : # remove
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
      beforeEnter: async (to: Route, from: Route, next: NavigationGuardNext<Vue>) => {
        Bus.$emit('start:spinner');
        try {
          await store.dispatch('FETCH_LIST', to.name);
          next();
        } catch (error) {
          console.log(error);
          next('/');
        }
      },
    },
    {
      path: '/ask',
      name: 'ask',
      component: AskView,
      beforeEnter: (to, from, next) => {
        Bus.$emit('start:spinner');
        store
          .dispatch('FETCH_LIST', to.name)
          .then(() => next())
          .catch((error) => {
            console.log(error);
          });
      },
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
      // component: createListView('JobsView')
      beforeEnter: (to, from, next) => {
        Bus.$emit('start:spinner');
        store
          .dispatch('FETCH_LIST', to.name)
          .then(() => next())
          .catch((error) => {
            console.log(error);
          });
      },
    },
    {
      path: '/item/:id',
      component: ItemView,
    },
    {
      path: '/user/:id',
      component: UserView,
    },
  ],
});
