<template>
  <div class="contract_wrap" v-if="true">
    
    <contract-mine />

  </div>

  <div class="contract_wrap" v-else>
    你不是我认识的微信，你看不到我呢。
    请在微信中打开此链接
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import Platform from '@/utils/platform';
import ContractMine from './contract_mine.vue';

@Component({
  components: {
    ContractMine,
  },
})
export default class ContractIndex extends Vue {
  private ifWeixin: boolean = false;

  // @State((state: any) => state.)

  @Action('getContractDetail') private getContractDetail: any;

  private created(): void {
    const platform = new Platform();
    this.ifWeixin = platform.checkWeixin();

    // document.title = '我是设置的标题呢'

    // if (this.ifWeixin) {
    if (true) {
      this.getContractDetail({
        data: {
          order_no: this.$route.params.order,
        },
      });
    }
  }
}
</script>

<style lang="less" scoped>
</style>
