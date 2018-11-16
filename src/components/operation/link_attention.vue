<template>
  <link-app :linkClass="'operation-btn button-b1-active'" :linkContent="'关注'" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LinkApp from './link_app.vue';

@Component({
  components: {
    LinkApp,
  },
})
export default class LinkAttention extends Vue {}
</script>

<style lang="less">
</style>
