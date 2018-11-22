<template>
  <transition name="fade-right" class="demand_wrap">
    <div v-show="$route.name === 'demand'">
      <div class="condition_wrap">

        <demand-condition-locate
        :bool="demandSearchByInput"
        :show="changeDemandSearchInputPopup"
        :region="demandCondition.region"
        />

        <demand-condition-gender
        :bool="demandSearchByGender"
        :show="changeDemandSearchGenderPopup"
        :gender="demandCondition.gender"
        :change="changeDemandGender"
        :requestCallback="requestDemand"
        />

        <demand-condition-money
        :bool="demandSearchByMoney"
        :show="changeDemandSearchMoneyPopup"
        :money="demandCondition.money"
        :change="changeDemandMoney"
        :requestCallback="requestDemand"
        />

      </div>
      <div class="list_wrap">
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-list
            v-model="loading"
            :finished="finished"
            @load="onLoad"
          >
            <van-cell v-for="(item, i) in demandList" :key="i">
              <DemandList :demandItem="item" />
            </van-cell>
          </van-list>
        </van-pull-refresh>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import { DemandModal } from '@/vuex/modules/search/search.model';
import DemandConditionLocate from '@/components/search/condition_locate.vue';
import DemandConditionGender from '@/components/search/demand_condition_gender.vue';
import DemandConditionMoney from '@/components/search/demand_condition_money.vue';
import DemandList from '@/components/list/demand.vue';
// import PostRoom from '@/components/search/post_room.vue';

@Component({
  components: {
    DemandConditionLocate,
    DemandConditionGender,
    DemandConditionMoney,
    DemandList,
    // PostRoom,
  },
})
export default class SearchDemand extends Vue {
  private refreshing: boolean = false;
  private loading: boolean = false;

  @Prop({default: false}) private demandSearchByInput!: boolean;
  @Prop({default: {}}) private changeDemandSearchInputPopup!: any;

  @Prop({default: false}) private demandSearchByGender!: boolean;
  @Prop({default: {}}) private changeDemandSearchGenderPopup!: any;

  @Prop({default: false}) private demandSearchByMoney!: boolean;
  @Prop({default: {}}) private changeDemandSearchMoneyPopup!: any;

  @Prop({default: {}}) private demandCondition!: any;
  @Prop({default: {}}) private changeDemandRegion!: any;
  @Prop({default: {}}) private changeDemandGender!: any;
  @Prop({default: {}}) private changeDemandMoney!: any;

  @Prop({default: {}}) private requestDemand!: any;

  @State((state: any) => state.LocateModule.current_city) private currentCity!: string;
  @State((state: any) => state.SearchModule.demand_list) private demandList!: DemandModal[];
  @State((state: any) => state.SearchModule.demand_sequence) private sequence!: boolean;
  @State((state: any) => state.SearchModule.has_next_demand_page) private hasNextDemandPage!: boolean;
  @State((state: any) => state.SearchModule.searching) private searching!: boolean;

  @Action('getDemandList') private getDemandList: any;

  get finished(): boolean {
    return !this.hasNextDemandPage || this.searching;
  }

  private onRefresh(): void {
    this.loading = true;
    this.requestDemand(() => {
      this.refreshing = false;
    }, false);
  }
  private onLoad(): void {
    this.loading = true;
    this.requestDemand(() => {
      this.loading = false;
    }, true);
  }
  private mounted(): void {
    this.loading = true;
    this.requestDemand(() => {
      this.loading = false;
    });
  }
}
</script>

<style lang="less">
.fade-right-enter-active, .fade-right-leave-active {
  transition: .2s;
}
.fade-right-enter, .fade-right-leave-to {
  transform: translate(100%);
}
.condition_wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
  background-color: #fff;
  > div {
    flex: 1;
  }
}
.list_wrap {
  width: 100%;
  height: 95%;
  // overflow-y: scroll;
  .van-pull-refresh {
    height: 100%;
    overflow-y: scroll;
    -webkit-overflow-scrolling : touch;
  }
}
</style>
