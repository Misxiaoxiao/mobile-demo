<template>
  <div class="room_detail_info">

    <swiper>
      <div class="swiper_video_wrap" slot="video_wrap">
        <!-- <img src="" alt=""> -->
        <div v-if="detailInfo.hasVideo">有视频</div>
        <div v-else>无视频</div>
      </div>
      <div class="swiper_image_wrap" slot="image_wrap">
        <img :src="detailInfo.photo" alt="" >
      </div>
    </swiper>

    <room-title :detailInfo="detailInfo" />

    <room-location :detailInfo="detailInfo" />

  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import { DetailModel } from '@/vuex/modules/residence/residence.model';
import Swiper from '@/components/common/swiper.vue';
import RoomTitle from '@/components/detail/room_title.vue';
import RoomLocation from '@/components/detail/room_location.vue';

@Component({
  components: {
    Swiper,
    RoomTitle,
    RoomLocation,
  },
})
export default class RoomDetailInfo extends Vue {
  @Prop({default: {}}) private detailInfo!: any;
}
</script>

<style lang="less">
.room_detail_info {
  box-sizing: border-box;
  background-color: #fff;
}
.swiper_video_wrap {
  box-sizing: border-box;
  padding: 0 5px;
  height: 100%;
  > img {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
}
.swiper_image_wrap {
  box-sizing: border-box;
  padding: 0 5px;
  height: 100%;
  > img {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  // border: 1px solid #333;
}
</style>
