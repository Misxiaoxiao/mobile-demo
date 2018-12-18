<template lang="html">
  <div class="my_slider" ref="slider">
    <div class="slider_wrap" :style="'width: ' + (itemWidth * slotArr.length + 5 * (slotArr.length + 1)) + 'px'">
      <div
      class="slider"
      v-for="(n, i) in slotArr"
      :key="i">
        <slot :name="n" />
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
import BScroll from 'better-scroll';

@Component
export default class MySwiper extends Vue {
  @Prop({default: []}) private slotArr!: any[];
  @Prop({default: 0}) private itemWidth!: number;

  private mySlider: any = null;
  private mounted(): void {
    this.mySlider = new BScroll(this.$refs.slider, {
      scrollX: true,
      scrollY: false,
      click: true,
    });
  }
}
</script>

<style lang="less">
.my_slider {
  width: 100%;
  overflow: hidden;
}
.slider_wrap {
  height: 100%;
  display: flex;
  justify-content: space-around;
  padding: 0 5px;
  box-sizing: border-box;
  // box-sizing: border-box;
  > div {
    height: 100%;
  }
}
</style>
