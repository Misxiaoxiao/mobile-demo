<template>
  <div class="loading-spin">
    <img :src="loading" alt="加载中" height="28" />
  </div>  
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Loading extends Vue {
  private loading: any = require('loading-svg/loading-spin.svg');
}
</script>

<style lang="less">
.loading-spin {
  margin: 20px;
  margin-top: 100px;
  text-align: center;
}
</style>
