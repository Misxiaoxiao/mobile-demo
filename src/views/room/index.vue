<template>
  <div class="room_detail_wrap">

    <room-detail-header />

    <div class="room_detail_content">

      <room-detail-info />

      <room-other-info />

      <room-description />

      <!-- <room-detail-comment /> -->

    </div>

    <room-detail-footer />

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';
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
  @Action('viewBedDetail') private viewBedDetail!: any;

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
