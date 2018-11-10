<template>
  <div class="room_detail_wrap">

    <room-detail-header
    :headerTitle="headerTitle"
    />

    <!-- <div class="room_detail_content"> -->
    <div class="room_detail_content" v-if="JSON.stringify(bedDetail) !== '{}'">

      <room-detail-info
      :detailInfo="detailInfo"
      />

      <room-other-info
      :otherInfo="otherInfo"
      />

      <room-description
      :description="roomDescription"
      />

      <!-- <room-detail-comment /> -->

    </div>
    <!-- <div v-else>加载中</div> -->

    <room-detail-footer />

  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import { ROOM_CONDITION_TYPE_ITEMS } from '@/model/index';
import { DetailModel } from '@/vuex/modules/residence/residence.model';
import RoomDetailHeader from './room_detail_header.vue';
import RoomDetailInfo from './room_detail_info.vue';
import RoomOtherInfo from './room_other_info.vue';
import RoomDescription from './room_description.vue';
import RoomDetailFooter from './room_detail_footer.vue';
import RoomDetailComment from './room_detail_comment.vue';

@Component({
  components: {
    RoomDetailHeader,
    RoomDetailInfo,
    RoomOtherInfo,
    RoomDescription,
    RoomDetailFooter,
    RoomDetailComment,
  },
})
export default class DetailIndex extends Vue {

  @State((state: any) => state.ResidenceModule.bed_detail) private bedDetail!: DetailModel;

  @Action('viewBedDetail') private viewBedDetail!: any;

  get headerTitle(): string {
    if (JSON.stringify(this.bedDetail) !== '{}') {
      return this.bedDetail.room.rent_type === 1 ? '整租房源' : '合租房源';
    }
    return '';
  }

  get detailInfo(): any {
    if (JSON.stringify(this.bedDetail) !== '{}') {
      if (this.$route.query.biz) {
        return {
          biz: this.$route.query.biz,
          photo: this.bedDetail.bed.photo.src, // 图片
          hasVideo: this.bedDetail.bed.has_video, // 视频
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
          biz: this.$route.query.biz,
          photo: this.bedDetail.bed.photo.src, // 图片
          hasVideo: this.bedDetail.bed.has_video, // 视频
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
    return {};
  }

  get otherInfo(): any[] {
    // c端
    return this.bedDetail.other_beds.map((n: any) => {
      return {
        state: n.state,
        type: this.setType(n.type),
        title: n.title,
        money: n.money,
        sex: n.sex ? n.sex : '',
        orientation: n.orientation ? n.orientation : '',
        squareMeter: n.square_meter ? n.square_meter : 0,
        privateBathroom: n.private_bathroom ? n.private_bathroom : 0,
        veranda: n.veranda ? n.veranda : 0,
        window: n.window ? n.window : 0,
        dateDetail: n.dateDetail,
      };
    });
  }

  get roomDescription(): any {
    return {
      person: {},
      content: this.bedDetail.bed.content,
    };
  }

  private setType(type: number): string {
    for (const n of ROOM_CONDITION_TYPE_ITEMS) {
      if (n.value === type) {
        return n.key;
      }
    }
    return '';
  }

  private getDetail(): void {
    this.viewBedDetail({
      data: {
        id: this.$route.params.id,
        biz: this.$route.query.biz,
      },
    });
  }

  private mounted(): void {
    this.getDetail();
  }
}
</script>

<style lang="less">
.room_detail_wrap {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  .room_detail_content {
    flex: 1;
    overflow-y: scroll;
    background-color: #F3F4F5;
  }
}
</style>
