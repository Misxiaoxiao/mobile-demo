<template>
  <row :class="'border_top border_bottom margin_top'">
    <span slot="rowContent">
      预览完整协议
      <i class="iconfont back">&#xe601;</i>
    </span>
  </row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Row from '@/components/contract/row.vue';

@Component({
  components: {
    Row,
  },
})
export default class Preview extends Vue {}
</script>

<style lang="less" scoped>
</style>
