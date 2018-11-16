<template>
  <div class="time_select" @click.stop="changeOpen">
    
    <van-col :span="6" class="form-label">入住时间</van-col>

    <van-col :span="16" class="form-placeholder">{{time}}</van-col>

    <i class="iconfont form-right-icon">&#xe601;</i>
    
    <van-popup
    v-model="isOpen"
    position="bottom"
    >
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        :min-date="minDate"
      />
    </van-popup>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CitySelect extends Vue {
  private time: string = '请选择';
  private isOpen: boolean = false;
  private currentDate: any = new Date();
  private minDate: any = new Date();

  private changeOpen(): void {
    this.isOpen = !this.isOpen;
  }
}
</script>

<style lang="less">
.time_select {
  height: 48px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f3f4f5;
}
</style>
