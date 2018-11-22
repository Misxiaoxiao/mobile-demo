<template>
  <div class="room_detail_wrap">

    <!-- <room-detail-header /> -->

    <div class="room_detail_content">

      <loading v-if="loading" />

      <div v-else>
        
        <room-detail-info />

        <room-other-info />

        <room-description />

        <!-- <room-detail-comment /> -->

      </div>
    </div>

    <room-detail-footer />

  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import RoomDetailHeader from './room_detail_header.vue';
import RoomDetailInfo from './room_detail_info.vue';
import RoomOtherInfo from './room_other_info.vue';
import RoomDescription from './room_description.vue';
import RoomDetailFooter from './room_detail_footer.vue';
import RoomDetailComment from './room_detail_comment.vue';
import Loading from '@/components/common/loading.vue';

@Component({
  components: {
    RoomDetailHeader,
    RoomDetailInfo,
    RoomOtherInfo,
    RoomDescription,
    RoomDetailFooter,
    RoomDetailComment,
    Loading,
  },
})
export default class DetailIndex extends Vue {
  private loading: boolean = false;

  @Action('viewBedDetail') private viewBedDetail!: any;

  // 切换到其他房源重新加载数据
  @Watch('$route') private changeRoute(): void {
    this.getDetail();
  }

  private getDetail(): void {
    this.loading = true;
    this.viewBedDetail({
      data: {
        id: this.$route.params.id,
        biz: (this.$route.query.biz).toString() === 'true' ? true : false,
      },
      success: () => {
        this.loading = false;
      },
    });
  }

  private created(): void {
    this.getDetail();
  }
}
</script>

<style lang="less">
.room_detail_wrap {
  padding-bottom: 60px;
  .room_detail_content {
    flex: 1;
    overflow-y: scroll;
    background-color: #F3F4F5;
  }
}
</style>
