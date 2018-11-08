<template>
  <div class="room_detail_title">
    <h3>床位·共享一张床次卧非隔断朝北带飘窗</h3>
    <div class="room_detail_type_info">
      <span>3室1厅1厨1卫</span>
    </div>
    <div class="room_detail_type_price">
      <span>2500</span><i>元/月</i>·随时入住
    </div>
    <div class="room_detail_type_other">
      <span>朝南</span>
      <span class="active">长租公寓 > </span>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class RoomTitle extends Vue {}
</script>

<style lang="less">
.room_detail_title {
  border-bottom: 1px solid #EBEBEB;
  padding: 25px 15px 0;
  font-size: 14px;
  color: #333;
  > h3 {
    font-size: 21px;
    font-weight: 500;
  }
  .room_detail_type_info {
    margin-top: 5px;
    > span {
      margin: 0 5px;
    }
    > span:first-child {
      margin-left: 0;
    }
  }
  .room_detail_type_price {
    margin-top: 5px;
    > span {
      font-size: 18px;
      color: #FB686B;
    }
    > i {
      font-style: normal;
      color: #FB686B;
    }
  }
  .room_detail_type_other {
    margin: 10px 0 15px;
    > span {
      font-size: 12px;
      color: #AAAAAA;
      padding: 2px 4px;
      border: 1px solid #CCCCCC;
      border-radius: 2px;
      margin: 0 5px;
    }
    > span.active {
      background-color: #F0FFFD;
      color: #66D4C3;
      border: 1px solid #66D4C3;
    }
    > span:first-child {
      margin-left: 0;
    }
  }
}
</style>
