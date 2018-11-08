<template>
  <div class="search_city" @click.stop="changePopup(true)">
    <i class="location_icon"></i>{{currentCity}}
    <van-popup v-model="showPopup" position="right" :overlay="true">
      <div class="popup_wrap_header">
        <i class="back" @click.stop="changePopup(false)"></i>
        选择城市
      </div>
      <div class="popup_wrap_content">

        <locate-city
        :city="locateAddress"
        :locating="locating"
        :change="changeCrrentCity"
        />

        <hot-city
        :currentCity="currentCity"
        :change="changeCrrentCity"
        :requestCallback="requestRefreshCallback"
        />

        <!-- <city-list :cityList="cityList" :changeCurrentCity="changeCurrentCity" :searchRoom="requestRefreshCallback" /> -->
      </div>
    </van-popup>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import Popup from '@/components/common/popup.vue';
import LocateCity from '@/components/search/locate_city.vue';
import HotCity from '@/components/search/hot_city.vue';
import CityList from '@/components/search/city_list.vue';

@Component({
  components: {
    Popup,
    LocateCity,
    HotCity,
    CityList,
  },
})
export default class SearchCity extends Vue {
  private show: boolean = false;

  private showPopup: boolean = false;

  @State((state: any) => state.LocateModule.current_city) private currentCity!: string;
  @State((state: any) => state.LocateModule.locate_address) private locateAddress!: string;
  @State((state: any) => state.LocateModule.locating) private locating!: string;

  // @State((state: any) => state.searchByCity) private searchByCity!: boolean;
  // @State((state: any) => state.cityList) private cityList!: any;
  // @State((state: any) => state.locateCity) private locateCity!: string;

  @Action('getGeoLocation') private getGeoLocation!: any;
  @Action('setCurrentCity') private setCurrentCity!: any;

  // @Action('searchRoom') private searchRoom!: any;
  // @Action('changeRoomHasNextPage') private changeRoomHasNextPage!: any;
  // @Action('getCityList') private getCityList!: any;
  // @Action('locateCurrentCity') private locateCurrentCity!: any;
  // @Watch('searchByCity') private change(): void {
  //   this.show = this.searchByCity;
  // }
  private changePopup(bool: boolean): void {
    this.showPopup = bool;
  }
  private changeCrrentCity(city: string): void {
    this.setCurrentCity({
      data: {city},
    });
    this.changePopup(false);
  }
  private mounted(): void {
    // this.getGeoLocation();
    // this.locateCurrentCity();
  }
  private requestRefreshCallback(): void {
    // this.changeRoomHasNextPage(true);
    // this.searchRoom({
    //   isMore: false,
    // });
  }
}
</script>

<style lang="less">
.search_city {
  width: 70px;
  font-size: 14px;
  color: #666;
  display: flex;
  align-items: center;
  .location_icon {
    width: 14px;
    height: 12px;
    padding-right: 5px;
    background: url('../../assets/address@2x.png') no-repeat center;
    background-size: 50%;
  }
}
.van-popup {
  width: 100%;
  // padding: 20px;
  box-sizing: border-box;
  .van-tabs__content {
    height: 156px;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }
  .van-tab__pane:not(:first-child) {
    padding: 10px;
    line-height: 1.4;
    color: #666;
  }
  &--right {
    width: 100%;
    height: 100%;
  }
}
.popup_wrap_header {
  padding: 5px 15px;
  margin: 0;
  font-size: 18px;
  line-height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: #484848;
  i.back {
    width: 19px;
    height: 34px;
    position: absolute;
    left: 10px;
    background: url('../../assets/BackArrow@2x.png') no-repeat center;
    background-size: 50%;
  }
}
</style>
