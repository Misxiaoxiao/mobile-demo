<template>
  <div class="user_wrap">
    <div class="user_detail_wrap" v-if="!requesting">
      <div class="user_detail_info">
        <person-img
        :info="this.userDetail.user"
        >
          <div slot="userDetail" class="user_detail_slot" v-if="user !== ''">
            {{user}}
          </div>
        </person-img>
        <div class="user_info_des" v-if="!isDemand">
          求租中：预算5000元·11月10日入住
        </div>
      </div>

      <div class="room_list_wrap">

        <user-tab
        :index="currentIndex"
        />

        <div
        class="van-cell"
        v-for="(item, i) in userDetail.rooms"
        :key="i">
          <room-list :room="item.room" />
        </div>
      </div>
    </div>
    <common-bar />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import CommonHeader from '@/components/common/header.vue';
// import UserFooter from './user_footer.vue';
import PersonImg from '@/components/common/person_img.vue';
import UserTab from './user_tab.vue';
import RoomList from '@/components/list/room.vue';
import CommonBar from '@/components/common/bar.vue';

@Component({
  components: {
    CommonHeader,
    CommonBar,
    PersonImg,
    UserTab,
    RoomList,
  },
})
export default class UserIndex extends Vue {
  private loading: boolean = false;
  private currentIndex: number = 0; // 0 为再租房源 1 为评价与投诉

  @State((state: any) => state.UserModule.user_detail) private userDetail!: any;
  @State((state: any) => state.UserModule.requesting) private requesting!: any;
  @Action('viewUserDetail') private viewUserDetail!: any;

  get user(): string {
    const bornCity = this.userDetail.user.client_attr.born_city
                     ? '来自于' + this.userDetail.user.client_attr.born_city : '';
    const college = this.userDetail.user.client_attr.college
                    ? '，毕业于' + this.userDetail.user.client_attr.college : '';
    return bornCity + college;
  }

  get isDemand(): boolean {
    return (this.userDetail.demand).toString() === '{}';
  }

  private getDetail(): void {
    this.loading = true;
    this.viewUserDetail({
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
.user_header_right {
  width: 100%;
  text-align: right;
  font-size: 18px;
}
.user_wrap {
  display: flex;
  height: 101%;
  flex-direction: column;
  .user_detail_wrap {
    flex: 1;
    overflow-y: scroll;
    -webkit-overflow-scrolling : touch;
    background-color: #F3F4F5;
    margin-bottom: 60px;
    .user_detail_info {
      padding: 15px 15px 0;
      box-sizing: border-box;
      background-color: #fff;
      .user_detail_slot {
        font-size: 14px;
        color: #999;
        margin: 3px 0;
      }
      .person_img_wrap {
        width: 60px;
        height: 60px;
        > img {
          width: 100%;
          height: 100%;
        }
      }
      .user_info_des {
        line-height: 40px;
        margin-left: 76px;
        border-top: 1px solid #EBEBEB;
        font-size: 14px;
        color: #666;
      }
    }
    .room_list_wrap {
      margin-top: 5px;
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
