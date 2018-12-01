<template>
  <a :href="url" @click='jump' :class="linkClass">
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

  @Prop({default: ''}) private linkClass!: any;
  @Prop({default: ''}) private linkContent!: any;

  // location.href 和 a 链接存在问题
  private setUrl(): void {
     switch (this.$route.name) {
      case 'room':
        this.url = 'zuber://www.zuber.im';
        break;
      case 'demand':
        this.url = 'zuber://www.zuber.im';
        break;
      case 'bedDetail':
        if (this.$route.query.biz.toString() === 'true') {
          this.url = 'zuber:/' + this.$route.path + '?biz=true';
        } else {
          this.url = 'zuber:/' + this.$route.path;
        }
        break;
      default :
        this.url = 'zuber:/' + this.$route.path;
        break;
    }
  }

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
      setTimeout(() => {
        window.location.href = that.jumpUrl;
      }, 2000);
    }
  }

  private created(): void {
    const platform = new Platform();
    this.ifWeixin = platform.checkWeixin();
    this.jumpUrl = platform.parseUrl(this.$route.path);
    this.setUrl();
  }
}
</script>
