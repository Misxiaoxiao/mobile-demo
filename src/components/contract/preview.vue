<template>
  <row :class="'border_top border_bottom margin_top'">
    <a :href="src" slot="rowContent" class="font_color">
      {{status === 0 ? '预览' : '查看'}}完整{{category === 1 ? '合同' : '协议'}}
      <i class="iconfont back">&#xe601;</i>
    </a>
  </row>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Row from '@/components/contract/row.vue';

@Component({
  components: {
    Row,
  },
})
export default class Preview extends Vue {
  @Prop({default: 'http://app.zuber.im'}) private src!: string;
  @Prop({default: 1}) private category!: number; // 1 合同 2 协议
  @Prop({default: 0}) private status!: number; // 0 预览 1查看
}
</script>

<style lang="less" scoped>
.font_color {
  color: #66D4C3;
}
.back {
  color: #aaa;
}
</style>
