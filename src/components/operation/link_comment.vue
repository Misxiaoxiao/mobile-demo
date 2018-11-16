<template>
  <link-app :linkClass="'operation-btn confirm'" :linkContent="'评论/投诉'" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LinkApp from './link_app.vue';

@Component({
  components: {
    LinkApp,
  },
})
export default class LinkComponent extends Vue {}
</script>
