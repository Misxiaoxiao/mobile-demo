<template>
  <div class="contract_list_index_wrap">
    
    <common-header :label="$route.meta.title">
      <p class="contract_wrap_header_right" slot="header_right">免费创建</p>
    </common-header>

    <div class="contract_list_index_content">

      <common-banner />

      <div class="list_wrap">
        <contract-list />
        <contract-list />
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CommonHeader from '@/components/common/header.vue';
import CommonBanner from '@/components/common/banner.vue';
import ContractList from '@/components/list/contract.vue';

@Component({
  components: {
    CommonHeader,
    CommonBanner,
    ContractList,
  },
})
export default class ContractListIndex extends Vue {}
</script>

<style lang="less" scope>
.contract_list_index_wrap {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .contract_wrap_header_right {
    font-size: 17px;
    color: #66D4C3;
  }
  .contract_list_index_content {
    flex: 1;
    background-color: #f3f4f5;
    > .list_wrap {
      padding: 0px 5px 12px;
    }
  }
}
</style>
