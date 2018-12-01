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
      path: '/search',
      component: () => import('./views/search/index.vue'),
      children: [
        {
          path: 'rent',
          name: 'room',
          component: () => import('./views/search/children/search_room.vue'),
          meta: {
            title: 'zuber - 个人房源',
          },
        },
        {
          path: 'demand',
          name: 'demand',
          component: () => import('./views/search/children/search_demand.vue'),
          meta: {
            title: 'zuber - 个人求租',
          },
        },
      ],
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
      path: '/subscription',
      name: 'subscription',
      component: () => import('./views/subscription/index.vue'),
      meta: {
        title: '订阅房源',
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
    // {
    //   path: '/jump',
    //   name: 'jump',
    //   component: () => import('./views/jump/index.vue'),
    // },
    // {
    //   path: '/contract',
    //   name: 'contract',
    //   component: () => import('./views/contract/index.vue'),
    //   meta: {
    //     title: '租赁合同',
    //   },
    //   children: [
    //     {
    //       path: 'list',
    //       name: 'contractList',
    //       component: () => import('./views/contract/children/list/index.vue'),
    //       meta: {
    //         title: '我的协议/合同',
    //       },
    //     },
    //     {
    //       path: 'create',
    //       name: 'contractCreate',
    //       component: () => import('./views/contract/children/create/index.vue'),
    //       children: [
    //         {
    //           path: 'deposit',
    //           name: 'contractCreateDeposit',
    //           component: () => import('./views/contract/children/create/children/deposit.vue'),
    //           meta: {
    //             title: '定金协议',
    //           },
    //         },
    //         {
    //           path: 'lease',
    //           name: 'contractCreateLease',
    //           component: () => import('./views/contract/children/create/children/lease.vue'),
    //           meta: {
    //             title: '租赁合同',
    //           },
    //         },
    //       ],
    //     },
    //     {
    //       path: 'template',
    //       name: 'contractTemplate',
    //       component: () => import('./views/contract/children/template/index.vue'),
    //       children: [
    //         {
    //           path: 'deposit',
    //           name: 'contractTemplateDeposit',
    //           component: () => import('./views/contract/children/template/children/deposit.vue'),
    //           meta: {
    //             title: '定金协议',
    //           },
    //         },
    //         {
    //           path: 'lease',
    //           name: 'contractTemplateLease',
    //           component: () => import('./views/contract/children/template/children/lease.vue'),
    //           meta: {
    //             title: '租赁合同',
    //           },
    //         },
    //       ],
    //     },
    //     {
    //       path: 'content',
    //       name: 'contractContent',
    //     },
    //     {
    //       path: 'description',
    //       name: 'contractDescription',
    //       component: () => import('./views/contract/children/description/index.vue'),
    //       meta: {
    //         title: 'zuber定金协议/租赁合同',
    //       },
    //     },
    //   ],
    // },
    {
      path: '/download',
      name: 'download',
      component: () => import('./views/download/index.vue'),
      meta: {
        title: 'zuber - 下载App',
      },
    },
  ],
});
