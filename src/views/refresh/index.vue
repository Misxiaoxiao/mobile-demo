<template>
  <div class="refresh_wrap" v-if="ifWeixin && substitudeDetail !== ''">

    <div v-if="ifLogged && substitudeDetail.room.uid === account.user.id" class="refresh_mine">
    <!-- <div v-if="true" class="refresh_mine"> -->

      <div class="mine_address">
        {{substitudeDetail.room.road}}{{substitudeDetail.room.street}}
      </div>

      <p>• 刷新房源可延长展示时间，并获优先展示，加速出租</p>
      <p>• 出租后请及时设为“已出租”，避免违规受罚</p>

      <link-refresh :label="'立即刷新'" :linkClass="'btn_one'" :isSelf="substitudeDetail.room.uid === account.user.id" />

      <p style="margin-top: 40px;">没空刷新？积分不够？可找好友帮你一键代刷！</p>
      <p>代刷的好友越多，房源推荐量和曝光量也越多，出租越快！</p>

      <router-link :to="{name: 'refreshRule'}">详细规则 ></router-link>

      <link-forward :label="'找好友代刷'" :linkClass="'btn_two'" />

    </div>

    <div v-else>
      <div class="person">
        <div class="person_img" :style="'background: url(' + substitudeDetail.invite_user.avatar.small + ') no-repeat center; background-size: cover;'"></div>
        <p>{{substitudeDetail.invite_user.username}} <span>找你帮忙刷新房源</span></p>
      </div>

      <div class="address">
        <span>急</span>
        <p>{{substitudeDetail.room.city + '市'}}{{substitudeDetail.room.road}}房源出租</p>
      </div>

      <link-refresh :label="'立即刷新'" :linkClass="'btn_two'" :isSelf="substitudeDetail.room.uid === account.user.id" />

      <p class="p1">层房源刷新后将获得zuber平台推荐和优先</p>

      <div class="forward_wrap">
        <p>转发并找你的好友来刷新，能更快地帮到</p>
        <link-forward :label="'帮忙转发'" :linkClass="'btn_one'" />
      </div>
    </div>

    <div class="refresh_list">
      <div class="refresh_list_title">
        <div class="left">刷新记录</div>
        <div class="right" v-if="ifLogged && substitudeDetail.room.uid === account.user.id">
          <span>{{substitudeDetail.total_count}}</span>次刷新，共<span>{{substitudeDetail.total_substitute_count}}</span>人代刷
        </div>
      </div>

      <p v-if="substitudeRefreshList.length === 0 && !requesting" class="nothing">暂无刷新纪录</p>

      <van-list
        v-else
        v-model="loading"
        :finished="finished"
        @load="onLoad"
      >
        <refresh-item v-for="(item, index) in substitudeRefreshList" :key="index" :detail="item" />
      </van-list>

    </div>
  </div>
  <div class="refresh_wrap" v-else-if="!ifWeixin">
    <div class="msg_img"></div>
    <span class="msg_text">请在微信客户端打开链接</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import Platform from '@/utils/platform';
import RefreshItem from '@/components/list/refresh.vue';
import LinkRefresh from '@/components/operation/link_refresh.vue';
import LinkForward from '@/components/operation/link_forward.vue';

@Component({
  components: {
    RefreshItem,
    LinkRefresh,
    LinkForward,
  },
})
export default class RefreshIndex extends Vue {
  private ifWeixin: boolean = false;
  private finished: boolean = false;
  private currentPage: number = 1;
  private totalPage: number = 0;

  @State((state: any) => state.SubstitudeModule.substitude_detail) private substitudeDetail!: any;
  @State((state: any) => state.SubstitudeModule.substitude_refresh_list) private substitudeRefreshList!: any;
  @State((state: any) => state.SubstitudeModule.requesting) private requesting!: any;
  @State((state: any) => state.AuthModule.ifLogged) private ifLogged!: boolean;
  @State((state: any) => state.AccountModule.account) private account!: any;

  @Action('getSubstitudeDetail') private getSubstitudeDetail: any;
  @Action('configShareInfo') private configShareInfo: any;

  private created(): void {
    const platform = new Platform();
    this.ifWeixin = platform.checkWeixin();
  }

  private mounted(): void {
    if (this.ifWeixin) {
    // if (true) {
      this.request();
    }
  }

  set loading(a: any) {
    // body
  }

  get loading() {
    return this.requesting;
  }

