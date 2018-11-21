<template lang="html">
  <div class="common_header_wrap">
    <div class="common_header_wrap_left">
      <i class="iconfont" @click.stop="goBack">&#xe603;</i>
    </div>
    <div class="common_header_wrap_title">
      {{label}}
    </div>
    <div class="common_header_wrap_right">
      <slot name="header_right" />
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class RoomDetailHeader extends Vue {
  @Prop({default: ''}) private label!: string;

  private goBack(): void {
    if (window.history.length <= 1) {
      this.$router.push({path: '/'});
    } else {
      this.$router.back();
    }
  }
}
</script>

<style lang="less">
.share_cion {
  color: #5B5B5B;
  font-size: 20px;
}
.common_header_wrap {
  box-sizing: border-box;
  width: 100%;
  padding: 12px 15px;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #EBEBEB;
  background-color: #fff;
}
.common_header_wrap_left {
  width: 20%;
}
.common_header_wrap_title {
  font-size: 18px;
  color: #333;
  font-weight: 500;
}
.common_header_wrap_right {
  width: 20%;
  color: #999999;
  display: flex;
  font-size: 16px;
  justify-content: space-between;
}
</style>
