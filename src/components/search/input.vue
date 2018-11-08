<template>
  <div class="input_wrap">
    <van-search
    placeholder="输入地址查询房源"
    v-model="val"
    @focus.stop="show(true)"
    @blur.stop="show(false)" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component
export default class RoomInput extends Vue {
  private val: string = '';
  @Prop({default: {}}) private show!: any;
  @Prop({default: {}}) private changeVal!: any;
  @Watch('val') private change(newVal: string): void {
    this.changeVal({
      data: {
        keyword: this.val,
        city: '上海',
      },
    });
  }
}
</script>

<style lang="less">
.input_wrap {
  background-color: #fff;
  margin: 10px;
  .van-search {
    padding: 0;
    border-radius: 50px;
    .van-cell {
      padding: 4px 8px;
      border-radius: 50px;
      background-color: #F3F4F5;
      display: flex;
      align-items: center;
    }
  }
}
</style>
