<template>
  <a :href="url" :class="linkClass">
    {{linkContent}}
  </a>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Platform from '@/utils/platform';

@Component
export default class LinkApp extends Vue {
  private url: string = '';
  private ifWeixin: boolean = false;
  private jumpUrl: string = '';
  private p: string = '';

  @Prop({default: ''}) private linkClass!: any;
  @Prop({default: ''}) private linkContent!: any;

  // location.href 和 a 链接存在问题
  private handle(): void {
    if (this.ifWeixin) { // 如果是微信 跳转页面
      if (this.p === 'ios') {
        this.url = window.location.origin + '/jump?jump_url=' + encodeURIComponent(this.$route.path);
      } else {
        this.url = window.location.origin + '/jump?jump_url=' + this.setUrl();
      }
    } else { // 如果不是 直接打开
      this.url = this.setUrl();
    }
  }

  private setUrl(): string {
    switch (this.$route.name) {
      case 'room':
        return 'zuber://www.zuber.im';
      case 'demand':
        return 'zuber://www.zuber.im';
      case 'bedDetail':
        if (this.$route.query.biz && this.$route.query.biz.toString() === 'true') {
          return 'zuber:/' + this.$route.path + '?biz=true';
        } else {
          return 'zuber:/' + this.$route.path;
        }
      default :
        return 'zuber:/' + this.$route.path;
    }
  }

  private created(): void {
    const platform = new Platform();
    this.ifWeixin = platform.checkWeixin();
    this.p = platform.checkPlatform();
    this.jumpUrl = platform.parseUrl(this.$route.path);
  }

  private mounted(): void {
    this.handle();
  }
}
</script>
