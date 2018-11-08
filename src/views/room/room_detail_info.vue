<template>
  <div class="room_detail_info">

    <swiper>
      <div class="video_wrap" slot="video_wrap">
        视频
      </div>
      <div class="image_wrap" slot="image_wrap">
        图片
      </div>
    </swiper>

    <room-title />

    <room-location />

  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
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
export default class RoomDetailInfo extends Vue {}
</script>

<style lang="less">
.room_detail_info {
  box-sizing: border-box;
  background-color: #fff;
}
.video_wrap {
  box-sizing: border-box;
  padding: 0 5px;
  height: 100%;
  border: 1px solid #333;
}
.image_wrap {
  box-sizing: border-box;
  padding: 0 5px;
  height: 100%;
  border: 1px solid #333;
}
</style>
