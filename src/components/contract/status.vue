<template>
  <div class="status_wrap">
    {{status}}
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class ContractStatus extends Vue {
  @Prop({default: ''}) private status!: string;
}
</script>

<style lang="less" scoped>
.status_wrap {
  width: 100%;
  height: 54px;
  background:linear-gradient(90deg,#3BEAD0 0%,#27B6BE 100%);
  box-sizing: border-box;
  padding: 0 15px;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #fff;
}
</style>
