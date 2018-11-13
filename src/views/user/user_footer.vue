<template>
  <div class="user_footer_wrap">
    <div class="button-b1-active">关注</div>
    <div class="button-b2-warn">私信联系</div>
    <div class="button-b2-primary">评论/投诉</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class UserFooter extends Vue {}
</script>

<style lang="less">
.user_footer_wrap {
  position: fixed;
  width: 100%;
  height: 60px;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #EFEFEF;
  background-color: #fff;
  > div {
    width: 109px;
    height: 45px;
  }
}
</style>
