<template>
  <div class="other_select">
    <van-col :span="6" class="other_select_label">租房要求</van-col>
    <van-col :span="18">
      <div
      :class="bedCountLabel !== '' && roomTypeOneLabel !== '' ? 'other_select_item_active' : 'other_select_item'"
      @click.stop="changeOpenOne"
      >整租</div>
      <div v-if="bedCountLabel !== '' && roomTypeOneLabel !== ''">
        <div class="other_select_item_more">户型：{{bedCountLabel}}</div><br>
        <div class="other_select_item_more">房源类型：{{roomTypeOneLabel}}</div>
      </div>
      <div
      :class="genderLabel !== '' && roomTypeTwoLabel !== '' ? 'other_select_item_active' : 'other_select_item'"
      @click.stop="changeOpenTwo"
      >合租</div>
      <div v-if="genderLabel !== '' && roomTypeTwoLabel !== ''">
        <div class="other_select_item_more">性别：{{genderLabel}}</div><br>
        <div class="other_select_item_more">房源类型：{{roomTypeTwoLabel}}</div>
      </div>
    </van-col>

    <van-popup
    v-model="isOpenOne"
    position="bottom"
    class="popup_wrap"
    :close-on-click-overlay="false"
    >
      <div class="popup_header" >
        <span @click.stop="cancelOne">取消</span>
        <span
        :class="enterOne ? 'active': ''"
        @click.stop="clickOneEnter"
        >确定</span>
      </div>
      <div class="popup_section">
        <div class="popup_section_label">户型</div>
        <div class="popup_section_wrap">
          <div
          :class="conditionOne.bedCountLimit ? 'button-b1-active' : 'button-b1'"
          @click.stop="changeBedCountLimit"
          >不限</div>
          <div
          v-for="(n, i) in bedCount"
          :key="i"
          :class="conditionOne.bedCount.indexOf(+i + 1) > -1 ? 'button-b1-active' : 'button-b1'"
          @click.stop="changeBedCount(+i + 1)"
          >{{n}}</div>
        </div>
      </div>
      <div class="popup_section">
        <div class="popup_section_label">
          房源类型 <i class="iconfont">&#xe604;</i>
        </div>
        <div class="popup_section_wrap">
          <div
          :class="conditionOne.roomTypeLimit ? 'button-b1-active' : 'button-b1'"
          @click.stop="changeRoomTypeLimitOne"
          >不限</div>
          <div
          v-for="(n, i) in roomType"
          :key="i"
          class="button-b1"
          v-if="i !== 0"
          :class="conditionOne.roomType.indexOf(n) > -1 ? 'button-b1-active' : 'button-b1'"
          @click.stop="changeRoomTypeOne(n)"
          >{{n}}</div>
        </div>
      </div>
    </van-popup>

    <van-popup
    v-model="isOpenTwo"
    position="bottom"
    class="popup_wrap"
    :close-on-click-overlay="false"
    >
      <div class="popup_header">
        <span @click.stop="cancelTwo">取消</span>
        <span
        :class="enterTwo ? 'active': ''"
        @click.stop="clickTwoEnter"
        >确定</span>
      </div>
      <div class="popup_section">
        <div class="popup_section_label">户型</div>
        <div class="popup_section_wrap">
          <div
          :class="conditionTwo.gender === 2 ? 'button-b1-active' : 'button-b1'"
          @click.stop="changeGender(2)"
          >不限</div>
          <div
          :class="conditionTwo.gender === 0 ? 'button-b1-active' : 'button-b1'"
          @click.stop="changeGender(0)"
          >女生入住</div>
          <div
          :class="conditionTwo.gender === 1 ? 'button-b1-active' : 'button-b1'"
          @click.stop="changeGender(1)"
          >男生入住</div>
        </div>
      </div>
      <div class="popup_section">
        <div class="popup_section_label">
          房源类型 <i class="iconfont">&#xe604;</i>
        </div>
        <div class="popup_section_wrap">
          <div
          :class="conditionTwo.roomTypeLimit ? 'button-b1-active' : 'button-b1'"
          @click.stop="changeRoomTypeLimitTwo"
          >不限</div>
          <div
          v-for="(n, i) in roomType"
          :key="i"
          class="button-b1"
          :class="conditionTwo.roomType.indexOf(n) > -1 ? 'button-b1-active' : 'button-b1'"
          @click.stop="changeRoomTypeTwo(n)"
          >{{n}}</div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { SUBSCRIPTION_BED_COUNT, SUBSCRIPTION_ROOM_TYPE } from '@/model/index';

@Component
export default class OtherSelect extends Vue {
  private isOpenOne: boolean = false;
  private isOpenTwo: boolean = false;
  private bedCount: any[] = SUBSCRIPTION_BED_COUNT;
  private roomType: any[] = SUBSCRIPTION_ROOM_TYPE;

