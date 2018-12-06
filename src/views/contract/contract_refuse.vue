<template>
  <div class="contract_refuse_wrap">
    <status :status="'拒签'" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Status from '@/components/contract/status.vue';

@Component({
  components: {
    Status,
  },
})
export default class ContractRefuse extends Vue {
}
</script>
