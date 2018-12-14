<template>
  <div class="download-app">
    <span class="weixin-hint" v-if="ifWeixin">
      点击右上角，选择“在浏览器打开”
    </span>
    <div class="mask" v-if="ifWeixin"></div>

    <download-app v-if="!ifWeixin" />

    <div class="download-content">
      <div class="app-logo">
        <img src="../../assets/logo-primary.png" alt="" height="90">
      </div>
      <h4>个人真实房源</h4>
      <p class="">有视频&nbsp;&nbsp;&nbsp;&nbsp;无中介</p>
      <br>
      <br>
      <a :href="ifWeixin ? downloadUrl : url" class="download-btn">
        下载App
      </a>
      <p class="download-p">
        同时支持个人/商家
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import Platform from '@/utils/platform';
import { APP_URL } from '@/model/index';
import DownloadApp from './app.vue';

@Component({
  components: {
    DownloadApp,
  },
})
export default class DownLoadIndex extends Vue {
  private ifWeixin: boolean = false;
  private platform: string = '';
  private downloadUrl: string = APP_URL;
  private url: string = '';

  @State((state: any) => state.CommonModule.app) private app!: any;

  @Action('getApp') private getApp!: any;

  private created(): void {
    const platform = new Platform();
    this.ifWeixin = platform.checkWeixin();
    this.platform = platform.checkPlatform();
  }

  private mounted(): void {
    this.getApp({
      success: () => {
        if (this.platform === 'ios') {
          this.url = this.app.ios.download_url;
        } else {
          // this.url = (this.app.android.download_url).indexOf('apk') > 0 ? 'http://www.zuber.im/android/latest' : this.app.android.download_url;
          this.url = 'http://www.zuber.im/android/latest';
        }
      },
    });
  }
}
</script>

<style lang="less">
.download-btn {
  box-sizing: border-box;
  // background-color: #66D4C3;
  color: #666 !important;
  border-radius: 3px;
  display: block;
  margin: 15px auto;
  width: 35%;
  text-align: center;
  padding: 6px 20px;
  border: 1px solid #ccc;
  font-size: 14px;
}
.download-icon {
  position: relative;
  top: -2px;
}
.mask {
  background-color: #111;
  opacity: .5;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 1030;
}
.download-app {
  padding-top: 20%;
  .weixin-hint {
    padding: 10px;
    background: #66D4C3;
    position: fixed;
    right: 15px;
    top: 15px;
    color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    z-index: 1031;
    &:before {
      position: absolute;
      content: '';
      width: 0;
      height: 0;
      border: 8px solid;
      border-color: transparent transparent #66D4C3 transparent;
      right: 15px;
      top: -16px;
    }
  }
  .download-content {
    margin: 30px 0;
    > h4 {
      text-align: center;
      font-size: 18px;
      margin-top: 10px;
      margin-bottom: 10px;
      font-weight: 400;
    }
    > p {
      text-align: center;
      font-size: 14px;
    }
    .app-logo {
      margin-bottom: 15px;
      height: 90px;
      text-align: center;
    }
    .download-p {
      font-size: 12px;
      text-align: center;
    }
  }
}
</style>
