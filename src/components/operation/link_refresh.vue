<template>
  <div :class="linkClass" @click="clickRefresh">{{label}}
    <div class="mb" v-show="show" @click.stop="close">
      <div class="i_bg" v-if="platform === 'ios'"></div>
      <div class="a_bg" v-else></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import Platform from '@/utils/platform';

@Component
export default class LinkRefresh extends Vue {
  private show: boolean = false;
  private platform: string = '';

  @Prop({default: ''}) private label!: string;
  @Prop({default: ''}) private linkClass!: string;
  @Prop({default: false}) private isSelf!: boolean;

  @State((state: any) => state.AuthModule.ifLogged) private ifLogged!: boolean;
  @Action('refresh') private refresh: any;

  private created(): void {
    const platform = new Platform();
    this.platform = platform.checkPlatform();
  }

  private close(): void {
    this.show = false;
  }

  private clickRefresh(): void {
    if (this.ifLogged) {
      this.refresh({
        data: {
          is_self: this.isSelf,
          room_id: this.$route.query.id,
          invite_uid: this.$route.query.uid,
        },
        success: (res: any) => {
          this.setDialog(res);
        },
        fail: (e: any) => {
          this.$dialog.alert({
            message: e,
          });
        },
      });
    }
  }

// 330002 不能自己刷自己
// 330003 房源已出租
// 330004 房源已失效
// 330005 每天不能超过10个房源
// 330006 每个房源不能超过10次
// 330007 没视频的房源不能超过1次
// 330008 代刷成功

// 32601 需要户型
// 32602 需要视频
// 32603 积分不足
// 32604 刷新成功
  private setDialog(res: any): void {
    switch (res.code) {
      case 330002:
        this.$dialog.alert({
          confirmButtonText: '找好友代刷',
          message: res.msg,
        }).then(() => {
          // on confirm
          // window.location.reload();
          this.show = true;
        });
        break;
      case 330007:
        this.$dialog.alert({
          confirmButtonText: '帮忙转发',
          message: res.msg,
        }).then(() => {
          // on confirm
          // window.location.reload();
          this.show = true;
        });
        break;
      case 330006:
        this.$dialog.alert({
          confirmButtonText: '帮忙转发',
          message: res.msg,
        }).then(() => {
          // on confirm
          // window.location.reload();
          this.show = true;
        });
        break;
      case 32601:
        this.$dialog.alert({
          showConfirmButton: true,
          showCancelButton: true,
          confirmButtonText: '马上完善',
          cancelButtonText: '稍后完善',
          message: res.msg,
        }).then(() => {
          // on confirm
          window.location.href = window.location.origin + '/download';
        }).catch(() => {
          // on cancel
          // window.location.reload();
        });
        break;
      case 32602:
        this.$dialog.alert({
          showConfirmButton: true,
          showCancelButton: true,
          confirmButtonText: '去上传视频',
          cancelButtonText: '不上传',
          message: res.msg,
        }).then(() => {
          // on confirm
          window.location.href = window.location.origin + '/download';
        }).catch(() => {
          // on cancel
          // window.location.reload();
        });
        break;
      case 32603:
        this.$dialog.alert({
          showConfirmButton: true,
          showCancelButton: true,
          confirmButtonText: '找好友代刷',
          cancelButtonText: '赚取积分',
          message: res.msg,
        }).then(() => {
          // on confirm
          this.show = true;
        }).catch(() => {
          // on cancel
          window.location.href = window.location.origin + '/download';
        });
        break;
      default:
        this.$dialog.alert({
          confirmButtonText: '知道了',
          message: res.msg,
        }).then(() => {
          // on confirm
          if (res.code === 330008 || res.code === 32604) {
            window.location.reload();
          }
        });
        break;
    }
  }
}
</script>

<style lang="less" scoped>
.mb {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1000;
  top: 0;
  left: 0;
  padding: 0 26px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, .5);
  .a_bg {
    height: 150px;
    background: url('../../assets/android.png') no-repeat right center;
    background-size: 50%;
  }
  .i_bg {
    height: 150px;
    background: url('../../assets/ios.png') no-repeat right center;
    background-size: 50%;
  }
}
</style>
