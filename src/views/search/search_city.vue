<template>
  <div class="search_city" @click.stop="changePopup(true)">
    <i class="iconfont location_icon">&#xe680;</i>{{city.length > 4 ? (city.substring(-1, 3) + '...') : city}}
    <van-popup v-model="showPopup" position="right">
      <div class="popup_wrap_header">
        <i
        class="iconfont back"
        @click.stop="changePopup(false)"
        >&#xe603;</i>
        选择城市
      </div>
      <div class="popup_wrap_content">

        <locate-city
        :city="currentCity"
        :locating="locating"
        :change="changeCity"
        />

        <hot-city
        :currentCity="city"
        :change="changeCity"
        />

        <city-list
        :cityList="cityList"
        :change="changeCity"
        />
      </div>
    </van-popup>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import { CityListModel } from '@/vuex/modules/common/common.model';
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

  @Prop({default: ''}) private city!: string;
  @Prop({default: ''}) private changeCurrentCity!: any;

  @State((state: any) => state.LocateModule.current_city) private currentCity!: string;
  @State((state: any) => state.LocateModule.locate_address) private locateAddress!: string;
  @State((state: any) => state.LocateModule.locating) private locating!: string;
  @State((state: any) => state.CommonModule.cities) private cities!: any;

  @Action('getCityList') private getCityList!: any;

  get cityList(): any {
    const cityObj: any = {};
    for (const prop in this.cities) {
      if (prop !== '热门') {
        this.cities[prop].forEach((city: any) => {
          cityObj[city.group] ? cityObj[city.group].push(city.display)
                              : cityObj[city.group] = [city.display];
        });
      }
    }
    return cityObj;
  }

  private changePopup(bool: boolean): void {
    this.showPopup = bool;
  }
  private changeCity(city: string): void {
    this.changeCurrentCity(city);
    this.changePopup(false);
  }
  private mounted(): void {
    this.getCityList({
      data: {},
    });
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
    font-size: 12px;
    color: #66D4C3;
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
    position: absolute;
    left: 10px;
    font-size: 16px;
  }
}
</style>
