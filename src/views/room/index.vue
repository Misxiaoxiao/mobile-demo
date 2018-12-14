<template>
  <!-- <div class="room_detail_wrap" v-if="true && !requesting"> -->
  <div class="room_detail_wrap" v-if="bedDetail.can_claim && !requesting">
    <common-bar :top="bedDetail.can_claim" />
    <div class="room_detail_content" :style="bedDetail.can_claim ? 'margin-top: 60px' : ''">
      <div>
        <room-detail-info />
        <room-other-info />
        <room-description :showPerson="bedDetail.can_claim" />
      </div>
    </div>
    <link-claim />
  </div>

  <div class="room_detail_wrap" v-else-if="!requesting">
    <div class="room_detail_content" :style="bedDetail.can_claim ? 'margin-top: 60px' : ''">
      <room-type />
      <div>
        <room-detail-info />
        <room-other-info />
        <room-description />
      </div>
    </div>
    <common-bar />
  </div>

  <loading v-else />
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import { ROOM_CONDITION_TYPE_ITEMS } from '@/model/index';
import Platform from '@/utils/platform';
import RoomDetailInfo from '@/components/detail/room_detail_info.vue';
import RoomOtherInfo from '@/components/detail/room_other_info.vue';
import RoomDescription from '@/components/detail/room_description.vue';
import RoomType from '@/components/detail/room_type.vue';
import Loading from '@/components/common/loading.vue';
import CommonBar from '@/components/common/bar.vue';
import LinkClaim from '@/components/operation/link_claim.vue';

@Component({
  components: {
    RoomDetailInfo,
    RoomOtherInfo,
    RoomDescription,
    RoomType,
    Loading,
    CommonBar,
    LinkClaim,
  },
})
export default class DetailIndex extends Vue {
  private loading: boolean = false;
  private ifWeixin: boolean = false;

  @Action('viewBedDetail') private viewBedDetail!: any;
  @Action('configShareInfo') private configShareInfo: any;

  @State((state: any) => state.ResidenceModule.bed_detail) private bedDetail!: any;
  @State((state: any) => state.ResidenceModule.requesting) private requesting!: any;

  // 切换到其他房源重新加载数据
  @Watch('$route') private changeRoute(): void {
    if (this.$route.name === 'bedDetail') {
      this.getBedDetail();
    }
  }
  // 获取房源详情
  private async getBedDetail() {
    return new Promise((resolve, reject) => {
      this.loading = true;
      this.viewBedDetail({
        data: {
          id: this.$route.params.id,
          biz: this.$route.query.biz ? (this.$route.query.biz.toString() === 'true' ? true : false) : false,
        },
        success: () => {
          this.loading = false;
          if (resolve) {
            resolve();
          }
        },
        fail: () => {
          if (window.history.length <= 1) {
            this.$router.push({path: '/'});
          } else {
            this.$router.back();
          }
          reject();
        },
      });
    });
  }
  private setType(type: number): string {
    for (const n of ROOM_CONDITION_TYPE_ITEMS) {
      if (n.value === type) {
        return n.key;
      }
    }
    return '';
  }
  // 房间分享
  private share(): void {
    const info: any = {
      title: `${this.bedDetail.room.localization}-${this.setType(this.bedDetail.bed.type)}-${this.bedDetail.bed.title} [zuber租房]`,
      link: window.location.href,
      desc: this.bedDetail.bed.content,
      imgUrl: this.bedDetail.bed.photo.small,
    };
    this.configShareInfo({
      info,
    });
  }

  private created(): void {
    this.getBedDetail()
      .then(() => {
        this.share();
      });
  }
}
</script>

<style lang="less">
.room_detail_wrap {
  padding-bottom: 60px;
  .room_detail_content {
    flex: 1;
    overflow-y: scroll;
    -webkit-overflow-scrolling : touch;
    background-color: #F3F4F5;
  }
}
</style>
