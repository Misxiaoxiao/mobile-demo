<template>
  <a @click='jump' :class="linkClass">
    {{linkContent}}
  </a>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Platform from '@/utils/platform';

@Component
export default class LinkApp extends Vue {
  private ifWeixin: boolean = false;
  private jumpUrl: string = '';

  @Prop({default: ''}) private linkClass!: any;
  @Prop({default: ''}) private linkContent!: any;

  private jump(): void {
    const that = this;
    if (this.ifWeixin) {
      this.$router.push({
        name: 'download',
        query: {
          jumpUrl: this.jumpUrl,
        },
      });
    } else {
      switch (this.$route.name) {
        case 'room':
          window.location.href = 'zuber://www.zuber.im';
          break;
        case 'demand':
          window.location.href = 'zuber://www.zuber.im';
          break;
        case 'bedDetail':
          if (this.$route.query.biz) {
            window.location.href = 'zuber://apartment' + this.$route.params.id;
          } else {
            window.location.href = 'zuber:/' + this.$route.path;
          }
        default :
          window.location.href = 'zuber:/' + this.$route.path;
          break;
      }
      setTimeout(() => {
        window.location.href = that.jumpUrl;
      }, 2000);
    }
  }

  private created(): void {
    const platform = new Platform();
    this.ifWeixin = platform.checkWeixin();
    this.jumpUrl = platform.parseUrl(this.$route.path);
  }
}
</script>
