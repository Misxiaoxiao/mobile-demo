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

      <room-other-info />

      <room-description />

      <room-detail-comment />

    </div>
    <div v-else>加载中</div>

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

  // @Watch('bedDetail') changeBedDetail(): void {
  //   console.log(this.bedDetail);
  // }

  get headerTitle(): string {
    if (JSON.stringify(this.bedDetail) !== '{}') {
      return this.bedDetail.room.rent_type === 1 ? '整租房源' : '合租房源';
    }
    return '';
  }

  get detailInfo(): any {
    if (JSON.stringify(this.bedDetail) !== '{}') {
      return {
        biz: this.$route.query.biz,
        roomTitle: `${this.setRentType()}-${this.bedDetail.bed.title}`,
        money: this.bedDetail.bed.money, // 价格
        dateDetail: this.bedDetail.bed.dateDetail, // 入住时间
        sequareMeter: this.bedDetail.bed.square_meter, // 面积
        privateBathroom: this.bedDetail.bed.private_bathroom, // 独卫
        veranda: this.bedDetail.bed.veranda, // 阳台
        // elevator: this.bedDetail
      };
    }
    return {};
  }

  private setRentType(): string {
    for (const n of ROOM_CONDITION_TYPE_ITEMS) {
      if (n.value === this.bedDetail.bed.type) {
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
