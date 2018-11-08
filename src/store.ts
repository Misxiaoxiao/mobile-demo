import Vue from 'vue';
import Vuex from 'vuex';
import AuthModule from '@/vuex/modules/auth';
import LocateModule from '@/vuex/modules/locate';
import SearchModule from '@/vuex/modules/search';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    AuthModule,
    LocateModule,
    SearchModule,
  },
});
