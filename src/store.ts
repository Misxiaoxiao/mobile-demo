import Vue from 'vue';
import Vuex from 'vuex';
import AuthModule from '@/vuex/modules/auth';
import LocateModule from '@/vuex/modules/locate';
import SearchModule from '@/vuex/modules/search';
import CommonModule from '@/vuex/modules/common';
import AccountModule from '@/vuex/modules/account';
import ResidenceModule from '@/vuex/modules/residence';
import UserModule from '@/vuex/modules/user';
import ShareModule from '@/vuex/modules/share';
import ContractModule from '@/vuex/modules/contract';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    AuthModule,
    LocateModule,
    SearchModule,
    CommonModule,
    AccountModule,
    ResidenceModule,
    UserModule,
    ShareModule,
    ContractModule,
  },
});
