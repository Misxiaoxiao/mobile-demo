<template>
  <div class="room_detail_comment_wrap">
    <h4 class="room_detail_comment_t">
      <div class="room_detail_comment_t_l">
        <span>评价与投诉</span>
        (<span>4</span>)
        <i>?</i>
      </div>
      <div class="room_detail_comment_t_r">
        <span>我要评价</span>/<span>投诉</span>
      </div>
    </h4>

    <div class="room_detail_comment_c">
      <i>图标</i>
      <p>暂时没有评论与投诉</p>
      <p>你可以联系看房后再评价或投诉</p>
    </div>

  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class RoomDetailComment extends Vue {}
</script>

<style lang="less">
.room_detail_comment_wrap {
  background: #fff;
  margin-top: 10px;
  .room_detail_comment_t {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    line-height: 48px;
    .room_detail_comment_t_l {
      font-size: 18px;
      color: #333;
    }
    .room_detail_comment_t_r {
      font-size: 14px;
      color: #66d4c3;
      font-weight: 400;
    }
  }
  .room_detail_comment_c {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 35px 0 40px;
    > i {
      margin-bottom: 25px;
    }
    > p {
      font-size: 12px;
      color: #ccc;
      line-height: 25px;
      margin: 0;
    }
  }
}
</style>
