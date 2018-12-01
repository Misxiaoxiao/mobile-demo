<template>
  <div class="common-bar">
    <van-col :span="4" class="photo zuber-logo"></van-col>
    <van-col :span="10" class="download-text text-ellipsis">
      <span class="text primary small" style="font-size: 10px">
        用App，与房东直接联系
      </span>
    </van-col>

    <van-col :span="10" class="open-app-btn">

      <!-- <link-app :link-class="'open-app'" :link-content="'下载应用'" /> -->

      <!-- <router-link :to="{name: 'download', query: {jump_url: jumpUrl}}" class="open-app">
        下载应用
      </router-link> -->

      <span class="open-app" @click.stop="clickDownload">
        下载应用
      </span>

      <link-app :link-class="'open-app open-app-outline'" :link-content="'立即打开'" />
    </van-col>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import LinkApp from '@/components/operation/link_app.vue';
import Platform from '@/utils/platform';

@Component({
  components: {
    LinkApp,
  },
})
export default class CommonBar extends Vue {
  private ifWeixin: boolean = false;
  private jumpUrl = '';
  private platform: string = '';

  @State((state: any) => state.CommonModule.app) private app!: any;

  @Action('getApp') private getApp!: any;

  private clickDownload(): void {
    setTimeout(() => {
      if (this.platform === 'ios') {
        this.getApp({
          success: () => {
            window.location.href = this.app.ios.download_url;
          },
        });
      } else {
        this.$router.push({
          name: 'download',
          query: {
            jumpUrl: this.jumpUrl,
          },
        });
      }
    }, 1000);
  }

  private created(): void {
    const platform = new Platform();
    this.ifWeixin = platform.checkWeixin();
    this.platform = platform.checkPlatform();
  }
}
</script>

<style lang="less">
.common-bar {
  position: fixed;
  bottom: 0;
  background-color: #fff;
  font-size: 12px;
  color: #333;
  box-sizing: border-box;
  width: 100%;
  padding: 6px 15px;
  z-index: 99;
  overflow: hidden;
  height: 60px;
  border-top: 1px solid #EFEFEF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .zuber-logo {
    display: inline-block;
    width: 36px;
    height: 36px;
    border-radius: 4px;
    background-color: #fff;
    background-image: url('../../assets/logo-primary.png');
  }
  .download-text {
    text-align: center;
  }
  .open-app {
    line-height: 30px;
    display: inline-block;
    width: 45%;
    text-align: center;
    border: 1px solid #66D4C3;
    border-radius: 4px;
    background-color: #66D4C3;
    color: #fff;
    margin: 0 2px;
    &-outline {
      background-color: transparent;
      border-color: #ccc;
      color: #333;
    }
  }
}
</style>