  private bedCountLabel: string = '';
  private roomTypeOneLabel: string = '';
  private genderLabel: string = '';
  private roomTypeTwoLabel: string = '';
  // 整租条件
  private conditionOne: any = {
    bedCount: [],
    bedCountLimit: false,
    roomType: [],
    roomTypeLimit: false,
  };
  // 合租条件
  private conditionTwo: any = {
    gender: '',
    roomType: [],
    roomTypeLimit: false,
  };

  @Prop({default: {}}) private other!: any;
  @Prop({default: {}}) private change!: any;
  // 整租条件是否选择完整
  get enterOne(): boolean {
    return (this.conditionOne.bedCountLimit || this.conditionOne.bedCount.length > 0) &&
           (this.conditionOne.roomTypeLimit || this.conditionOne.roomType.length > 0);
  }
  // 合租条件是否选择完整
  get enterTwo(): boolean {
    return (this.conditionTwo.gender !== '') &&
           (this.conditionTwo.roomTypeLimit || this.conditionTwo.roomType.length > 0);
  }

  // 设置条件
  private setCondition(): void {
    if (this.other.item === 0) {
      this.resetConditionOne();
      this.setOneLabel();
      this.resetConditionTwo();
      this.setTwoLabel();
      return;
    }

    if (this.other.item === 1) { // 如果为整租
      if (this.other.bedCount.length === 4) {
        const obj = {
          bedCount: [],
          bedCountLimit: true,
        };
        this.conditionOne = Object.assign({}, this.conditionOne, obj);
      } else {
        const obj = {
          bedCount: this.other.bedCount,
          bedCountLimit: false,
        };
        this.conditionOne = Object.assign({}, this.conditionOne, obj);
      }
      if (this.other.roomTypeAffirm.length === 3) {
        const obj = {
          roomType: [],
          roomTypeLimit: true,
        };
        this.conditionOne = Object.assign({}, this.conditionOne, obj);
      } else {
        const obj = {
          roomType: this.other.roomTypeAffirm,
          roomTypeLimit: false,
        };
        this.conditionOne = Object.assign({}, this.conditionOne, obj);
      }
      this.setOneLabel();
    } else {
      if (this.other.roomTypeAffirm.length === 4) {
        const obj = {
          roomType: [],
          roomTypeLimit: true,
          gender: this.other.gender,
        };
        this.conditionTwo = Object.assign({}, this.conditionTwo, obj);
      } else {
        const obj = {
          roomType: this.other.roomTypeAffirm,
          roomTypeLimit: false,
          gender: this.other.gender,
        };
        this.conditionTwo = Object.assign({}, this.conditionTwo, obj);
      }
      this.setTwoLabel();
    }
  }

