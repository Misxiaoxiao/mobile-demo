<template>
  <div class="image_detail_wrap"
  :style="'background: url('+ photoSrc +') no-repeat center; background-size: 100%;'">
    <!-- <img :src="photoSrc" alt=""> -->
    <span>
      <i class="iconfont">&#xe65a;</i>
      {{photos.length}}
    </span>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class ImageDetail extends Vue {
  @Prop({default: ''}) private photoSrc!: string;
  @Prop({default: {}}) private photos!: any;
}
</script>

<style lang='less'>
.image_detail_wrap {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  overflow: hidden;
  > img {
    width: 100%;
    height: 100%;
  }
  span {
    position: absolute;
    left: 15px;
    bottom: 15px;
    font-size: 11px;
    background-color: rgba(0, 0, 0, .5);
    color: #fff;
    padding: 2px 6px;
    border-radius: 10px;
    > i {
      font-size: 12px;
    }
  }
}
</style>
