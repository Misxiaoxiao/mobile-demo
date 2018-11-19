<template>
  <div
  :class="bool || label !== '预算' ? 'condition-btn active' : 'condition-btn'"
  >
    <p
    @click.stop="toggleClick"
    >
      {{label}}
      <i :class="'snajiao_icon' + (bool || label !== '预算' ? ' snajiao_icon_active' : '')"></i>
    </p>
    <div class="condition-wrap" v-show="bool">
      <div class="demand_money_wrap">

        <div class="condition-label" style="margin-top: 0;">预算</div>
        <div class="condition-content">
          <van-col
          :span="8"
          v-for="(n, i) in moneyCondition"
          :key="i"
          >
            <div
            :class="conditionMoney === i ? 'button-b1-active' : 'button-b1'"
            @click.stop="changMoney(i)"
            >
              {{n.value}}
            </div>
          </van-col>
        </div>

        <div class="type_btns">
          <div class="clear_btn" @click.stop="clear">清除</div>
          <div class="enter_btn" @click.stop="enter">确定</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import { ROOM_CONDITION_MONEY } from '@/model/index';

@Component
export default class DemandConditionMoney extends Vue {
  private moneyCondition: any[] = ROOM_CONDITION_MONEY;
  private conditionMoney: string = '';
  @Prop({default: {}}) private money!: any;
  @Prop({default: false}) private bool!: boolean;
  @Prop({default: {}}) private show!: any;
  @Prop({default: {}}) private change!: any;
  @Prop({default: {}}) private requestCallback!: any;
  get label(): string {
    if (this.money.min === 0 && this.money.max === 0) {
      return '预算';
    }
    return `${this.money.min}~${this.money.max === 0 ? '不限' : this.money.max}`;
  }
  private toggleClick(): void {
    if (this.bool) {
      this.show(false);
    } else {
      this.show(true);
    }
  }
  // 改变租金
  private changMoney(i: string): void {
    if (this.conditionMoney === i) { // 如果点击同一个条件按钮
      this.conditionMoney = '';
    } else {
      this.conditionMoney = i;
    }
  }
  // 清除
  private clear(): void {
    this.conditionMoney = '';
    const obj = {
      min: 0,
      max: 0,
    };
    this.change(obj);
    this.show(false);
    this.requestCallback();
  }
  // 确定
  private enter(): void {
    const i: number = this.conditionMoney === '' ? -1 : Number(this.conditionMoney);
    if (i !== -1) {
      const obj = this.moneyCondition[i];
      this.change(obj);
    }
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
  border-radius: 50%;
  text-align: center;
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
.demand_money_wrap {
  background-color: #fff;
  height: 220px;
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
