<template>
  <div class="room_description_wrap">
    <h4>房源描述</h4>
    <div class="person_wrap">

    </div>
    <div class="room_des_text_wrap">
      {{description.content}}
    </div>
    <div class="room_des_msg_info_wrap">
      <div class="msg_info">
        <div class="msg_info_left">
          <i class="iconfont">&#xe658;</i>
        </div>
        <div class="msg_info_right">
          由实名登记用户发布并承诺真实合法有效，接受所有用户监督和评价
        </div>
      </div>
      <div class="msg_info">
        <div class="msg_info_left">
          <i class="iconfont" style="font-size: 12px;">&#xe6c3;</i>
        </div>
        <div class="msg_info_right">
          温馨提示：异性合租需谨慎
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class RoomDescription extends Vue {
  @Prop({default: {}}) private description!: any;
}
</script>

<style lang='less'>
.room_description_wrap {
  color: #333;
  font-size: 14px;
  padding: 15px;
  background-color: #fff;
  margin-top: 10px;
  > h4 {
    font-size: 18px;
  }
  .person_wrap {
    height: 60px;
  }
  .room_des_text_wrap {
    padding: 10px 0 15px;
    border-bottom: 1px solid #EBEBEB;
  }
  .room_des_msg_info_wrap {
    > .msg_info {
      margin-top: 5px;
      overflow: hidden;
      display: flex;
      > .msg_info_left {
        width: 12px;
        height: 15px;
        margin-right: 4px;
        > i {
          color: #66D4C3;
          font-size: 14px;
        }
      }
      > .msg_info_right {
        color: #999999;
      }
    }
  }
}
</style>
