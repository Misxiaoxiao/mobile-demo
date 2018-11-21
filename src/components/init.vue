<template>
  <div></div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import Platform from '@/utils/platform';
import { SHARE_INFO } from '@/model/index';

@Component
export default class InitApp extends Vue {
  private ifWeixin: boolean = false;
  private deviceInfo: string = '';
  private shareInfo: any = SHARE_INFO;
  @State((state: any) => state.AuthModule.ifLogged) private ifLogged!: boolean;
  @Action('getUserAuth') private getUserAuth: any;
  @Action('getUserInfo') private getUserInfo: any;
  @Action('sendDeviceInfo') private sendDeviceInfo: any;
  @Action('getShareBonus') private getShareBonus: any;
  @Action('getGeoLocation') private getGeoLocation!: any;
  @Action('locateCurrentCity') private locateCurrentCity!: any;
  // @Action('configShareInfo') private configShareInfo: any;
  // @Action('getAppInfo') private getAppInfo: any;
  private created(): void {
    const platform = new Platform();
    this.ifWeixin = platform.checkWeixin();
    this.deviceInfo = platform.getDevice('mobile');
  }
  private mounted(): void {
    this.deal();
  }
  // 分享
  // private share(): void {
  //   if (this.$route.name !== 'room') {
  //     this.configShareInfo({
  //       info: this.shareInfo,
  //     });
  //   }
  // }
  // 重定向
  private redirect(replace?: any): void {
    if (!this.$route.name || this.$route.name === 'home') {
      this.$router.push({
        name: 'room',
        query: {
          share: this.$route.query.share,
          shareUid: this.$route.query.shareUid,
        },
      });
    } else {
      if (replace) {
        replace();
      }
    }
  }
  // 登录
  private login(): void {
    this.getUserAuth({
      data: this.$route.query,
      success: () => {
        this.init();
        this.redirect(() => {
          this.$router.replace({
            name: this.$route.name,
            params: this.$route.params,
            query: {
              share: this.$route.query.share,
              share_uid: this.$route.query.shareUid,
            },
          });
        });
      },
    });
  }
  private reward(): void {
    if (this.ifLogged && this.$route.query.share_uid) {
      this.getShareBonus({
        id: this.$route.query.shareUid,
      });
    }
  }
  private init(): void {
    if (this.ifLogged) {
      this.sendDeviceInfo({
        info: this.deviceInfo,
      });
      this.getUserInfo();
      // this.reward();
    }
  }
  private deal(): void {
    // this.share();
    // this.getAppInfo();
    if (this.$route.query.state || this.$route.query.source) {
      this.login();
    } else if (!this.ifLogged) {
      if (this.ifWeixin) {
        window.location.href = 'http://www.zuber.im/weixin?' + (this.ifWeixin ? 'm=1&' : '') + 'goto='
                               + encodeURIComponent(window.location.href.replace('http:', 'https:'));
      }
    } else {
      this.init();
      // 定位
      this.getGeoLocation();
      this.locateCurrentCity();
    }
    this.redirect();
  }
}
</script>

<style lang="less">
</style>
