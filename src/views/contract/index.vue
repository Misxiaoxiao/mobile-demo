<template>
  <div class="contract_wrap">
    合同
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
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
export default class ContractIndex extends Vue {}
</script>
