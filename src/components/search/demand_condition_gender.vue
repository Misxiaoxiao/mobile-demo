<template>
  <div
  :class="bool || gender !== '' ? 'condition-btn active' : 'condition-btn'"
  @click.stop="toggleClick"
  >
    <p>
      {{gender === '' ? '性别' : (gender === 'm' ? '限男生' : '限女生')}}
      <i :class="'snajiao_icon' + (bool || gender !== '' ? ' snajiao_icon_active' : '')"></i>
    </p>
    <div class="condition-wrap" v-show="bool">
      <div :class="'row' + (gender === 'm' ? ' active' : '')" @click.stop="handleClick('m')">
        限男生
      </div>
      <div :class="'row' + (gender === 'f' ? ' active' : '')" @click.stop="handleClick('f')">
        限女生
      </div>
      <div class="row" @click.stop="handleClick('')">不限</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class DemandConditionSex extends Vue {
  @Prop({default: ''}) private gender!: string;
  @Prop({default: false}) private bool!: boolean;
  @Prop({default: {}}) private show!: any;
  @Prop({default: {}}) private change!: any;
  @Prop({default: {}}) private requestCallback!: any;
  private toggleClick(): void {
    if (this.bool) {
      this.show(false);
    } else {
      this.show(true);
    }
  }
  private handleClick(str: string): void {
    this.change(str);
    this.requestCallback();
    this.show(false);
  }
}
</script>

<style lang="less">
.condition-wrap {
  > .row {
    box-sizing: border-box;
    // padding: 15px;
    height: 50px;
    background-color: #fff;
    border-top: 1px solid #EEEEEE;
    font-size: 14px;
    color: #484848;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    i {
      font-size: 12px;
      font-style: normal;
      color: #CCCCCC;
    }
  }
  .active {
    color: #66D4C3;
  }
}
</style>
