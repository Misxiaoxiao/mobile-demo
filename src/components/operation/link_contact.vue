<template>
  <link-app :linkClass="'operation-btn contact'" :linkContent="'私信联系'" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LinkApp from './link_app.vue';

@Component({
  components: {
    LinkApp,
  },
})
export default class LinkContact extends Vue {}
</script>
