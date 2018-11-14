<template lang="html">
  <div class="my_swiper">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div
        class="swiper-slide"
        v-for="(n, i) in slotArr"
        :key="i">
          <slot :name="n" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

@Component
export default class MySwiper extends Vue {
  @Prop({default: []}) private slotArr!: any[];
  @Prop({default: 1.5}) private slidesPerView!: number;

  private mySwiper: any = null;
  private mounted(): void {
    this.mySwiper = new Swiper('.swiper-container', {
      slidesPerView : this.slidesPerView,
      slidesOffsetBefore : 15,
      slidesOffsetAfter : 15,
    });
  }
}
</script>

<style lang="less">
</style>
