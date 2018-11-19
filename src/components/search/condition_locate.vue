<template>
  <div
  :class="bool || label !== '位置区域' ? 'condition-btn active' : 'condition-btn'"
  @click.stop="show(true)">
    <p class="text-ellipsis">
      {{label}}
      <i :class="'snajiao_icon' + (bool || label !== '位置区域' ? ' snajiao_icon_active' : '')"></i>
    </p>
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
    } else {
      this.label = '位置区域';
    }
  }
}
</script>

<style lang="less">
</style>
