<template>
  <div class="room_locate_wrap">
    <h4 class="room_locate_title">
      <span class="room_locate_left">
        <i></i>徐汇区凯旋路1480弄
      </span>
      <span class="room_locate_right">></span>
    </h4>
    <p>
      <span>3号线/4号线 延安西路附近</span>
      <span>3号线/4号线 延安西路附近</span>
    </p>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class RoomLocation extends Vue {}
</script>

<style lang="less">
.room_locate_wrap {
  padding: 15px;
  color: #333;
  .room_locate_title {
    > span.room_locate_left {
      > i {}
      font-size: 15px;
    }
    > span.room_locate_right {
      float: right;
      color: #CCCCCC;
    }
  }
  > p {
    > span {
      font-size: 12px;
      margin: 0 5px;
    }
    > span:first-child {
      margin-left: 0;
    }
  }
}
</style>
