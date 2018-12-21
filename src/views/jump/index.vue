<template>
  <div
    class="open-bg"
    :style="{
      backgroundImage: platform === 'ios'
      ? 'url(http://resource.zuber.im/ios_guide.png)'
      : 'url(http://resource.zuber.im/android_guide.png)'
    }"
  ></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Platform from '@/utils/platform';

@Component
export default class JumpIndex extends Vue {
  private ifWeixin: boolean = false;
  private platform: string = '';

  private created(): void {
    const platform = new Platform();
    this.ifWeixin = platform.checkWeixin();
    this.platform = platform.checkPlatform();
  }
  private mounted(): void {
    const that = this;
    if (!this.ifWeixin) {
      if (this.platform === 'ios') {
        window.location.href = 'zuber:/' + this.$route.query.jump_url;
      } else {
        window.location.href = this.$route.query.jump_url;
      }
      setTimeout(() => {
        that.$router.push({
          name: 'download',
          query: {
            jumpUrl: that.$route.query.jump_url,
          },
        });
      }, 4000);
    }
  }
}
</script>

<style lang="less">
.open-bg {
  position: fixed;
  background-color: #fff;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-position: top 30px center;
  background-size: 80%;
  background-repeat: no-repeat;
}
</style>
