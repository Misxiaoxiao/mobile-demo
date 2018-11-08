<template lang="html">
  <div class="my_swiper">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <slot name="video_wrap" />
        </div>
        <div class="swiper-slide">
          <slot name="image_wrap" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

@Component
export default class MySwiper extends Vue {
  private mySwiper: any = null;
  private mounted(): void {
    this.mySwiper = new Swiper('.swiper-container', {
      slidesPerView : 1.5,
      slidesOffsetBefore : 15,
      slidesOffsetAfter : 15,
    });
  }
}
</script>

<style lang="less">
.my_swiper {
  width: 100%;
}
.swiper-container {
  .swiper-wrapper {
    height: 190px;
    .swiper-slide {
      height: 100%;
    }
  }
}
</style>
