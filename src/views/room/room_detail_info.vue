<template>
  <div class="room_detail_info" v-if="detailInfo !== ''">

    <swiper
    :slotArr="slotArr"
    >
      <div slot="video_wrap" class="swiper_item_wrap">
        <video-detail
        :hasVideo="detailInfo.hasVideo"
        :video="detailInfo.video"
        :refreshTime="detailInfo.refreshTime"
        />
      </div>
      <div slot="image_wrap" class="swiper_item_wrap">
        <image-detail
        :photos="detailInfo.photos"
        :photoSrc="detailInfo.photo"
        />
      </div>
    </swiper>

    <room-title :detailInfo="detailInfo" />

    <room-location :detailInfo="detailInfo" :gotoMap="gotoMap" />

  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';
import { DetailModel } from '@/vuex/modules/residence/residence.model';
import { ROOM_CONDITION_TYPE_ITEMS } from '@/model/index';
import Swiper from '@/components/common/swiper.vue';
import VideoDetail from '@/components/common/video_detail.vue';
import ImageDetail from '@/components/common/image_detail.vue';
import RoomTitle from '@/components/detail/room_title.vue';
import RoomLocation from '@/components/detail/room_location.vue';

@Component({
  components: {
    Swiper,
    RoomTitle,
    RoomLocation,
    VideoDetail,
    ImageDetail,
  },
})
export default class RoomDetailInfo extends Vue {
  private slotArr: any[] = ['video_wrap', 'image_wrap'];

  @State((state: any) => state.ResidenceModule.bed_detail) private bedDetail!: DetailModel;
  @State((state: any) => state.ResidenceModule.requesting) private requesting!: boolean;

  get detailInfo(): any {
    if (!this.requesting) {
      if ((this.$route.query.biz).toString() === 'true' ? true : false) {
        return {
          biz: true,
          photo: this.bedDetail.bed.photo.src, // 图片
          type: this.bedDetail.room.biz_attr.type,
          photos: this.bedDetail.bed.photos ? this.bedDetail.bed.photos : [],
          hasVideo: this.bedDetail.bed.has_video, // 视频
          video: this.bedDetail.bed.video ? this.bedDetail.bed.video : '',
          refreshTime: this.bedDetail.bed.refresh_time,
          roomTitle: `${this.setType(this.bedDetail.bed.type)}-${this.bedDetail.bed.title}`, // 房间标题
          money: this.bedDetail.bed.money, // 价格
          dateDetail: this.bedDetail.bed.dateDetail, // 入住时间
          sequareMeter: this.bedDetail.bed.square_meter, // 面积
          privateBathroom: this.bedDetail.bed.private_bathroom, // 独卫
          veranda: this.bedDetail.bed.veranda, // 阳台
          elevator: this.bedDetail.room.biz_attr.elevator, // 电梯
          window: this.bedDetail.bed.window, // 飘窗
          bedCount: this.bedDetail.room.biz_attr.bed_count
                    ? this.bedDetail.room.biz_attr.bed_count : 0, // 室
          hallCount: this.bedDetail.room.biz_attr.hall_count
                     ? this.bedDetail.room.biz_attr.hall_count : 0, // 厅
          kitchenCount: this.bedDetail.room.biz_attr.kitchen_count
                        ? this.bedDetail.room.biz_attr.kitchen_count : 0, // 厨
          bathroomCount: this.bedDetail.room.biz_attr.bathroom_count
                         ? this.bedDetail.room.biz_attr.bathroom_count : 0, // 卫
          bedSquareMeter: this.bedDetail.bed.square_meter, // 房间面积
          roomSquareMeter: this.bedDetail.room.biz_attr.square_meter, // 房源总面积
          floor: this.bedDetail.room.biz_attr.floor, // 楼层
          totalFloor: this.bedDetail.room.biz_attr.total_floor, // 总楼层
          orientation: this.bedDetail.bed.orientation, // 朝向
          roomTypeAffirm: this.bedDetail.room.room_type_affirm, // 类型
          localization: `${this.bedDetail.room.region}${this.bedDetail.room.road}`, // 位置
          subways: this.bedDetail.room.subways, // 地铁
        };
      } else {
        return {
          biz: false,
          photo: this.bedDetail.bed.photo.src, // 图片
          photos: this.bedDetail.bed.photos ? this.bedDetail.bed.photos : [],
          hasVideo: this.bedDetail.bed.has_video, // 视频
          video: this.bedDetail.bed.video ? this.bedDetail.bed.video : '',
          refreshTime: this.bedDetail.bed.refresh_time,
          roomTitle: `${this.setType(this.bedDetail.bed.type)}-${this.bedDetail.bed.title}`, // 房间标题
          money: this.bedDetail.bed.money, // 价格
          dateDetail: this.bedDetail.bed.dateDetail, // 入住时间
          bedCount: this.bedDetail.room.client_attr.bed_count
                    ? this.bedDetail.room.client_attr.bed_count : 0, // 室
          hallCount: this.bedDetail.room.client_attr.hall_count
                     ? this.bedDetail.room.client_attr.hall_count : 0, // 厅
          kitchenCount: this.bedDetail.room.client_attr.kitchen_count
                        ? this.bedDetail.room.client_attr.kitchen_count : 0, // 厨
          bathroomCount: this.bedDetail.room.client_attr.bathroom_count
                         ? this.bedDetail.room.client_attr.bathroom_count : 0, // 卫
          elevator: this.bedDetail.room.client_attr.elevator, // 电梯
          gender: this.bedDetail.bed.sex, // 性别
          personLimit: this.bedDetail.bed.person_limit, // 限制人数
          roomTypeAffirm: this.bedDetail.room.room_type_affirm, // 类型
          localization: `${this.bedDetail.room.region}${this.bedDetail.room.road}`, // 位置
          subways: this.bedDetail.room.subways, // 地铁
        };
      }
    }
    return '';
  }

  private setType(type: number): string {
    for (const n of ROOM_CONDITION_TYPE_ITEMS) {
      if (n.value === type) {
        return n.key;
      }
    }
    return '';
  }

  private gotoMap(): void {
    this.$router.push({
      name: 'map',
      query: {
        latitude: this.bedDetail.room ? this.bedDetail.room.latitude : -1,
        longitude: this.bedDetail.room ? this.bedDetail.room.longitude : -1,
      },
    });
  }
}
</script>

<style lang="less">
.room_detail_info {
  box-sizing: border-box;
  background-color: #fff;
  padding: 10px 0;
}
.swiper_item_wrap {
  box-sizing: border-box;
  padding: 0 5px;
  height: 190px;
  box-sizing: border-box;
}
.swiper-slide:first-child {
  .swiper_item_wrap {
    padding-left: 0;
  }
}
.swiper-slide:last-child {
  .swiper_item_wrap {
    padding-right: 0;
  }
}
</style>
