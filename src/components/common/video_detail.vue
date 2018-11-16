<template>
  <div
  class="video_detail_wrap photo"
  v-if="hasVideo"
  :style="'background-image: url('+ video.screenshot +');'"
  @click.stop="clickVideo"
  >
    <i class="iconfont">&#xe602;</i>
    <span>{{refreshTime}}</span>
  </div>
  <div
  class="video_detail_wrap photo no_video"
  @click.stop="clickVideo"
  v-else>
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

  private clickVideo(): void {
    this.$dialog.alert({
      message: this.hasVideo ? '请在App中打开播放' : '请联系对方提供视频',
    });
  }
}
</script>

<style lang='less'>
.no_video {
  background-image: url('../../assets/Need_video@2x.png');
}
.video_detail_wrap {
  position: relative;
  width: 100%;
  height: 12rem;
  border-radius: 5px;
  overflow: hidden;
  > i {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    font-size: 40px;
    color: #fff;
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
