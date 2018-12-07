<template>
  <div class="contract_mine_wrap">
    <status :status="'等待对方签订'" />
    <div class="agreement_content">
      <row :label="'租赁地址：'">
        <p slot="rowContent">{{detail.city}}市{{detail.road}}{{detail.street}}·{{detail.bed_title}}</p>
      </row>
      <row :label="'出租方：'">
        <span slot="rowContent">{{detail.owner_user ? detail.owner_user.identity.identity_username : '/'}}</span>
      </row>
      <row :label="'承租方：'">
        <span slot="rowContent">{{detail.user ? detail.user.identity.identity_username : '/'}}</span>
      </row>
    </div>
    <row :label="'定金：'" :rightText="'元'" :class="'border_top border_bottom margin_top'">
      <span slot="rowContent">{{detail.rent_price}}</span>
    </row>
    <div class="title">
      约定内容
    </div>
    <div class="agreement_content">
      
      <row :label="'押金：'">
        <span slot="rowContent">{{detail.rent_deposit}}元</span>
      </row>

      <row :label="'租金：'">
        <span slot="rowContent">{{detail.rent_deposit}}元/月</span>
      </row>

      <row :label="'付款方式：'">
        <span slot="rowContent">{{detail.rent_pay_type}}个月一付</span>
      </row>

      <row :label="'租期：'">
        <span slot="rowContent">{{detail.start_time}} ~ {{detail.end_time}}</span>
      </row>

      <row :label="'补充约定：'">
        <span slot="rowContent">{{detail.remark === '' ? '/' : detail.remark}}</span>
      </row>

    </div>

    <preview :category="detail.category" :status="0" />

  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Preview from '@/components/contract/preview.vue';
import Status from '@/components/contract/status.vue';
import Row from '@/components/contract/row.vue';

@Component({
  components: {
    Preview,
    Status,
    Row,
  },
})
export default class ContractMine extends Vue {
  @Prop({default: ''}) private detail!: any;
}
</script>

<style lang="less" scoped>
</style>
