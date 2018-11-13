<template>
  <transition name="fade-left" class="room_wrap">
    <div v-show="$route.name === 'room'">
      <div class="condition_wrap">

        <room-condition-locate
        :bool="roomSearchByInput"
        :show="changeRoomSearchInputPopup"
        :region="roomCondition.region"
        />

        <room-condition-video
        :bool="roomSearchByVideo"
        :show="changeRoomSearchByVideoPopup"
        :hasVideo="roomCondition.hasVideo"
        :change="changeRoomHasVideo"
        :requestCallback="request"
        />

        <room-condition-type
        :bool="roomSearchByType"
        :show="changeRoomSearchByTypePopup"
        :type="roomCondition.type"
        :change="changeRoomType"
        :requestCallback="request"
        />

        <room-condition-other
        :bool="roomSearchByOther"
        :show="changeRoomSearchByOtherPopup"
        :other="roomCondition.other"
        :change="changeRoomOther"
        :requestCallback="request"
        />

      </div>

      <div class="list_wrap">
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-list
            v-model="loading"
            :finished="finished"
            @load="onLoad"
          >
            <div class="banner">
              <p>
                <i class="iconfont">&#xe658;</i>zuber定金协议 / 租赁合同，方便安全有保障
              </p>
              <i class="iconfont next_yellow_icon">&#xe601;</i>
            </div>
            <van-cell v-for="(item, i) in rentList" :key="i">
              <room-list :room="item.room" />
            </van-cell>
          </van-list>
        </van-pull-refresh>
      </div>

    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import { RoomModel } from '@/vuex/modules/search/search.model';
import RoomConditionLocate from '@/components/search/condition_locate.vue';
import RoomConditionVideo from '@/components/search/room_condition_video.vue';
import RoomConditionType from '@/components/search/room_condition_type.vue';
import RoomConditionOther from '@/components/search/room_condition_other.vue';
import RoomList from '@/components/list/room.vue';

@Component({
  components: {
    RoomConditionLocate,
    RoomConditionVideo,
    RoomConditionType,
    RoomConditionOther,
    RoomList,
  },
})
export default class SearchRoom extends Vue {
  private loading: boolean = false;
  private refreshing: boolean = false;

  @Prop({default: false}) private roomSearchByInput!: boolean;
  @Prop({default: {}}) private changeRoomSearchInputPopup!: any;

  @Prop({default: false}) private roomSearchByVideo!: boolean;
  @Prop({default: {}}) private changeRoomSearchByVideoPopup!: any;

  @Prop({default: false}) private roomSearchByType!: boolean;
  @Prop({default: {}}) private changeRoomSearchByTypePopup!: any;

  @Prop({default: false}) private roomSearchByOther!: boolean;
  @Prop({default: {}}) private changeRoomSearchByOtherPopup!: any;

  @Prop({default: {}}) private roomCondition!: any;
  @Prop({default: {}}) private changeRoomRegion!: any;
  @Prop({default: {}}) private changeRoomHasVideo!: any;
  @Prop({default: {}}) private changeRoomType!: any;
  @Prop({default: {}}) private changeRoomOther!: any;

  @Prop({default: {}}) private request!: any;

  @State((state: any) => state.LocateModule.current_city) private currentCity!: string;
  @State((state: any) => state.SearchModule.rent_list) private rentList!: RoomModel[];
  @State((state: any) => state.SearchModule.has_next_rent_page) private hasNextRentPage!: boolean;
  @State((state: any) => state.SearchModule.searching) private searching!: boolean;

  @Action('getBedList') private getBedList: any;

  get finished(): boolean {
    return !this.hasNextRentPage || this.searching;
  }

  private onLoad(): void {
    this.request(() => {
      this.loading = false;
    }, true);
  }
  private onRefresh(): void {
    this.request(() => {
      this.refreshing = false;
    }, false);
  }

  private mounted(): void {
    this.loading = true;
    this.request(() => {
      this.loading = false;
    });
  }
}
</script>

<style lang="less">
.fade-left-enter-active, .fade-left-leave-active {
  transition: .2s;
}
.fade-left-enter, .fade-left-leave-to {
  transform: translate(-100%);
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
  .van-pull-refresh {
    height: 100%;
    overflow-y: scroll;
  }
}
.banner {
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  background-color: #FFF2BE;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #CFA55A;
  }
}
.next_yellow_icon {
  color: #CFA55A;
  font-size: 12px;
}
</style>
