<template>
  <div class="search">
    <div class="search_header_wrap">

      <search-city
      :changeCurrentCity="changeCurrentCity"
      />

      <search-tab />

      <search-room-input
      :showPopup="roomSearchByInput"
      :changePopup="changeRoomSearchInputPopup"
      :showInputSearchList="showInputSearchList"
      :changeShowSearchList="changeShowSearchList"
      :roomCondition="roomCondition"
      :changeRoomRegion="changeRoomRegion"
      :request="requestRoomCallback"
      />

      <search-demand-input
      :showPopup="demandSearchByInput"
      :changePopup="changeDemandSearchInputPopup"
      :showInputSearchList="showInputSearchList"
      :changeShowSearchList="changeShowSearchList"
      :demandCondition="demandCondition"
      :changeDemandRegion="changeDemandRegion"
      :request="requestDemandCallback"
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
      :request="requestRoomCallback"
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
      :request="requestDemandCallback"
      />

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import SearchCity from './search_city.vue';
import SearchTab from './search_tab.vue';
import SearchRoomInput from './search_room_input.vue';
import SearchDemandInput from './search_demand_input.vue';
import SearchRoom from './search_room.vue';
import SearchDemand from './search_demand.vue';
import { State, Action } from 'vuex-class';

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

  @State((state: any) => state.SearchModule.rent_sequence) private rentSequence!: string;
  @State((state: any) => state.SearchModule.demand_sequence) private demandSequence!: string;
  @State((state: any) => state.LocateModule.current_city) private currentCity!: string;

  @Action('setCurrentCity') private setCurrentCity!: any;
  @Action('setLocateCityAndAddress') private setLocateCityAndAddress!: any;
  @Action('getBedList') private getBedList: any;
  @Action('getDemandList') private getDemandList: any;
  @Action('getCityTraffic') private getCityTraffic!: any;

  @Watch('currentCity') private changeCity(): void {
    if (this.$route.name === 'room') {
      this.requestRoomCallback();
    } else if (this.$route.name === 'demand') {
      this.requestDemandCallback();
    }
    this.getCityTraffic({
      data: {
        city: this.currentCity,
      },
    });
  }

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
  // 改变当前城市
  private changeCurrentCity(city: string): void {
    // 改变城市
    this.setCurrentCity({
      data: {city},
    });
    // 清空其他搜索条件
    const roomCondition: any = {
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
    this.roomCondition = roomCondition;

    const demandCondition: any = {
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
    this.demandCondition = demandCondition;
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

  // 根据条件请求数据
  // 房源
  // 刷新
  // success 成功时候的回调
  // more defautl false
  //      type boolean
  //      des  是否加载更多
  private requestRoomCallback(success?: any, more?: boolean): void {
    more = more ? more : false;
    const sequence: string = more ? this.rentSequence : '';
    const data = {
      city: this.currentCity,
      cost1: this.roomCondition.other.money.min,
      cost2: this.roomCondition.other.money.max,
      has_short_rent: this.roomCondition.other.shortRent ? 1 : 0,
      has_video: this.roomCondition.hasVideo ? 1 : 0,
      region: this.roomCondition.region,
      sex: this.roomCondition.other.gender,
      type: (this.roomCondition.type).toString(),
      room_type_affirm: (this.roomCondition.other.type).toString(),
      sequence,
      longitude: this.roomCondition.location.lng === -1 ? '' : this.roomCondition.location.lng,
      latitude: this.roomCondition.location.lat === -1 ? '' : this.roomCondition.location.lat,
    };
    this.getBedList({
      data,
      success,
    });
  }
  // 求租
  private requestDemandCallback(success?: any, more?: boolean): void {
    more = more ? more : false;
    const sequence: string = more ? this.demandSequence : '';
    const data = {
      city: this.currentCity,
      sequence,
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

  private mounted(): void {
    this.getCityTraffic({
      data: {
        city: this.currentCity,
      },
    });
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
  background-color: #fff;
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
