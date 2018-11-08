<template>
  <div class="post_room_wrap">
    <div class="post_room_btn">
      <i class="post_icon iconfont">&#xe649;</i>
      发布求租
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class PostRoom extends Vue {
}
</script>

<style lang="less">
.post_room_wrap {
  box-sizing: border-box;
  padding: 10px 15px;
  .post_room_btn {
    display: flex;
    height: 50px;
    border: 1px solid #66D4C3;
    justify-content: center;
    align-items: center;
    background-color: #F0FFFD;
    color: #66D4C3;
    font-size: 15px;
    border-radius: 2px;
    .post_icon {
      font-size: 26px;
      margin: 0 12px;
    }
  }
}
</style>
