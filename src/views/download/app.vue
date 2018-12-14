<template>
  <p class="download-text">
    已安装zuber?
    <a :href="jumpUrl"
    class='' target='_blank'>
      点此打开应用
    </a>
  </p>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class DownloadApp extends Vue {
  private jumpUrl: string = '';
  private created(): void {
    this.jumpUrl = 'zuber://www.zuber.im';
  }
}
</script>

<style lang="less">
.download-text {
  font-size: 12px;
  text-align: center;
  > a {
    color: #66d4c3;
  }
}
</style>
