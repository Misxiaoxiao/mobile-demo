<template>
  <div
  :class="'condition_locate' + (bool || label !== '更多筛选' ? ' condition_locate_active' : '')"
  @click.stop="toggleOtherPopup">
    {{label}} <i :class="'snajiao_icon' + (bool || label !== '更多筛选' ? ' snajiao_icon_active' : '')"></i>
    <div class="condition_locate_wrap" v-show="bool">
      <div class="other_wrap">

        <div class="other_wrap_title">性别限制</div>
        <div class="other_wrap_content">
          <div
          v-for="(n, i) in gender"
          :key="i"
          :class="condition.gender === n.key ? 'active' : ''"
          @click.stop="changeGender(n.key)"
          >{{n.value}}</div>
        </div>

        <div class="other_wrap_title">租期</div>
        <div class="other_wrap_content">
          <div
          :class="condition.shortRent ? 'active' : ''"
          @click.stop="changeShortRent">可短租</div>
        </div>

        <div class="other_wrap_title">房源类型 <i class="problem_icon">?</i></div>
        <div class="other_wrap_content">
          <div
          v-for="(n, i) in type"
          :key="i"
          @click.stop="changeType(n)"
          :class="condition.type.indexOf(n) > -1 ? 'active' : ''">{{n}}</div>
        </div>

        <div class="other_wrap_title">租金</div>
        <div class="other_wrap_content">
          <div
          v-for="(n, i) in money"
          :key="i"
          :class="'wid30' + (condition.money === i ? ' active' : '')"
          @click.stop="changMoney(i)">{{n.value}}</div>
        </div>

        <div class="type_btns">
          <div class="clear_btn" @click.stop="clearAll">清除</div>
          <div class="enter_btn" @click.stop="enter">确定</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import { ROOM_CONDITION_GENDER, ROOM_CONDITION_TYPE, ROOM_CONDITION_MONEY } from '@/model/index';

@Component
export default class RoomConditionOther extends Vue {
  private gender: any[] = ROOM_CONDITION_GENDER;
  private type: any[] = ROOM_CONDITION_TYPE;
  private money: any[] = ROOM_CONDITION_MONEY;
  private conditionNum: number = 0; // 搜索条件的数量
  private label: string = '更多筛选';
  private condition: any = { // 搜索条件
    gender: '',
    shortRent: false,
    type: [],
    money: '',
  };
  @Prop({default: false}) private bool!: boolean;
  @Prop({default: {}}) private show!: any;
  @Prop({default: {}}) private other!: any;
  @Prop({default: {}}) private change!: any;
  @Prop({default: {}}) private requestCallback!: any;
  private toggleOtherPopup(): void {
    this.conditionNum = 0;
    if (this.bool) {
      this.show(false);
    } else {
      this.show(true);
    }
  }
  // 改变性别
  private changeGender(i: number): void {
    if (this.condition.gender === i) { // 如果点击同一个条件按钮
      this.condition.gender = '';
    } else {
      this.condition.gender = i;
    }
  }
  // 改变租期
  private changeShortRent(bool: boolean): void {
    this.condition.shortRent = !this.condition.shortRent;
  }
  // 改变房源类型
  private changeType(n: any): void {
    const index: number = this.condition.type.indexOf(n);
    if (index > -1) { // 如果点击选择过的条件
      this.condition.type.splice(index, 1);
    } else {
      this.condition.type.push(n);
    }
  }
  // 改变租金
  private changMoney(i: number): void {
    if (this.condition.money === i) { // 如果点击同一个条件按钮
      this.condition.money = '';
    } else {
      this.condition.money = i;
    }
  }
  // 清除
  private clearAll(): void {
    const condition = {
      gender: '',
      shortRent: false,
      type: [],
      money: '',
    };
    this.condition = Object.assign({}, this.condition, condition);
    this.conditionNum = 0;
  }
  // 确定
  private enter(): void {
    if (this.condition.gender !== '') {
      this.conditionNum++;
    }
    if (this.condition.LeasePeriod) {
      this.conditionNum++;
    }
    if (this.condition.type.length > 0) {
      this.conditionNum++;
    }
    if (this.condition.money !== '') {
      this.conditionNum++;
    }
    if (this.conditionNum === 0) {
      this.label = '更多筛选';
    } else {
      this.label = `${this.conditionNum}项条件`;
    }
    const obj = {
      gender: this.condition.gender,
      shortRent: this.condition.shortRent,
      type: this.condition.type,
      money: {
        min: this.condition.money === '' ? 0 : this.money[this.condition.money].min,
        max: this.condition.money === '' ? 0 : this.money[this.condition.money].max,
      },
    };
    this.change(obj);
    this.show(false);
    this.requestCallback();
  }
}
</script>

<style lang="less">
.problem_icon {
  display: inline-block;
  width: 15px;
  line-height: 15px;
  font-size: 12px;
  color: #fff;
  border-radius: 50%;
  text-align: center;
  background-color: #66D4C3;
  font-style: normal;
}
.condition_locate {
  width: 25%;
  justify-content: center;
  font-size: 12px;
  color: #333333;
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.condition_locate_active {
  color: #66D4C3;
}
.snajiao_icon {
  width: 16px;
  height: 11px;
  background: url('../../assets/Filter_normall@2x.png') no-repeat center;
  background-size: 50%;
}
.snajiao_icon_active {
  background: url('../../assets/Filter_col@2x.png') no-repeat center;
  background-size: 50%;
}
.other_wrap {
  background-color: #fff;
  height: 415px;
  padding: 15px 15px 15px;
  position: relative;
  .other_wrap_title {
    font-size: 14px;
    color: #666666;
  }
  .other_wrap_content {
    overflow: hidden;
    > div {
      font-size: 12px;
      width: 21%;
      margin: 4px;
      line-height: 30px;
      text-align: center;
      color: #999;
      border: 1px solid #D9D9D9;
      border-radius: 2px;
      float: left;
      margin-top: 10px;
    }
    > div.wid30 {
      width: 29%;
    }
    > div.active {
      background-color: #F0FFFD;
      border: 1px solid #66D4C3;
      color: #66D4C3;
    }
  }
  .type_btns {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    .clear_btn {
      width: 30%;
      line-height: 40px;
      background-color: #F3F4F5;
      font-size: 15px;
      text-align: center;
      color: #999999;
      border-radius: 2px;
    }
    .enter_btn {
      width: 65%;
      line-height: 40px;
      background-color: #66D4C3;
      color: #fff;
      font-size: 15px;
      border-radius: 2px;
      text-align: center;
    }
  }
}
</style>
