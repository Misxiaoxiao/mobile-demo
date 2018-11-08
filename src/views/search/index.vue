<template>
  <div class="search">
    <div class="search_header_wrap">
      <search-city />
      <search-tab />

      <search-room-input
      :showPopup="roomSearchByInput"
      :changePopup="changeRoomSearchInputPopup"
      :showInputSearchList="showInputSearchList"
      :changeShowSearchList="changeShowSearchList"
      />

      <search-demand-input
      :showPopup="demandSearchByInput"
      :changePopup="changeDemandSearchInputPopup"
      :showInputSearchList="showInputSearchList"
      :changeShowSearchList="changeShowSearchList"
      />
    </div>
    <div class="search_content_wrap">

      <search-room
      :roomSearchByInput="roomSearchByInput"
      :changeRoomSearchInputPopup="changeRoomSearchInputPopup"
      :roomSearchByVideo="roomSearchByVideo"
      :changeRoomSearchByVideoPopup="changeRoomSearchByVideoPopup"
      :roomSearchByType="roomSearchByType"
      :changeRoomSearchByTypePopup="changeRoomSearchByTypePopup"
      :roomSearchByOther="roomSearchByOther"
      :changeRoomSearchByOtherPopup="changeRoomSearchByOtherPopup"
      :roomCondition="roomCondition"
      :changeRoomRegion="changeRoomRegion"
      :changeRoomHasVideo="changeRoomHasVideo"
      :changeRoomType="changeRoomType"
      :changeRoomOther="changeRoomOther"
      />

      <search-demand
      :demandSearchByInput="demandSearchByInput"
      :changeDemandSearchInputPopup="changeDemandSearchInputPopup"
      :demandSearchByGender="demandSearchByGender"
      :changeDemandSearchGenderPopup="changeDemandSearchGenderPopup"
      :demandSearchByMoney="demandSearchByMoney"
      :changeDemandSearchMoneyPopup="changeDemandSearchMoneyPopup"
      :demandCondition="demandCondition"
      :changeDemandRegion="changeDemandRegion"
      :changeDemandGender="changeDemandGender"
      :changeDemandMoney="changeDemandMoney"
      :changeDemandLocation="changeDemandLocation"
      />

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SearchCity from './search_city.vue';
import SearchTab from './search_tab.vue';
import SearchRoomInput from './search_room_input.vue';
import SearchDemandInput from './search_demand_input.vue';
import SearchRoom from './search_room.vue';
import SearchDemand from './search_demand.vue';
import { Action } from 'vuex-class';

@Component({
  components: {
    SearchCity,
    SearchTab,
    SearchRoomInput,
    SearchDemandInput,
    SearchRoom,
    SearchDemand,
  },
})
export default class SearchIndex extends Vue {
  private roomSearchByInput: boolean = false;
  private roomSearchByVideo: boolean = false;
  private roomSearchByType: boolean = false;
  private roomSearchByOther: boolean = false;

  private roomCondition: any = {
    region: '',
    hasVideo: false,
    type: '',
    location: {
      lat: -1,
      lng: -1,
    },
    other: {
      gender: '',
      shortRent: false,
      type: [],
      money: {
        min: 0,
        max: 0,
      },
    },
  };

  private demandSearchByInput: boolean = false;
  private demandSearchByGender: boolean = false;
  private demandSearchByMoney: boolean = false;

  private demandCondition: any = {
    region: '',
    gender: '',
    location: {
      lat: -1,
      lng: -1,
    },
    money: {
      min: 0,
      max: 0,
    },
  };

  private showInputSearchList: boolean = false;

  @Action('initState') private initState!: any;
  @Action('setLocateCityAndAddress') private setLocateCityAndAddress!: any;

  private changeRoomSearchInputPopup(bool: boolean): void {
    this.roomSearchByInput = bool;
    this.roomSearchByVideo = false;
    this.roomSearchByType = false;
    this.roomSearchByOther = false;
  }

  private changeRoomSearchByVideoPopup(bool: boolean): void {
    this.roomSearchByVideo = bool;
    this.roomSearchByInput = false;
    this.roomSearchByType = false;
    this.roomSearchByOther = false;
  }

  private changeRoomSearchByTypePopup(bool: boolean): void {
    this.roomSearchByType = bool;
    this.roomSearchByInput = false;
    this.roomSearchByVideo = false;
    this.roomSearchByOther = false;
  }

  private changeRoomSearchByOtherPopup(bool: boolean): void {
    this.roomSearchByOther = bool;
    this.roomSearchByInput = false;
    this.roomSearchByVideo = false;
    this.roomSearchByType = false;
  }

  private changeDemandSearchInputPopup(bool: boolean): void {
    this.demandSearchByInput = bool;
    this.demandSearchByGender = false;
    this.demandSearchByMoney = false;
  }

  private changeDemandSearchGenderPopup(bool: boolean): void {
    this.demandSearchByGender = bool;
    this.demandSearchByInput = false;
    this.demandSearchByMoney = false;
  }

  private changeDemandSearchMoneyPopup(bool: boolean): void {
    this.demandSearchByMoney = bool;
    this.demandSearchByInput = false;
    this.demandSearchByGender = false;
  }

  private changeShowSearchList(bool: boolean): void {
    this.showInputSearchList = bool;
  }

  // 改变房源房间选择条件
  // 区域
  private changeRoomRegion(val: string): void {
    this.roomCondition.region = val;
  }
  // 视频
  private changeRoomHasVideo(bool: boolean): void {
    this.roomCondition.hasVideo = bool;
  }
  // 类型
  private changeRoomType(val: string): void {
    this.roomCondition.type = val;
  }
  // 更多
  private changeRoomOther(obj: any): void {
    this.roomCondition.other = Object.assign({}, this.roomCondition.other, obj);
  }
  // 经纬
  private changeRoomLocation(obj: any): void {
    this.roomCondition.location = Object.assign({}, this.roomCondition.location, obj);
  }

  // 改变求租选择条件
  // 区域
  private changeDemandRegion(val: string): void {
    this.demandCondition.region = val;
  }
  // 性别
  private changeDemandGender(val: string): void {
    this.demandCondition.gender = val;
  }
  // 预算
  private changeDemandMoney(obj: any): void {
    this.demandCondition.money = Object.assign({}, this.demandCondition.money, obj);
  }
  // 经纬
  private changeDemandLocation(obj: any): void {
    this.demandCondition.location = Object.assign({}, this.demandCondition.location, obj);
  }
}
</script>

<style lang="less">
.search {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.search_header_wrap {
  z-index: 999;
  height: 16px;
  padding: 16px 15px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.search_content_wrap {
  position: relative;
  overflow: hidden;
  flex: 1;
  > div {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
