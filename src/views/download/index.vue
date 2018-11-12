<template>
  <div class="download-app">
    <span class="weixin-hint" v-if="ifWeixin && platform !== 'ios'">
      点击右上角在浏览器中打开
    </span>
    <div class="mask" v-if="platform !== 'ios' && ifWeixin"></div>
    <div class="download-content">
      <div class="app-logo">
        <img src="../../assets/logo-primary.png" alt="" height="70">
      </div>
      <h4>zuber白领租房平台</h4>
      <p class="">真房源，省心租</p>
      <br>
      <div>
        <a href="" class="download-btn" target="_blank">
          <img src="../../assets/apple_icon.png" alt="" class="download-icon" height="28">
          &nbsp;
          下载最新iPhone版
        </a>
        <a href="" class="download-btn" target="_blank" v-if="platform === 'ios'">
          <img src="../../assets/android_icon.png" alt="" class="bownload-icon" height="28">
          &nbsp;
          下载最新Android版
        </a>
        <a href="" class="download-btn" target="_blank" v-else>
          <img src="../../assets/android_icon.png" alt="" class="download-icon" height="28">
          &nbsp;
          下载最新Android版
        </a>
      </div>
      <p class="download-p">
        同时支持个人/商家
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Platform from '@/utils/platform';
import { APP_URL } from '@/model/index';

@Component
export default class DownLoadIndex extends Vue {
  private ifWeixin: boolean = false;
  private platform: string = '';
  private downloadUrl: string = APP_URL;

  private created(): void {
    const platform = new Platform();
    this.ifWeixin = platform.checkWeixin();
    this.platform = platform.checkPlatform();
  }
}
</script>

<style lang="less">
.download-btn {
  box-sizing: border-box;
  background-color: #66D4C3;
  color: #fff !important;
  border-radius: 25px;
  display: block;
  margin: 15px auto;
  width: 70%;
  text-align: center;
  padding: 12px;
  border: 1px solid #66d4c3;
  > img {
    vertical-align: middle;
  }
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
  padding-top: 15px;
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
    margin-top: 100px;
    > h4 {
      text-align: center;
      font-size: 18px;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    > p {
      text-align: center;
      font-size: 14px;
    }
    .app-logo {
      margin-bottom: 15px;
      height: 70px;
      text-align: center;
    }
    .download-p {
      font-size: 12px;
      text-align: center;
    }
  }
}
</style>
