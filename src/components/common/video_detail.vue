<template>
  <div
  class="video_detail_wrap"
  v-if="hasVideo"
  :style="'background: url('+ video.screenshot +') no-repeat center; background-size: 100%;'"
  >
    <span>{{refreshTime}}</span>
  </div>
  <div class="video_detail_wrap no_video" v-else>
    <span>{{refreshTime}}</span>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class VideoDetail extends Vue {
  @Prop({default: false}) private hasVideo!: boolean;
  @Prop({default: {}}) private video!: any;
  @Prop({default: ''}) private refreshTime!: string;
}
</script>

<style lang='less'>
.no_video {
  background: url('../../assets/Need_video@2x.png') no-repeat center;
  background-size: 100%;
}
.video_detail_wrap {
  position: relative;
  width: 100%;
  height: 190px;
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
  }
}
</style>
