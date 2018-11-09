<template>
  <div class="room_detail_info">

    <swiper>
      <div class="swiper_video_wrap" slot="video_wrap" v-if="bedDetail.bed">
        <img :src="bedDetail.bed.video ? bedDetail.bed.video.screenshot : '12321'" alt="">
      </div>
      <div class="swiper_image_wrap" slot="image_wrap" v-if="bedDetail.bed">
        <img :src="bedDetail.bed.photo.src" alt="">
      </div>
    </swiper>

    <room-title :bedDetail="bedDetail" />

    <room-location :bedDetail="bedDetail" />

  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
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
  @State((state: any) => state.ResidenceModule.bed_detail) private bedDetail!: DetailModel;
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
