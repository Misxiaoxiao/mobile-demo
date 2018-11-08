<template>
  <div class="hot_city_wrap">
    <p>热门城市</p>
    <div class="hot_city">
      <div
      :class="'hot_city_item' + (currentCity === item ? ' hot_city_item_active' : '')"
      v-for="(item, i) in citys" :key="i"
      @click.stop="change(item)">
        {{item}}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { POPULAR_CITIES } from '@/model/index';

@Component
export default class HotCity extends Vue {
  private citys: string[] = POPULAR_CITIES;

  @Prop({default: ''}) private currentCity!: string;
  @Prop({default: {}}) private change!: any;
  @Prop({default: {}}) private requestCallback!: any;

  private handleClick(city: string): void {
    this.change(city);
    // this.searchRoom();
  }
}
</script>

<style lang="less">
.hot_city_wrap {
  background-color: #F4F4F4;
  p {
    line-height: 31px;
    font-size: 12px;
    padding: 0 15px;
  }
  .hot_city {
    padding: 10px 15px;
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .hot_city_item {
      width: 30%;
      line-height: 34px;
      border: 1px solid #D9D9D9;
      border-radius: 2px;
      text-align: center;
      color: #888888;
      margin: 5px 0;
      cursor: pointer;
    }
    .hot_city_item_active {
      background-color: #F0FFFD;
      border: 1px solid #66D4C3;
      color: #66D4C3;
    }
  }
}
</style>
