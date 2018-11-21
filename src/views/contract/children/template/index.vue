<template>
  <div>
    模板
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ContractTemplate extends Vue {}
</script>

<style lang="less">
</style>
