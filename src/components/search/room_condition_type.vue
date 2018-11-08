<template>
  <div
  :class="'condition_locate' + (bool || this.type !== '' ? ' condition_locate_active' : '')"
  @click.stop="toggleTypePopup">
    {{label}} <i :class="'snajiao_icon' + (bool || this.type !== '' ? ' snajiao_icon_active' : '')"></i>
    <div class="condition_locate_wrap" v-show="bool">
      <div :class="'row' + (item.value !== '' && type === item.value ? ' active' : '')" v-for="(item, i) in items" :key="i" @click.stop="handleClick(item.value)">{{item.key}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import { ROOM_CONDITION_TYPE_ITEMS } from '@/model/index';

@Component
export default class RoomConditionLocate extends Vue {
  private items: any[] = ROOM_CONDITION_TYPE_ITEMS;
  @Prop({default: ''}) private type!: any;
  @Prop({default: false}) private bool!: boolean;
  @Prop({default: {}}) private show!: any;
  @Prop({default: {}}) private change!: any;
  @Prop({default: {}}) private requestCallback!: any;
  get label(): any {
    if (this.type === '') {
      return '整租合租';
    } else {
      for (const i of this.items) {
        if (i.value === this.type) {
          return i.key;
        }
      }
    }
  }
  private toggleTypePopup(): void {
    if (this.bool) {
      this.show(false);
    } else {
      this.show(true);
    }
  }
  private handleClick(i: any): void {
    this.change(i);
    this.show(false);
    this.requestCallback();
  }
}
</script>

<style lang="less">
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
</style>
