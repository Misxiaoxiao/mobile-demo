<template>
  <div class="company_wrap">
    
    <!-- <common-header /> -->

    <div class="company_detail_wrap" v-if="!requesting">
      <div class="company_detail_info">
        <company-img
        :info="companyDetail.company"
        >
          <div slot="companyDetail" class="text-s company_des">
            {{companyDetail.company.desc}}
          </div>
        </company-img>
      </div>

      <company-staffs />

      <div class="room_list_wrap">

        <company-tab
        :index="currentIndex"
        />

        <div
        class="van-cell"
        v-for="(item, i) in companyDetail.rooms"
        :key="i"
        >
          <room-list :room="item.room" />
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import CommonHeader from '@/components/common/header.vue';
import CompanyImg from '@/components/common/company_img.vue';
import CompanyStaffs from './company_staffs.vue';
import CompanyTab from './company_tab.vue';
import RoomList from '@/components/list/room.vue';

@Component({
  components: {
    CommonHeader,
    CompanyImg,
    CompanyStaffs,
    CompanyTab,
    RoomList,
  },
})
export default class CompanyIndex extends Vue {
  private loading: boolean = false;
  private currentIndex: number = 0; // 0 为再租房源 1 为评价与投诉

  @State((state: any) => state.UserModule.company_detail) private companyDetail!: any;
  @State((state: any) => state.UserModule.requesting) private requesting!: any;
  @Action('viewCompanyDetail') private viewCompanyDetail!: any;

  private getDetail(): void {
    this.loading = true;
    this.viewCompanyDetail({
      data: {
        id: this.$route.params.id,
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
.company_wrap {
  display: flex;
  height: 100%;
  flex-direction: column;
  .company_detail_wrap {
    flex: 1;
    width: 100%;
    overflow-y: scroll;
    -webkit-overflow-scrolling : touch;
    background-color: #F3F4F5;
    .company_detail_info {
      padding: 15px 15px 0;
      box-sizing: border-box;
      background-color: #fff;
      overflow: hidden;
      .company_des {
        margin: 10px 0;
      }
      .company_img {
        width: 60px;
        height: 60px;
        > img {
          width: 100%;
          height: 100%;
        }
      }
      .company_wrap_right {
        display: none;
      }
      .company_username {
        font-size: 21px;
      }
    }
    .room_list_wrap {
      margin-top: 10px;
      margin-bottom: 1px;
      overflow: hidden;
      background-color: #fff;
      > .search_tab {
        // justify-content: center;
        .tab_item {
          // width: 50%;
          line-height: 45px;
          font-size: 15px;
          text-align: center;
        }
        > .tab_line {
          // top: 35px;
          display: none;
        }
      }
    }
  }
}
</style>
