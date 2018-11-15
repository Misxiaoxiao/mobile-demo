<template>
  <div class="room_locate_wrap">
    <h4 class="room_locate_title">
      <span class="room_locate_left">
        <i class="iconfont">&#xe680;</i>{{detailInfo.localization}}
      </span>
      <span class="room_locate_right">
        <i class="iconfont">&#xe601;</i>
      </span>
    </h4>
    <p>
      <span
      v-for="(item, index) in detailInfo.subways"
      :key="index"
      >{{item.format}}</span>
    </p>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class RoomLocation extends Vue {
  @Prop({default: {}}) private detailInfo!: any;
}
</script>

<style lang="less">
.room_locate_wrap {
  padding: 15px 15px 0 15px;
  color: #333;
  .room_locate_title {
    > span.room_locate_left {
      > i {
        font-size: 12px;
        margin-right: 5px;
      }
      font-size: 15px;
      line-height: 18px;
    }
    > span.room_locate_right {
      float: right;
      color: #CCCCCC;
      > i {
        font-size: 14px;
      }
    }
  }
  > p {
    margin-top: 15px;
    > span {
      line-height: 15px;
      font-size: 12px;
      margin: 0 5px;
    }
    > span:first-child {
      margin-left: 0;
    }
  }
}
</style>
