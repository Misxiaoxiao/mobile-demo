<template>
  <div :class="linkClass" @click="handleClick">{{label}}
    <div class="mb" v-show="show">
      <div class="i_bg" v-if="platform === 'ios'"></div>
      <div class="a_bg" v-else></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Platform from '@/utils/platform';

@Component
export default class LinkForward extends Vue {
  private show: boolean = false;
  private platform: string = '';

  @Prop({default: ''}) private label!: string;
  @Prop({default: ''}) private linkClass!: string;

  private created(): void {
    const platform = new Platform();
    this.platform = platform.checkPlatform();
  }

  private handleClick(): void {
    this.show = !this.show;
  }
}
</script>

<style lang="less" scoped>
.mb {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1000;
  top: 0;
  left: 0;
  padding: 0 26px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, .5);
  .a_bg {
    height: 150px;
    background: url('../../assets/android.png') no-repeat right center;
    background-size: 50%;
  }
  .i_bg {
    height: 150px;
    background: url('../../assets/ios.png') no-repeat right center;
    background-size: 50%;
  }
}
</style>
