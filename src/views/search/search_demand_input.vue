<template>
  <div class="search_input" @click.stop="changePopup(true)" v-if="$route.name === 'demand'">
    <i class="search_icon"></i>搜索
    <van-popup v-model="showPopup" position="right" class="input_popup_wrap">
      <div class="search_input_header_wrap">
        <div class="search_input_header">
          <div class="search_input_header_back iconfont" @click.stop="changePopup(false)" >&#xe603;</div>
          <div class="search_input_header_title">选择位置</div>
          <div class="search_input_header_limit" @click.stop="cancleLimit">不限</div>
        </div>

        <demand-input
        ref="demandInput"
        :city="city"
        :show="changeShowSearchList"
        :changeVal="searchAddressByKeyword"
        />

      </div>
      <div class="search_input_content">

        <input-search-list
        :isShow="showInputSearchList"
        :list="addresses"
        :change="locateCallback"
        :querying="querying"
        :requestCallback="request"
        />

        <div class="search_input_content_div">
          <div class="currentPlace">
            <p>
              <i class="location_icon"></i>
              <span v-if="label !== ''" @click.stop="changeNear">
                {{label}}
              </span>
              <span v-else @click.stop="getGeoLocation">
                 开启附近定位
              </span>
            </p>
            <i class="slocation_icon"></i>
          </div>

          <search-find-list
          v-if="regions && regions.length > 0"
          :label="'通过区域查找'"
          :list="regions"
          :current="demandCondition.region"
          :callback="callback"
          />
        </div>

      </div>
    </van-popup>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import Popup from '@/components/common/popup.vue';
import DemandInput from '@/components/search/input.vue';
import SearchFindList from '@/components/search/find_list.vue';
import InputSearchList from '@/components/list/input_search_list.vue';

const str = '你当前不在所选城市，无法选择附近';

@Component({
  components: {
    Popup,
    DemandInput,
    SearchFindList,
    InputSearchList,
  },
})
export default class SearchDemandInput extends Vue {
  private isFirst: boolean = true;
  private label: string = '';

  @Prop({default: ''}) private city!: string;
  @Prop({default: ''}) private showPopup!: boolean;
  @Prop({default: {}}) private changePopup!: any;
  @Prop({default: false}) private showInputSearchList!: boolean;
  @Prop({default: {}}) private changeShowSearchList!: any;
  @Prop({default: {}}) private demandCondition!: any;
  @Prop({default: {}}) private changeDemandRegion!: any;
  @Prop({default: {}}) private changeDemandLocation!: any;
  @Prop({default: {}}) private request!: any;

  @State((state: any) => state.LocateModule.locate_address) private locateAddress!: any;
  @State((state: any) => state.LocateModule.current_city) private currentCity!: string;
  @State((state: any) => state.LocateModule.addresses) private addresses!: string;
  @State((state: any) => state.CommonModule.city_traffic) private cityTraffic!: any;
  @State((state: any) => state.LocateModule.querying) private querying!: string;

  @Action('searchAddressByKeyword') private searchAddressByKeyword!: any;
  @Action('getGeoLocation') private getGeoLocation!: any;

  @Watch('showPopup') private changeShowPopup(): void {
    if (this.showPopup && sessionStorage.getItem('locate') !== 'on') {
      this.getGeoLocation();
      sessionStorage.setItem('locate', 'on');
    }
  }

  @Watch('locateAddress') private changeAddress(): void {
    if (this.locateAddress.addressComponent) {
      if (this.locateAddress.addressComponent.province !== (this.city + '市')) {
        this.label = str;
      } else {
        this.label = `${this.locateAddress.addressComponent.street}${this.locateAddress.addressComponent.streetNumber}`;
      }
    } else {
      this.$dialog.alert({
        message: '定位失败，请重新开启定位',
      });
    }
  }

  @Watch('city') private changeCity(): void {
    if (this.locateAddress.addressComponent) {
      if (this.locateAddress.addressComponent.province !== (this.city + '市')) {
        this.label = str;
      } else {
        this.label = `${this.locateAddress.addressComponent.street}${this.locateAddress.addressComponent.streetNumber}`;
      }
    }
  }

  private changeNear(): void {
    if (this.label !== str) {
      this.changeDemandRegion('附近');
      this.changeDemandLocation({
        lat: this.locateAddress.position.lat,
        lng: this.locateAddress.position.lng,
      });
      this.changePopup(false);
      this.request();
    }
  }


  get regions(): any[] {
    if (this.cityTraffic.region) {
      const regions: any[] = this.cityTraffic.region.map((n: any, i: number) => {
        return n.name;
      });
      return regions;
    }
    return [];
  }

  private cancleLimit(): void {
    const refInput: any = this.$refs.demandInput;
    refInput.val = '';
    refInput.show(false);
    this.changeDemandLocation({
      lat: -1,
      lng: -1,
    });
    this.callback('');
  }

  private callback(region: string): void {
    this.changeDemandRegion(region);
    this.changeDemandLocation({
      lat: -1,
      lng: -1,
    });
    this.changePopup(false);
    this.request();
  }

  private locateCallback(obj: any): void {
    this.changeDemandRegion(obj.region);
    this.changeDemandLocation({
      lat: obj.latitude,
      lng: obj.longitude,
    });
    this.changePopup(false);
    this.request();
  }
}
</script>

<style lang="less">
.search_input {
  width: 70px;
  height: 30px;
  border-radius: 50px;
  background-color: #F3F4F5;
  display: flex;
  align-items: center;
  color: #ccc;
  .search_icon {
    width: 30px;
    height: 30px;
    background: url('../../assets/search@2x.png') no-repeat center;
    background-size: 50%;
  }
}
.input_popup_wrap {
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  z-index: 1;
  bottom: 0;
  left: 0;
  background-color: #fff;
  .search_input_header {
    padding: 12px 15px;
    border-bottom: 1px solid #E6E6E6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .search_input_header_back {
      width: 32px;
      height: 20px;
      font-size: 18px;
      line-height: 20px;
      color: #5B5B5B;
      cursor: pointer;
    }
    .search_input_header_title {
      font-size: 16px;
      color: #333333;
    }
    .search_input_header_limit {
      font-size: 14px;
      color: #66D4C3;
    }
  }
  .search_input_content {
    position: relative;
    flex: 1;
    box-sizing: border-box;
    > .search_input_content_div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #fff;
      overflow-y: scroll;
      -webkit-overflow-scrolling : touch;
      z-index: 1;
      padding-bottom: 15px;
      box-sizing: border-box;
    }
    .currentPlace {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 15px;
      padding: 10px 15px 0;
      p {
        font-size: 15px;
        line-height: 15px;
        color: #333333;
        display: flex;
        align-items: center;
        i.location_icon {
          width: 14px;
          height: 12px;
          padding-right: 5px;
          background: url('../../assets/address@2x.png') no-repeat center;
          background-size: 50%;
        }
      }
      .slocation_icon {
        width: 25px;
        height: 25px;
        padding-right: 5px;
        background: url('../../assets/locate@2x.png') no-repeat center;
        background-size: 50%;
      }
    }    
  }
}
</style>
