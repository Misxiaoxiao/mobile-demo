<template>
  <van-row class="room_detail_footer_wrap">
    <van-col :span="4" class="collect_btn">
      <i class="iconfont">&#xe68d;</i>
      收藏
    </van-col>
    <van-col :span="9" class="color_yellow">
      私信联系
    </van-col>
    <van-col :span="9" class="color_green">
      签协议/合同
      <p>该房源暂未开放</p>
    </van-col>
  </van-row>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class RoomDetailFooter extends Vue {}
</script>

<style lang="less">
.room_detail_footer_wrap {
  padding: 7px 15px 8px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #EFEFEF;
  .van-col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: #fff;
    height: 45px;
    border-radius: 3px;
    > p {
      font-size: 10px;
    }
  }
  .color_yellow {
    background-color: #FFC673;
  }
  .color_green {
    background-color: #66D4C3;
  }
  .collect_btn {
    color: #999999;
    font-size: 10px;
    > i {
      font-size: 20px;
    }
  }
}
</style>
