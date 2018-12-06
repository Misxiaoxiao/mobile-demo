<template>
  <div class="contract_response_wrap" v-if="detail">

    <bar />

    <status :status="status" />

    <div class="title">
      对方信息（{{detail.owner_apply ? '出租方' : '承租方'}}）
    </div>

    <div class="other_info" v-if="detail.owner_apply">
      <div class="img" :style="'background: url('+ detail.owner_user.identity.identity_validate.src +') no-repeat center; background-size: 100%;'">
      </div>
      <p>
        {{detail.owner_user.username}}
        <span>{{detail.owner_user.identity.identity_username}}</span>
      </p>
      <p>
        {{detail.owner_user.phone}}
      </p>
    </div>

    <div class="other_info" v-else>
      <div class="img" :style="'background: url('+ detail.object_user.identity.identity_validate.src +') no-repeat center; background-size: 100%;'">
      </div>
      <p>
        {{detail.object_user.username}}
        <span>{{detail.object_user.identity.identity_username}}</span>
      </p>
      <p>
        {{detail.object_user.phone}}
      </p>
    </div>
    
    <row :label="'租赁地址：'" :class="'border_top border_bottom margin_top'">
      <p slot="rowContent">{{detail.city}}市{{detail.road}}{{detail.street}}·{{detail.bed_title}}</p>
    </row>

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
        <span slot="rowContent">{{detail.remark}}</span>
      </row>

    </div>

    <div class="title">
      我的信息（承租方）
    </div>

    <div class="rent_content">

      <row :label="'姓名：'">
        <input slot="rowContent" class="input" type="text" />
      </row>

      <row :label="'身份证号：'">
        <input slot="rowContent" class="input" type="text" />
      </row>

      <row :label="'身份证：(人像面)'">
        <input slot="rowContent" class="input" type="text" />
      </row>

      <row :label="'手机号：'">
        <input slot="rowContent" class="input" type="text" />
      </row>
    </div>

    <preview />

    <div class="title">
      特别说明
    </div>

    <div class="particular_description">
      <p>1.承租方违约，出租方无需退还定金；出租方违约，出租方需退还定金，并赔偿与定金等额的钱给承租方。</p>
      <p>2.甲乙双方可采取银行、支付宝、微信转账等多种方式支付定金、押金、租金等款项。</p>
    </div>

    <div class="legal_description">
      <p>本功能由<a>浙江西湖律师事务所</a>制定，按照《中华人民共和国担保法》《中华人民共和国合同法》生成具有法律效力的电子协议/合同，条款公开透明，旨在保护双方权益，远离租房纠纷。</p>

      <div>
        <input type="checkbox">我已阅读并接受<a href="">《免责声明》</a>
      </div>

      <span>建议在签订前支付定金，确认签订即代表定金已支付</span>
    </div>

    <div class="contract_btn">
      <van-col :span="9">
        <van-button class="enter-btn operation-btn ignore">忽略</van-button>
      </van-col>
      <van-col :span="14">
        <van-button class="enter-btn operation-btn confirm">确认签订</van-button>
      </van-col>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Row from '@/components/contract/row.vue';
import Bar from '@/components/contract/bar.vue';
import Status from '@/components/contract/status.vue';
import Preview from '@/components/contract/preview.vue';

@Component({
  components: {
    Row,
    Bar,
    Status,
    Preview,
  },
})
export default class ContractMine extends Vue {
  @Prop({default: ''}) private detail!: any;

  get status(): string {
    return this.detail.is_self ? '等待对方签订' : '等待自己签订';
  }
}
</script>

<style lang="less" scoped>
.contract_response_wrap {
  padding-bottom: 60px;
}
</style>
