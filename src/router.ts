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
      redirect: {
        name: 'room',
      },
    },
    {
      path: '/search/rent',
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
        title: 'zuber白领求租平台',
      },
    },
    {
      path: '/bed/:id',
      name: 'bedDetail',
      component: () => import('./views/room/index.vue'),
      meta: {
        title: 'zuber - 房源详情',
      },
    },
    {
      path: '/room/image',
      name: 'image',
      component: () => import('./views/room/index.vue'),
      meta: {
        title: 'zuber - 房源详情',
      },
    },
    {
      path: '/user/:id',
      name: 'user',
      component: () => import('./views/user/index.vue'),
      meta: {
        title: 'zuber - 个人用户详情',
      },
    },
    {
      path: '/company/:id',
      name: 'company',
      component: () => import('./views/company/index.vue'),
      meta: {
        title: 'zuber - 商家用户详情',
      },
    },
    {
      path: '/description/room',
      name: 'descriptionRoom',
      component: () => import('./views/description/room_type.vue'),
      meta: {
        title: '房源类型说明',
      },
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('@/components/map/index.vue'),
      meta: {
        title: 'zuber - 房源位置',
      },
    },
    {
      path: '/contract/:id',
      name: 'contract',
      component: () => import('./views/contract/index.vue'),
      meta: {
        title: 'zuber定金协议/租赁合同',
      },
    },
    {
      path: '/earnest/:id',
      name: 'contract',
      component: () => import('./views/contract/index.vue'),
      meta: {
        title: 'zuber定金协议/租赁合同',
      },
    },
    {
      path: '/agreement/:id',
      name: 'contract',
      component: () => import('./views/contract/index.vue'),
      meta: {
        title: 'zuber定金协议/租赁合同',
      },
    },
    {
      path: '/download',
      name: 'download',
      component: () => import('./views/download/index.vue'),
      meta: {
        title: 'zuber - 下载App',
      },
    },
		{
			path: '/jump',
			name: 'jump',
			component: () => import('./views/jump/index.vue'),
		}
  ],
});
