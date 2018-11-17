<template>
  <div class="time_select" @click.stop="changeOpen">
    
    <van-col :span="6" class="form-label">入住时间</van-col>

    <van-col :span="16" :class="time === '' ? 'form-placeholder' : 'form-text'">{{time === '' ? '请选择' : time}}</van-col>

    <i class="iconfont form-right-icon">&#xe601;</i>
    
    <van-popup
    v-model="isOpen"
    position="bottom"
    >
      <van-datetime-picker
        v-if="isOpen"
        v-model="currentDate"
        type="date"
        :min-date="minDate"
        @confirm="confirm"
      />
    </van-popup>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class CitySelect extends Vue {
  private isOpen: boolean = false;
  private currentDate: any = new Date();
  private minDate: any = new Date();

  @Prop({default: ''}) private time!: string;
  @Prop({default: {}}) private change!: any;

  private changeOpen(): void {
    this.isOpen = !this.isOpen;
  }

  private confirm(val: any): void {
    const timeStr = `${val.getFullYear()}-${+val.getMonth() + 1}-${val.getDate()}`;
    this.change(timeStr);
  }
}
</script>

<style lang="less">
.time_select {
  height: 48px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f3f4f5;
  .van-picker__cancel {
    color: #333;
    font-size: 16px;
  }
  .van-picker__confirm {
    color: #66D4C3;
    font-size: 16px;
  }
}
</style>
