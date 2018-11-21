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
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component
export default class InputSearchList extends Vue {
  @Prop({default: false}) private isShow!: boolean;
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
  overflow-y: scroll;
  -webkit-overflow-scrolling : touch;
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
