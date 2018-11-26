<template>
  <div class="common-bar">
    <van-col :span="4" class="photo zuber-logo"></van-col>
    <van-col :span="10" class="download-text text-ellipsis">
      <span class="text primary small" style="font-size: 10px">
        用App，与房东直接联系
      </span>
    </van-col>

    <van-col :span="10" class="open-app-btn">
      <router-link :to="{name: 'download', query: {jump_url: jumpUrl}}" class="open-app">
        下载应用
      </router-link>

      <link-app :link-class="'open-app open-app-outline'" :link-content="'立即打开'" />
    </van-col>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LinkApp from '@/components/operation/link_app.vue';

@Component({
  components: {
    LinkApp,
  },
})
export default class CommonBar extends Vue {
  private jumpUrl = '';
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
