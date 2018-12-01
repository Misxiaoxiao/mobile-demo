<template>
  <div
  :class="bool || label !== '有无视频' ? 'condition-btn active' : 'condition-btn'"
  @click.stop="toggleVideoPopup">
    <p>
      {{label}}
      <i :class="'snajiao_icon' + (bool || label !== '有无视频' ? ' snajiao_icon_active' : '')"></i>
    </p>
    <div class="condition-wrap" v-show="bool">
      <div
      :class="'row' + (label === '有视频' ? ' active' : '')"
      @click.stop="handleClick(true)">
        有视频<br><i>(先看视频再看房)</i>
      </div>
      <div class="row" @click.stop="handleClick(false)">不限</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';

@Component
export default class RoomConditionVideo extends Vue {
  private label: string = '有无视频';

  @Prop({default: false}) private bool!: boolean;
  @Prop({default: false}) private hasVideo!: boolean;
  @Prop({default: {}}) private show!: any;
  @Prop({default: {}}) private change!: any;
  @Prop({default: {}}) private requestCallback!: any;

  @Watch('hasVideo') private changeHasVideo(): void {
    this.label = this.hasVideo ? '有视频' : '有无视频';
  }

  private toggleVideoPopup(): void {
    if (this.bool) {
      this.show(false);
    } else {
      this.show(true);
    }
  }
  private handleClick(bool: boolean): void {
    this.change(bool);
    this.show(false);
    this.requestCallback();
  }
}
</script>

<style lang="less">
.condition-wrap {
  > .row {
    box-sizing: border-box;
    // padding: 15px;
    height: 50px;
    background-color: #fff;
    border-top: 1px solid #EEEEEE;
    font-size: 14px;
    color: #484848;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    i {
      font-size: 12px;
      font-style: normal;
      color: #CCCCCC;
    }
  }
  .active {
    color: #66D4C3;
  }
}
</style>
