<template lang="html">
  <div class="room_detail_header">
    <div class="room_detail_header_left">
      <i class="iconfont ">&#xe603;</i>
    </div>
    <div class="room_detail_header_title">
      {{headerTitle}}
    </div>
    <div class="room_detail_header_right">
      <span>举报</span>
      <span>
        <i class="iconfont share_cion">&#xe66e;</i>
      </span>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class RoomDetailHeader extends Vue {
  @Prop({default: ''}) private headerTitle!: string;
}
</script>

<style lang="less">
.share_cion {
  color: #5B5B5B;
  font-size: 20px;
}
.room_detail_header {
  box-sizing: border-box;
  width: 100%;
  padding: 12px 15px;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #EBEBEB;
}
.room_detail_header_left {
  width: 20%;
}
.room_detail_header_title {
  font-size: 18px;
  color: #333;
  font-weight: 500;
}
.room_detail_header_right {
  width: 20%;
  color: #999999;
  display: flex;
  font-size: 16px;
  justify-content: space-between;
}
</style>
