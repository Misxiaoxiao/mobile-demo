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
      window.location.href = 'zuber:/' + this.$route.path;
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
