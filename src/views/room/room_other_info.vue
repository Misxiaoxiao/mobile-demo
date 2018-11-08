<template>
  <div class="room_other_info_wrap">
    <h4>其他单间情况</h4>
    <ul>
      <li class="room_other_item">
        <div class="room_other_item_left">
          <h5>单间·大主卧</h5>
          <p>朝南·20㎡·独卫·阳台·飘窗·立即入住</p>
        </div>
        <div class="room_other_item_right">
          <span>2500元/月</span><i></i>
        </div>
      </li>
      <li class="room_other_item">
        <div class="room_other_item_left">
          单间
        </div>
        <div class="room_other_item_right">
          室友未知
        </div>
      </li>
      <li class="room_other_item">
        <div class="room_other_item_left">
          单间
        </div>
        <div class="room_other_item_right">
          室友未知
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class RoomOtherInfo extends Vue {}
</script>

<style lang="less">
.room_other_info_wrap {
  color: #333333;
  margin-top: 10px;
  padding: 15px;
  background-color: #fff;
  > h4 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  li.room_other_item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 42px;
    border-bottom: 1px solid #EBEBEB;
    .room_other_item_left {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      font-size: 14px;
      > h5 {
        font-size: 14px;
        margin-bottom: 5px;
      }
      > p {
        font-size: 12px;
        color: #999999;
        margin-bottom: 10px;
      }
    }
    .room_other_item_right {
      color: #CCCCCC;
      font-size: 12px;
      > span {
        font-size: 14px;
        color: #FB686B;
      }
    }
  }
}
</style>
