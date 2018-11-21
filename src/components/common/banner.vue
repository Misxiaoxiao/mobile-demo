<template>
  <div class="banner">
    <p>
      <i class="iconfont">&#xe658;</i>订阅房源，第一时间收到匹配推送
    </p>
    <i class="iconfont next_yellow_icon">&#xe601;</i>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CommonBanner extends Vue {}
</script>

<style lang="less">
.banner {
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  background-color: #FFF2BE;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #CFA55A;
  }
  .next_yellow_icon {
    color: #CFA55A;
    font-size: 12px;
  }
}
</style>
