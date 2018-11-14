<template>
  <div class="image_wrap" :style="'background: url(' + src +') no-repeat center; background-size: 100%;'">
    <!-- <img :src="src" /> -->
    <div :class="hasVideo ? 'has_video_icon' : ''"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component
export default class MyImage extends Vue {
  @Prop({default: {}}) private src!: string;
  @Prop({default: {}}) private hasVideo!: boolean;
}
</script>

<style lang="less">
.image_wrap {
  position: relative;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
  > div {
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .has_video_icon {
    width: 30px;
    height: 30px;
    background: url('../../assets/Play@2x.png') no-repeat center;
    background-size: 50%;
  }
  .no_video_icon {
    width: 30px;
    height: 30px;
    background: url('../../assets/no_play@2x.png') no-repeat center;
    background-size: 50%;
  }
}
</style>
