<template>
  <div class="contract_description_wrap">
    
    <common-header :label="$route.meta.title" />

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CommonHeader from '@/components/common/header.vue';

@Component({
  components: {
    CommonHeader,
  },
})
export default class ContractDescription extends Vue {}
</script>

<style lang="less">
</style>