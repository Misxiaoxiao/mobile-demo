<template>
  <div class="search_input" @click.stop="changePopup(true)" v-show="$route.name === 'room'">
    <i class="search_icon"></i>搜索
    <van-popup v-model="showPopup" position="right" class="input_popup_wrap">
      <div class="search_input_header_wrap">
        <div class="search_input_header">
          <div class="search_input_header_back" @click.stop="changePopup(false)" >×</div>
          <div class="search_input_header_title">位置区域</div>
          <div class="search_input_header_limit" @click.stop="cancleLimit">不限</div>
        </div>

        <room-input
        :show="changeShowSearchList"
        :changeVal="searchAddressByKeyword"
        />

      </div>
      <div class="search_input_content">

        <input-search-list
        :isShow="showInputSearchList"
        :list="addresses"
        :querying="querying"
        :change="regionCallback"
        :requestCallback="request"
        />

        <div class="search_input_content_div">
          <div class="currentPlace">
            <p>
              <i class="location_icon"></i>
              <span v-if="locateAddress.addressComponent">
                {{locateAddress.addressComponent.street}}{{locateAddress.addressComponent.streetNumber}}
              </span>
            </p>
            <i class="slocation_icon"></i>
          </div>

          <search-find-list
          v-if="regions && regions.length > 0"
          :label="'通过区域查找'"
          :list="regions"
          :current="roomCondition.region.region"
          :callback="regionCallback"
          />

          <search-find-list
          v-if="lines && lines.length > 0"
          :label="'通过地铁查找'"
          :list="lines"
          :current="roomCondition.region.subwayLine"
          :callback="lineCallback"
          />
        </div>

      </div>
    </van-popup>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import Popup from '@/components/common/popup.vue';
import RoomInput from '@/components/search/input.vue';
import SearchFindList from '@/components/search/find_list.vue';
import InputSearchList from '@/components/list/input_search_list.vue';

@Component({
  components: {
    Popup,
    RoomInput,
    SearchFindList,
    InputSearchList,
  },
})
export default class SearchRoomInput extends Vue {
  @Prop({default: ''}) private showPopup!: boolean;
  @Prop({default: {}}) private changePopup!: any;
  @Prop({default: false}) private showInputSearchList!: boolean;
  @Prop({default: {}}) private changeShowSearchList!: any;
  @Prop({default: {}}) private roomCondition!: any;
  @Prop({default: {}}) private changeRoomRegion!: any;
  @Prop({default: {}}) private request!: any;

  @State((state: any) => state.LocateModule.locate_address) private locateAddress!: string;
  @State((state: any) => state.LocateModule.current_city) private currentCity!: string;
  @State((state: any) => state.LocateModule.addresses) private addresses!: string;
  @State((state: any) => state.LocateModule.querying) private querying!: string;
  @State((state: any) => state.CommonModule.city_traffic) private cityTraffic!: any;

  @Action('searchAddressByKeyword') private searchAddressByKeyword!: any;

  get regions(): any[] {
    if (this.cityTraffic.region) {
      const regions: any[] = this.cityTraffic.region.map((n: any, i: number) => {
        return n.name;
      });
      return regions;
    }
    return [];
  }

  get lines(): any[] {
    const lines: string[] = this.cityTraffic.subway_line;
    return lines;
  }

  private cancleLimit(): void {
    this.changeRoomRegion({
      region: '',
      subwayLine: '',
    });
    this.changePopup(false);
    this.request();
  }
  private regionCallback(region: string): void {
    this.changeRoomRegion({region, subwayLine: ''});
    this.changePopup(false);
    this.request();
  }
  private lineCallback(subwayLine: string): void {
    this.changeRoomRegion({subwayLine, region: ''});
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
  z-index: 999;
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
      font-size: 35px;
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
    padding-bottom: 15px;
    overflow: hidden;
    > .search_input_content_div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      background: #fff;
      overflow-y: scroll;
      -webkit-overflow-scrolling : touch;
      z-index: 1;
      padding-bottom: 15px;
    }
    .currentPlace {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 15px;
      padding: 0 15px;
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