  private request(): void {
    const obj: any = {
      // room_id: '0ce43af4ac684ab0b63e1c61',
      room_id: this.$route.query.id,
      invite_uid: this.$route.query.uid ? this.$route.query.uid : '',
      page: this.currentPage,
    };

    this.getSubstitudeDetail({
      data: obj,
      success: () => {
        if (document.title === '') {
          document.title = (this.substitudeDetail.room.uid === this.account.user.id) ? '刷新房源' : 'zuber租房-代刷房源';
        }
        if (this.currentPage === this.substitudeDetail.total_page) {
          this.finished = true;
        }
        this.currentPage++;
        if (this.totalPage === 0) {
          this.totalPage = this.substitudeDetail.total_page;
        }
        this.configShareInfo({
          info: {
            title: '帮我一键刷新下这个房源，急着出租',
            link: `${window.location.origin}/refresh?id=${this.$route.query.id}&uid=${this.account.user.id}`,
            desc: `${this.substitudeDetail.room.city}市${this.substitudeDetail.room.road}房源出租`,
            imgUrl: this.substitudeDetail.invite_user.avatar.small,
          },
        });
      },
      fail: () => {}
    });
  }

  private onLoad(): void {
    if (this.currentPage !== 0 && !this.requesting) {
      this.request();
    }
  }
}
</script>

<style lang="less" scoped>
.refresh_wrap {
  padding: 15px;
  background-color: #fff;
  .p1 {
    color: #999999;
    font-size: 12px;
    text-align: center;
  }
  .person {
    display: flex;
    align-items: center;
    > p {
      margin-left: 5px;
      font-size: 14px;
      color: #000;
      > span {
        color: #333;
        font-size: 12px;
      }
    }
    .person_img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
  .address {
    margin-top: 10px;
    padding: 15px 10px;
    box-sizing: border-box;
    background-color: #F3F4F5;
    display: flex;
    font-size: 14px;
    color: #333;
    font-weight:500;
    > span {
      margin-right: 4px;
      display: inline-block;
      width: 18px;
      height: 18px;
      text-align: center;
      line-height: 18px;
      font-size: 13px;
      border-radius: 50%;
      border: 1px solid #FF261D;
      color: #FF261D;
    }
  }
  .forward_wrap {
    margin-top: 30px;
    width: 100%;
    height: 122px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #F3F4F5;
    font-size: 14px;
    color: #333;
    text-align: center;
  }
  .mine_address {
    height: 40px;
    line-height: 40px;
    background-color: #F3F4F5;
    padding: 0 15px;
    box-sizing: border-box;
    font-size: 15px;
    color: #333;
    margin-bottom: 20px;
  }
  .refresh_mine {
    > p {
      font-size: 14px;
      color: #333;
      line-height: 20px;
      margin-top: 5px;
    }
    > a {
      color: #66D4C3;
      font-size: 14px;
      margin-top: 5px;
    }
  }
  .refresh_list {
    margin-top: 20px;
    border-top: 1px solid #EBEBEB;
    .refresh_list_title {
      font-size: 14px;
      padding-top: 30px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;
      > .left {
        border-left: 3px solid #66D4C3;
        color: #333;
        height: 15px;
        line-height: 15px;
        padding-left: 3px;
        font-weight:500;
      }
      > .right {
        font-size: 12px;
        color: #999;
        > span {
          color: #333;
          font-weight: 500;
        }
      }
    }
  }
  .msg_img {
    width: 90px;
    height: 90px;
    position: absolute;
    top: 20%;
    right: 0;
    left: 0;
    margin: auto;
    background: url('../../assets/fenzu@2x.png') no-repeat center;
    background-size: 100%;
  }
  .msg_text {
    position: absolute;
    top: 37%;
    right: 0;
    left: 0;
    margin: auto;
    text-align: center;
    font-size: 16px;
    color: #333;
  }
  .nothing {
    font-size: 14px;
    color: #ccc;
    margin-top: 50px;
    text-align: center;
  }
}
.btn_one {
  margin: 20px auto 10px;
  width: 198px;
  height: 38px;
  line-height: 38px;
  border-radius: 20px;
  color: #66D4C3;
  background-color: #ECF7F5;
  border: 1px solid #66D4C3;
  font-size: 16px;
  text-align: center;
}
.btn_two {
  margin: 20px auto 10px;
  width: 200px;
  height: 40px;
  line-height: 40px;
  border-radius: 20px;
  color: #fff;
  background-color: #66D4C3;
  font-size: 16px;
  text-align: center;
}
</style>
