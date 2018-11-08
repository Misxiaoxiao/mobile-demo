import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/index/index.vue'),
      meta: {
        title: 'zuber白领租房平台',
      },
    },
    {
      path: '/search/room',
      name: 'room',
      component: () => import('./views/search/index.vue'),
      meta: {
        title: 'zuber白领租房平台',
      },
    },
    {
      path: '/search/demand',
      name: 'demand',
      component: () => import('./views/search/index.vue'),
      meta: {
        title: 'zuber白领租房平台',
      },
    },
    {
      path: '/room/:id',
      name: 'roomDetail',
      component: () => import('./views/room/index.vue'),
      meta: {
        title: '房源详情',
      },
    },
  ],
});