  // 开关整租条件筛选框
  private changeOpenOne(): void {
    this.isOpenOne = !this.isOpenOne;
    this.setCondition();
  }
  // 开关合租条件筛选框
  private changeOpenTwo(): void {
    this.isOpenTwo = !this.isOpenTwo;
    this.setCondition();
  }
  // 修改整租房间数量为不限
  private changeBedCountLimit(): void {
    this.conditionOne.bedCountLimit = !this.conditionOne.bedCountLimit;
    this.conditionOne.bedCount = [];
  }
  // 修改整租房间数量
  private changeBedCount(i: number): void {
    const index: number = this.conditionOne.bedCount.indexOf(i);
    this.conditionOne.bedCountLimit = false;
    if (index > -1) {
      this.conditionOne.bedCount.splice(index, 1);
    } else {
      this.conditionOne.bedCount.push(i);
    }
  }
  // 修改整租房源类型为不限
  private changeRoomTypeLimitOne(): void {
    this.conditionOne.roomTypeLimit = !this.conditionOne.roomTypeLimit;
    this.conditionOne.roomType = [];
  }
  // 修改整租房源类型
  private changeRoomTypeOne(val: string): void {
    const index: number = this.conditionOne.roomType.indexOf(val);
    this.conditionOne.roomTypeLimit = false;
    if (index > -1) {
      this.conditionOne.roomType.splice(index, 1);
    } else {
      this.conditionOne.roomType.push(val);
    }
  }
  // 设置整租条件标题
  private setOneLabel(): void {
    if (this.conditionOne.bedCountLimit || this.conditionOne.bedCount.length === 4) {
      this.bedCountLabel = '不限';
      // this.changeBedCountLimit();
    } else {
      this.bedCountLabel = '';
      this.bedCountLabel += this.conditionOne.bedCount.map((item: any) => {
        return item ? this.bedCount[item - 1] : '';
      });
    }
    if (this.conditionOne.roomTypeLimit || this.conditionOne.roomType.length === 3) {
      this.roomTypeOneLabel = '不限';
      // this.changeRoomTypeLimitOne();
    } else {
      this.roomTypeOneLabel = this.conditionOne.roomType.toString();
    }
  }
  // 整租确认按钮
  private clickOneEnter(): void {
    if (this.enterOne) {
      const bedCount = this.conditionOne.bedCountLimit
                       ? [1, 2, 3, 4]
                       : this.conditionOne.bedCount;
      const roomTypeAffirm = this.conditionOne.roomTypeLimit
                             ? ['转租房源', '业主出租', '长租公寓']
                             : this.conditionOne.roomType;
      const obj = {
        item: 1,
        bedCount,
        roomTypeAffirm,
        gender: '',
      };
      this.change(obj);
      this.setOneLabel();
      this.resetConditionTwo();
      this.isOpenOne = false;
    }
  }
  // 重置整租数据
  private resetConditionOne(): void {
    const obj = {
      bedCount: [],
      bedCountLimit: false,
      roomType: [],
      roomTypeLimit: false,
    };
    this.conditionOne = Object.assign({}, this.conditionOne, obj);
    this.bedCountLabel = '';
    this.roomTypeOneLabel = '';
  }
  private cancelOne(): void {
    this.setCondition();
    this.changeOpenOne();
  }
  // 改变合租入住性别
  private changeGender(val: any): void {
    if (this.conditionTwo.gender !== val) {
      this.conditionTwo.gender = val;
    } else {
      this.conditionTwo.gender = '';
    }
  }
  // 讲合租房源类型改为不限
  private changeRoomTypeLimitTwo(): void {
    this.conditionTwo.roomTypeLimit = !this.conditionTwo.roomTypeLimit;
    this.conditionTwo.roomType = [];
  }
  // 改变合租房源类型
  private changeRoomTypeTwo(val: string): void {
    const index: number = this.conditionTwo.roomType.indexOf(val);
    this.conditionTwo.roomTypeLimit = false;
    if (index > -1) { // 如果点击的房源类型为选中状态
      this.conditionTwo.roomType.splice(index, 1);
    } else {
      this.conditionTwo.roomType.push(val);
    }
  }
  // 设置合租标签
  private setTwoLabel(): void {
    if (this.conditionTwo.roomTypeLimit || this.conditionTwo.roomType.length === 4) {
      this.roomTypeTwoLabel = '不限';
      // this.changeRoomTypeLimitTwo();
    } else {
      this.roomTypeTwoLabel = this.conditionTwo.roomType.toString();
    }
    this.genderLabel = this.conditionTwo.gender === 0 ? '女生入住'
                        : this.conditionTwo.gender === 1 ? '男生入住'
                        : this.conditionTwo.gender === 2 ? '不限'
                        : '';
  }
  // 合租确认按钮
  private clickTwoEnter(): void {
    if (this.enterTwo) {
      const gender = this.conditionTwo.gender;
      const roomTypeAffirm = this.conditionTwo.roomTypeLimit
                             ? ['室友合租', '转租房源', '业主出租', '长租公寓']
                             : this.conditionTwo.roomType;
      const obj = {
        item: 2,
        bedCount: [],
        roomTypeAffirm,
        gender,
      };
      this.change(obj);
      this.setTwoLabel();
      this.resetConditionOne();
      this.isOpenTwo = false;
    }
  }
  // 重置合租数据
  private resetConditionTwo(): void {
    const obj = {
      gender: '',
      roomType: [],
      roomTypeLimit: false,
    };
    this.conditionTwo = Object.assign({}, this.conditionTwo, obj);
    this.genderLabel = '';
    this.roomTypeTwoLabel = '';
  }
  // 合租取消按钮
  private cancelTwo(): void {
    this.setCondition();
    this.changeOpenTwo();
  }
}
</script>

<style lang="less">
.other_select {
  padding: 15px 0;
  overflow: hidden;
  .other_select_label {
    margin-top: 6px;
    font-size: 15px;
    color: #666;
  }
  .other_select_item {
    width: 125px;
    line-height: 30px;
    text-align: center;
    font-size: 14px;
    color: #999;
    border: 1px solid #999;
    border-radius: 3px;
    margin-top: 15px;
    &_active {
      width: 125px;
      line-height: 30px;
      text-align: center;
      font-size: 14px;
      color: #66D4C3;
      border: 1px solid #66D4C3;
      background-color: #F0FFFD;
      border-radius: 3px;
      margin-top: 15px;
    }
  }
  .other_select_item:first-child {
    margin: 0;
  }
}
.popup_header {
  height: 50px;
  background-color: #fff;
  padding: 0 15px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > span {
    color: #333;
    font-size: 16px;
  }
  > span.active {
    color: #66D4C3;
  }
}
.popup_wrap {
  background-color: #fff;
}
.popup_section {
  padding: 10px 15px 20px;
  overflow: hidden;
  .popup_section_label {
    color: #999;
    font-size: 16px;
    > i {
      color: #66D4C3;
    }
  }
  .popup_section_wrap {
    > div {
      width: 22.3%;
      line-height: 30px;
      font-size: 14px;
      margin: 10px 1% 0;
      float: left;
      border-radius: 2px;
    }
  }
}
.other_select_item_more {
  display: inline-block;
  font-size: 12px;
  color: #66D4C3;
  padding: 5px;
  margin-top: 5px;
  background-color: #F0FFFD;
  border-radius: 3px;
}
</style>
