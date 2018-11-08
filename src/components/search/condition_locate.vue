<template>
  <div
  :class="'condition_locate' + (bool || label !== '位置区域' ? ' condition_locate_active' : '')"
  @click.stop="show(true)">
    {{label}}
    <i :class="'snajiao_icon' + (bool || label !== '位置区域' ? ' snajiao_icon_active' : '')"></i>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component
export default class RoomConditionLocate extends Vue {
  private label: string = '位置区域';
  @Prop({default: false}) private bool!: boolean;
  @Prop({default: {}}) private show!: any;
  @Prop({default: ''}) private region!: string;
  @Watch('region') private changeRegion() {
    if (this.region !== '') {
      this.label = this.region;
    }
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
