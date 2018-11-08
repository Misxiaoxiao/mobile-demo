<template>
  <div :class="'condition_locate' + (bool || gender !== '' ? ' condition_locate_active' : '')" @click.stop="toggleClick">
    {{gender === '' ? '性别' : (gender === 'm' ? '限男生' : '限女生')}} <i :class="'snajiao_icon' + (bool || gender !== '' ? ' snajiao_icon_active' : '')"></i>
    <div class="condition_locate_wrap" v-show="bool">
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
.condition_locate {
  width: 25%;
  font-size: 12px;
  color: #333333;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.condition_locate_active {
  color: #66D4C3;
}
.snajiao_icon {
  width: 16px;
  height: 11px;
  background: url('../../assets/Filter_normall@2x.png') no-repeat center;
  background-size: 50%;
}
.snajiao_icon_active {
  background: url('../../assets/Filter_col@2x.png') no-repeat center;
  background-size: 50%;
}
</style>
