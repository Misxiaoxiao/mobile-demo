<template>
  <div class="room_locate_wrap">
    <h4 class="room_locate_title">
      <span class="room_locate_left">
        <i></i>{{bedDetail.room.localization}}
      </span>
      <span class="room_locate_right">></span>
    </h4>
    <p>
      <span
      v-for="(item, index) in bedDetail.room.subways"
      :key="index">{{item.format}}</span>
    </p>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class RoomLocation extends Vue {
  @Prop({default: {}}) private bedDetail!: any;
}
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
