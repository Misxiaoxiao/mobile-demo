<template>
  <div class="city_select" @click.stop="changeOpen">
    
    <van-col :span="6" class="form-label">城市</van-col>

    <van-col :span="16" class="form-text">{{city}}</van-col>

    <i class="iconfont form-right-icon">&#xe601;</i>
    
    <van-popup
    v-model="isOpen"
    position="bottom"
    >
      <van-area
      v-if="isOpen"
      :area-list="areaList"
      :columns-num="2"
      :value="currentValue"
      @confirm="changeCity"
      />
    </van-popup>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class CitySelect extends Vue {
  private isOpen: boolean = false;
  private areaList: any = {
    province_list: {
      110000: '北京市',
      120000: '天津市',
    },
    city_list: {
      110100: '北京',
      120100: '天津',
    },
  };

  @Prop({default: ''}) private city!: string;
  @Prop({default: {}}) private change!: any;

  get currentValue(): string {
    for (const i in this.areaList.city_list) {
      if (this.areaList.city_list[i] === this.city) {
        return i;
      }
    }
    return '';
  }

  private changeCity(res: any): void {
    this.change(res[1].name);
  }

  private changeOpen(): void {
    this.isOpen = !this.isOpen;
  }
}
</script>

<style lang="less">
.city_select {
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
