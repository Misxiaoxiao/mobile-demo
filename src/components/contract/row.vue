<template>
  <div :class="className + ' contract_row'">
    <div class="left" v-if="label !== ''">{{label}}</div>
    <div class="center">
      <slot name="rowContent"></slot>
    </div>
    <div class="right" v-if="rightText !== ''">{{rightText}}</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class ContractRow extends Vue {
  @Prop({default: ''}) private className!: string;
  @Prop({default: ''}) private label!: string;
  @Prop({default: ''}) private rightText!: string;
}
</script>

<style lang="less" scoped>
.contract_row {
  display: flex;
  padding: 15px;
  box-sizing: border-box;
  color: #484848;
  font-size: 14px;
  font-weight: 300;
  line-height: 18px;
  background-color: #fff;
  > .left {
    width: 21.3%;
  }
  > .center {
    flex: 1;
    font-weight:500;
    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
