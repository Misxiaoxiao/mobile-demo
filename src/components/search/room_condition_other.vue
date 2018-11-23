<template>
  <div
  :class="bool || label !== '更多筛选' ? 'condition-btn active' : 'condition-btn'"
  >
    <p
    @click.stop="toggleOtherPopup"
    >
      {{label}}
      <i :class="'snajiao_icon' + (bool || label !== '更多筛选' ? ' snajiao_icon_active' : '')"></i>
    </p>
    <div class="condition-wrap" v-show="bool">
      <div class="other_wrap">
        <div class="other_wrap_content">
          <my-scroll>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
          </my-scroll>
          <!-- <div class="condition-label" style="margin-top: 0;">性别限制</div>
          <div class="condition-content">
            <van-col
              :span="6"
              v-for="(n, i) in gender"
              :key="i"
              >
              <div
              :class="condition.gender === n.key ? 'button-b1-active' : 'button-b1'"
              @click.stop="changeGender(n.key)"
              >{{n.value}}</div>
            </van-col>
          </div> -->

          <!-- <div class="condition-label">租期</div>
          <div class="condition-content">
            <van-col :span="6">
              <div
              :class="condition.shortRent ? 'button-b1-active' : 'button-b1'"
              @click.stop="changeShortRent"
              >可短租</div>
            </van-col>
          </div> -->

          <!-- <div class="condition-label">房源类型 <i class="iconfont problem_icon" @click.stop="gotoRoomType">&#xe604;</i></div>
          <div class="condition-content">
            <van-col
            :span="6"
            v-for="(n, i) in type"
            :key="i"
            >
              <div
              :class="condition.type.indexOf(n) > -1 ? 'button-b1-active' : 'button-b1'"
              @click.stop="changeType(n)"
              >{{n}}</div>
            </van-col>
          </div> -->

          <!-- <div class="condition-label">租金</div>
          <div class="condition-content">
            <van-col
            :span="8"
            v-for="(n, i) in money"
            :key="i"
            >
              <div
              :class="condition.money === i ? 'button-b1-active' : 'button-b1'"
              @click.stop="changMoney(i)"
              >
                {{n.value}}
              </div>
            </van-col>
          </div> -->
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
import MyScroll from '@/components/common/my_scroll.vue';

@Component({
  components: {
    MyScroll,
  },
})
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
  // 前往房源类型页面
  private gotoRoomType(): void {
    this.$router.push({
      name: 'descriptionRoom',
    });
  }
}
</script>

<style lang="less">
.problem_icon {
  font-size: 14px;
  color: #66D4C3;
}
.other_wrap {
  background-color: #fff;
  position: relative;
  > .other_wrap_content {
    padding: 15px 15px 15px;
    box-sizing: border-box;
    height: 300px;
    overflow-y: scroll;
    -webkit-overflow-scrolling : touch;
    padding-bottom: 80px;
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
    background-color: #fff;
    border-top: 1px solid #eee;
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
