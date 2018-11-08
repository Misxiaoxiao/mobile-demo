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
        :requestCallback="requestCallback"
        />

        <demand-condition-money
        :bool="demandSearchByMoney"
        :show="changeDemandSearchMoneyPopup"
        :money="demandCondition.money"
        :change="changeDemandMoney"
        :requestCallback="requestCallback"
        />

      </div>
      <div class="list_wrap">
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-list
            v-model="loading"
            :finished="finished"
            @load="onLoad"
          >
            <post-room />
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
import DemandList from '@/components/search/demand_list.vue';
import PostRoom from '@/components/search/post_room.vue';

@Component({
  components: {
    DemandConditionLocate,
    DemandConditionGender,
    DemandConditionMoney,
    DemandList,
    PostRoom,
  },
})
export default class SearchDemand extends Vue {
  private refreshing: boolean = false;
  private finished: boolean = false;
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

  @State((state: any) => state.LocateModule.current_city) private currentCity!: string;
  @State((state: any) => state.SearchModule.demand_list) private demandList!: DemandModal[];
  @State((state: any) => state.SearchModule.demand_sequence) private sequence!: boolean;
  @State((state: any) => state.SearchModule.has_next_demand_page) private hasNextDemandPage!: boolean;

  @Action('getDemandList') private getDemandList: any;

  @Watch('hasNextRentPage') private change(): void {
    this.finished = !this.hasNextDemandPage;
  }
  @Watch('$route') private changeRoute(): void {
    this.requestCallback();
  }

  private onRefresh(): void {
    this.requestCallback(() => {
      this.refreshing = false;
    });
  }
  private onLoad(): void {
    this.requestCallback(() => {
      this.loading = false;
    });
  }
  // 刷新
  private requestCallback(success?: any): void {
    const data = {
      city: this.currentCity,
      sequence: this.sequence,
      gender: this.demandCondition.gender,
      cost1: this.demandCondition.money.min,
      cost2: this.demandCondition.money.max,
      longitude: this.demandCondition.location.lng === -1 ? '' : this.demandCondition.location.lng,
      latitude: this.demandCondition.location.lat === -1 ? '' : this.demandCondition.location.lat,
    };
    this.getDemandList({
      data,
      success,
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
  > div {
    flex: 1;
  }
}
.list_wrap {
  width: 100%;
  height: 95%;
  overflow-y: scroll;
  .van-pull-refresh {
    height: 100%;
    overflow-y: scroll;
  }
}
</style>
