<template>
  <transition name="fade-left" class="room_wrap">
    <div v-show="$route.name === 'room'">
      <div class="condition_wrap">

        <room-condition-locate
        :bool="roomSearchByInput"
        :show="changeRoomSearchInputPopup"
        :region="region"
        />

        <room-condition-video
        :bool="roomSearchByVideo"
        :show="changeRoomSearchByVideoPopup"
        :hasVideo="roomCondition.hasVideo"
        :change="changeRoomHasVideo"
        :requestCallback="requestRoom"
        />

        <room-condition-type
        :bool="roomSearchByType"
        :show="changeRoomSearchByTypePopup"
        :type="roomCondition.type"
        :change="changeRoomType"
        :requestCallback="requestRoom"
        />

        <room-condition-other
        :bool="roomSearchByOther"
        :show="changeRoomSearchByOtherPopup"
        :other="roomCondition.other"
        :change="changeRoomOther"
        :requestCallback="requestRoom"
        />

      </div>

      <div class="list_wrap">
        <van-pull-refresh ref="scroll" v-model="refreshing" @refresh="onRefresh">

          <div class="list_nothing_wrap" v-if="rentList.length === 0 && !searching">
            <span>搜索不到相关信息</span>
          </div>

          <van-list
            v-else
            v-model="loading"
            :finished="finished"
            @load="onLoad"
          >
            
            <!-- <common-banner /> -->

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
import { RoomItem } from '@/vuex/modules/search/search.model';
import RoomConditionLocate from '@/components/search/condition_locate.vue';
import RoomConditionVideo from '@/components/search/room_condition_video.vue';
import RoomConditionType from '@/components/search/room_condition_type.vue';
import RoomConditionOther from '@/components/search/room_condition_other.vue';
import CommonBanner from '@/components/common/banner.vue';
import RoomList from '@/components/list/room.vue';
// import MyScroll from '@/components/common/my_scroll.vue';

@Component({
  components: {
    RoomConditionLocate,
    RoomConditionVideo,
    RoomConditionType,
    RoomConditionOther,
    CommonBanner,
    RoomList,
    // MyScroll,
  },
})
export default class SearchRoom extends Vue {
  private scroll: any = null;
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

  @Prop({default: {}}) private requestRoom!: any;

  @State((state: any) => state.LocateModule.current_city) private currentCity!: string;
  @State((state: any) => state.SearchModule.rent_list) private rentList!: RoomItem[];
  @State((state: any) => state.SearchModule.has_next_rent_page) private hasNextRentPage!: boolean;
  @State((state: any) => state.SearchModule.rent_searching) private searching!: boolean;

  @Action('getBedList') private getBedList: any;

  @Watch('$route') private changeRoute(): void {
    if (this.$route.name === 'room') {
      const top = sessionStorage.getItem('scrollTop') || 0;
      if (this.scroll) {
        setTimeout(() => {
          this.scroll.scrollTop = top;
        }, 50);
      }
    }
  }

  get finished(): boolean {
    return !this.hasNextRentPage || this.searching;
  }

  set loading(a: any) {
    // body
  }

  get loading() {
    if (this.refreshing) {
      return false;
    }
    return this.searching;
  }

  get region(): string {
    if (this.roomCondition.region.region !== '') {
      return this.roomCondition.region.region;
    } else if (this.roomCondition.region.subwayLine !== '') {
      return this.roomCondition.region.subwayLine;
    }
    return '';
  }

  private onLoad(): void {
    this.requestRoom(() => {
      // body
    }, true);
  }

  private onRefresh(): void {
    this.requestRoom(() => {
      this.refreshing = false;
    }, false);
  }

  private created(): void {
    this.scroll = document.querySelector('.van-pull-refresh');
    this.requestRoom(() => {
      // body
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
  background-color: #fff;
  > div {
    flex: 1;
  }
}
.list_wrap {
  width: 100%;
  height: 95%;
  padding-bottom: 60px;
  box-sizing: border-box;
  .van-pull-refresh {
    height: 100%;
    overflow-y: scroll;
    -webkit-overflow-scrolling : touch;
    .van-pull-refresh__track {
      height: 100%;
    }
  }
}
.list_nothing_wrap {
  width: 100%;
  height: 100%;
  font-size: 15px;
  color: #888888;
  background: url('../../../assets/WechatIMG2.png') center 80px no-repeat;
  background-size: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > span {
    margin-top: 90px;
  }
}
</style>
