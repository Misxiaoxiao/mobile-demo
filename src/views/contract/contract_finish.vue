<template>
  <div class="contract_finish_wrap">
    <status :status="'已签订'" />

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

    <preview :category="detail.category" :status="1" />

    <div class="id_time_wrap margin_top">
      <p>编号： {{detail.id}}</p>
      <p>签订时间： /</p>
      <p>创建时间： {{detail.create_time}}</p>
    </div>

    <p>使用zuber手机客户端，可下载完整协议/合同</p>

    <common-bar />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import CommonBar from '@/components/common/bar.vue';
import Preview from '@/components/contract/preview.vue';
import Status from '@/components/contract/status.vue';
import Row from '@/components/contract/row.vue';

@Component({
  components: {
    CommonBar,
    Preview,
    Status,
    Row,
  },
})
export default class ContractFinish extends Vue {
  @Prop({default: ''}) private detail!: any;
}
</script>

<style lang="less" scoped>
.contract_finish_wrap {
  padding-bottom: 60px;
  > p {
    margin: 30px 0 15px;
    color: #75B566;
    font-size: 12px;
    text-align: center;
  }
}
.id_time_wrap {
  padding: 15px;
  background-color: #fff;
  > p {
    color: rgb(204, 204, 204);
    font-size: 12px;
    line-height: 18px;
  }
}
</style>
