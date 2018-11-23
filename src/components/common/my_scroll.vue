<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import BScroll from 'better-scroll';

@Component
export default class MyScroll extends Vue {
  private scroll: any = null;

  @Prop({default: 1}) private probeType!: number;
  @Prop({default: true}) private click!: boolean;
  // @Prop({default: []}) private data!: any[];

  private initScroll(): void {
    if (!this.$refs.wrapper) {
      return;
    }
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      click: this.click,
    });
  }
  private enable(): void {
    if (this.scroll) {
      this.scroll.enable();
    }
  }
  private refresh(): void {
    if (this.scroll) {
      this.scroll.refresh();
    }
  }
  private mounted(): void {
    setTimeout(() => {
      this.initScroll();
    }, 20);
  }
}
</script>
