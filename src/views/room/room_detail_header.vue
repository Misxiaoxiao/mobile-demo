<template lang="html">
  <div class="room_detail_header">
    <div class="room_detail_header_left"><</div>
    <div class="room_detail_header_title">
      {{headerTitle}}
    </div>
    <div class="room_detail_header_right">
      <span>举报</span>
      <span>分享</span>
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
