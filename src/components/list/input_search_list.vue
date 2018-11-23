<template>
  <div class="search_input_list" v-show="isShow">
    <div
    class="search_input_list_item"
    v-for="(item, i) in list"
    :key="i"
    @click.stop="handleClick({
      longitude: item.location ? item.location.lat : -1,
      latitude: item.location ? item.location.lng : -1,
      region: item.name,
    })">
      <p>{{item.name}}</p>
      <span>{{item.address}}</span>
    </div>
    <div class="search_input_list_item" v-if="!querying && list.length === 0">
      <p>没有查到你输入的地址</p>
      <span>请检查</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component
export default class InputSearchList extends Vue {
  @Prop({default: false}) private isShow!: boolean;
  @Prop({default: false}) private querying!: boolean;
  @Prop({default: []}) private list!: any[];
  @Prop({default: {}}) private change!: any;
  @Prop({default: {}}) private requestCallback!: any;

  private handleClick(obj: any): void {
    this.change(obj.region);
    this.requestCallback();
  }
}
</script>

<style lang="less">
.search_input_list {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  overflow-y: scroll;
  -webkit-overflow-scrolling : touch;
  z-index: 2;
  .search_input_list_item {
    box-sizing: border-box;
    height: 60px;
    border-bottom: 1px solid #EBEBEB;
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #fff;
    > p {
      font-size: 14px;
      color: #333333;
    }
    > span {
      font-size: 12px;
      color: #999999;
    }
  }
}
</style>
