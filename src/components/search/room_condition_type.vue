<template>
  <div
  :class="bool || this.label !== '整租合租' ? 'condition-btn active' : 'condition-btn'"
  >
    <p
    @click.stop="toggleTypePopup"
    >
      {{label}}
      <i :class="'snajiao_icon' + (bool || this.label !== '整租合租' ? ' snajiao_icon_active' : '')"></i>
    </p>
    <div class="condition-wrap" v-show="bool">
      <div class="type_wrap">
        <div class="type_wrap_content">
          <div class="condition-label" style="margin-top: 0;">整租</div>
          <div class="condition-content">
            <van-col
            :span="6"
            v-for="(n, i) in bedCount"
            :key="i"
            >
              <div
              :class="(type.bedCount - 1) === i ? 'button-b1-active' : 'button-b1'"
              @click.stop="changeBedCount(i)"
              >{{n}}</div>
            </van-col>
          </div>
          <div class="condition-label">合租</div>
          <div class="condition-content">
            <van-col
            :span="6"
            v-for="(n, i) in roomType"
            :key="i"
            >
              <div
              :class="(type.type - 1) === i ? 'button-b1-active' : 'button-b1'"
              @click.stop="changeType(i)"
              >{{n}}</div>
            </van-col>
          </div>
        </div>
        <div class="type_wrap_btn" @click.stop="clickLimit">不限</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import { BED_COUNT, CONDITION_ROOM_TYPE } from '@/model/index';

@Component
export default class RoomConditionType extends Vue {
  private bedCount: any[] = BED_COUNT;
  private roomType: any[] = CONDITION_ROOM_TYPE;
  @Prop({default: {}}) private type!: any;
  @Prop({default: false}) private bool!: boolean;
  @Prop({default: {}}) private show!: any;
  @Prop({default: {}}) private change!: any;
  @Prop({default: {}}) private requestCallback!: any;
  get label(): any {
    if (this.type.bedCount !== '') {
      return `整租${this.bedCount[this.type.bedCount - 1]}`;
    } else if (this.type.type !== '') {
      return this.roomType[this.type.type - 1];
    }
    return '整租合租';
  }

  private changeBedCount(i: number): void {
    const obj = {
      bedCount: (+i + 1),
      type: 3,
    };
    this.change(obj);
    this.requestCallback();
    this.show(false);
  }

  private changeType(i: number): void {
    const obj = {
      bedCount: '',
      type: (+i + 1),
    };
    this.change(obj);
    this.requestCallback();
    this.show(false);
  }

  private clickLimit(): void {
    const obj = {
      bedCount: '',
      type: '',
    };
    this.change(obj);
    this.requestCallback();
    this.show(false);
  }

  private toggleTypePopup(): void {
    if (this.bool) {
      this.show(false);
    } else {
      this.show(true);
    }
  }
}
</script>

<style lang="less">
.type_wrap {
  background-color: #fff;
  position: relative;
  > .type_wrap_content {
    padding: 15px 15px 15px;
    box-sizing: border-box;
    overflow-y: scroll;
    -webkit-overflow-scrolling : touch;
  }
  .type_wrap_btn {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    border-top: 1px solid #eee;
  }
}
</style>
