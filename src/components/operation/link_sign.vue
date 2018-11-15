<template>
  <link-app :link-class="'operation-btn confirm'" :link-content="'签订协议/合同'" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LinkApp from './link_app.vue';

@Component({
  components: {
    LinkApp,
  },
})
export default class LinkSign extends Vue {}
</script>
