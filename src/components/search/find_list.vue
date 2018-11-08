<template>
  <div class="find_list_wrap">
    <div class="find_list_label">{{label}}</div>
    <div class="find_list_content">
      <div :class="current === item ? 'active' : ''" v-for="(item, i) in list" :key="i" @click.stop="handleClick(item)">{{item}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component
export default class FindList extends Vue {
  @Prop({default: ''}) private label!: string;
  @Prop({default: []}) private list!: any;
  @Prop({default: {}}) private callback!: any;
  @Prop({default: {}}) private requestCallback!: any;
  @Prop({default: ''}) private current!: string;
  private handleClick(item: string): void {
    this.callback(item);
    this.requestCallback();
  }
}
</script>

<style lang="less">
.find_list_wrap {
  margin-top: 15px;
  border-top: 1px solid #EEEEEE;
  padding: 15px 15px 0;
  overflow: hidden;
  .find_list_label {
    font-size: 15px;
    color: #919191;
    line-height: 15px;
  }
  .find_list_content {
    div {
      width: 22.3%;
      line-height: 30px;
      text-align: center;
      font-size: 14px;
      color: #999999;
      border: 1px solid #CCCCCC;
      margin: 10px 1% 0;
      float: left;
      border-radius: 2px;
    }
    > div.active {
      background-color: #F0FFFD;
      border: 1px solid #66D4C3;
      color: #66D4C3;
    }
  }
}
</style>
