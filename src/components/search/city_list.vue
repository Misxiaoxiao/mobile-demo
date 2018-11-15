<template>
  <div>
    <div class="city_list_wrap" v-for="(group, letter) in cityList" :key="letter">
      <p>{{letter}}</p>
      <div class="city_list">
        <div class="city_list_item" v-for="(city, i) in group" :key="i" @click.stop="handleClick(city)">
          {{city}}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component
export default class CityList extends Vue {
  @Prop({default: []}) private cityList!: any[];
  @Prop({default: {}}) private change!: any;
  private handleClick(item: string): void {
    this.change(item);
  }
}
</script>

<style lang="less">
.city_list_wrap {
  background-color: #F4F4F4;
  p {
    line-height: 31px;
    font-size: 12px;
    padding: 0 15px;
  }
  .city_list {
    background-color: #fff;
    .city_list_item {
      line-height: 48px;
      padding: 0 15px;
      border-bottom: 1px solid #EEEEEE;
      border-radius: 2px;
      color: #888888;
      cursor: pointer;
    }
  }
}
</style>
