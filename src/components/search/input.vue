<template>
  <div class="input_wrap">
    <van-search
    placeholder="输入路名、小区、办公楼等"
    v-model="val" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component
export default class RoomInput extends Vue {
  private timer: any = null;
  private val: string = '';
  @Prop({default: ''}) private city!: string;
  @Prop({default: {}}) private show!: any;
  @Prop({default: {}}) private changeVal!: any;
  @Watch('val') private change(newVal: string): void {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      if (this.val.length > 0) {
        this.show(true);
      } else {
        this.show(false);
      }
      this.changeVal({
        data: {
          keyword: this.val,
          city: this.city,
        },
      });
    }, 200);
  }

  @Watch('city') private changeCity(): void {
    this.val = '';
    this.show(false);
  }

  private created(): void {
    this.show(false);
    this.changeVal({
      data: {
        keyword: this.val,
        city: this.city,
      },
    });
  }
}
</script>

<style lang="less">
</style>
