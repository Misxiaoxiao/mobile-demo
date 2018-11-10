<template>
  <div class="room_detail_title">
    <div v-if="detailInfo.biz">
      <h3>{{detailInfo.roomTitle}}</h3>
      <div class="room_detail_type_info">
        <span>{{roomTypeInfo}}</span>
      </div>
      <div class="room_detail_type_price">
        <span>{{detailInfo.money}}</span><i>元/月</i>·{{detailInfo.dateDetail}}
      </div>
      <div class="room_detail_type_other">
        <span>朝{{detailInfo.orientation}}</span>
        <span v-if="detailInfo.privateBathroom === 1">独卫</span>
        <span v-if="detailInfo.veranda === 1">阳台</span>
        <span v-if="detailInfo.window === 1">飘窗</span>
        <span class="active">{{detailInfo.roomTypeAffirm}} > </span>
      </div>
    </div>
    <div v-else>
      <h3>{{detailInfo.roomTitle}}</h3>
      <div class="room_detail_type_price">
        <span>{{detailInfo.money}}</span><i>元/月</i>·{{detailInfo.dateDetail}}
        <i class="right">{{roomTypeInfo}}</i>
      </div>
      <div class="room_detail_type_other">
        <span v-if="detailInfo.gender !== 0">{{detailInfo.gender === 1 ? '仅限男生' : '仅限女生'}}</span>
        <span v-if="detailInfo.personLimit !== 0">{{'限' + numChinese[detailInfo.personLimit - 1] + '人'}}</span>
        <span class="active">{{detailInfo.roomTypeAffirm}} <i class="iconfont">&#xe601;</i> </span>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class RoomTitle extends Vue {
  private numChinese: string[] = ['一', '二', '三', '四', '五', '六', '七', '八', '九'];
  @Prop({default: {}}) private detailInfo!: any;

  get roomTypeInfo(): string {
    // b端房源
    // n室n厅n厨n卫
    const roomCountDetail: string = (this.detailInfo.bedCount === 0 ? '' : `${this.detailInfo.bedCount}室`) +
                                    (this.detailInfo.hallCount === 0 ? '' : `${this.detailInfo.hallCount}厅`) +
                                    (this.detailInfo.kitchenCount === 0 ? '' : `${this.detailInfo.kitchenCount}厨`) +
                                    (this.detailInfo.bathroomCount === 0 ? '' : `${this.detailInfo.bathroomCount}卫`);
    // 面积
    const roomSquare: string = this.detailInfo.biz
                               ? ` | ${this.detailInfo.bedSquareMeter}/${this.detailInfo.roomSquareMeter}㎡ ` : '';
    // 楼层
    const roomFloor: string = this.detailInfo.biz
                              ? ` | ${this.detailInfo.floor}/${this.detailInfo.totalFloor}楼` : '';
    // 电梯
    const roomElevator: string = this.detailInfo.elevator === 1
                                 ? ' | 有电梯' : (this.detailInfo.elevator === 2 ? ' | 无电梯' : '');

    return `${roomCountDetail}${roomSquare}${roomFloor}${roomElevator}`;
  }
}
</script>

<style lang="less">
.room_detail_title {
  border-bottom: 1px solid #EBEBEB;
  padding: 25px 15px 0;
  font-size: 14px;
  color: #333;
  h3 {
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
    > i.right {
      color: #333;
      float: right;
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
      > i {
        font-size: 10px;
      }
    }
    > span:first-child {
      margin-left: 0;
    }
  }
}
</style>
