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
        <div slot="rowContent">
          <input class="input" type="text" v-model="username" />
          <span class="errMsg">{{usernameErr}}</span>
        </div>
      </row>

      <row :label="'身份证号：'">
        <div slot="rowContent">
          <input class="input" type="text" v-model="identityCode" />
          <span class="errMsg">{{identityCodeErr}}</span>
        </div>
      </row>

      <row :label="'身份证：(人像面)'">
        <div slot="rowContent">
          <upload-img :imageSrc="identityImgSrc" :change="changeIdentityImgSrcErr" />
          <span class="errMsg"><i class="iconfont">&#xe6c3;</i> {{identityImgSrcErr}}</span>
        </div>
      </row>

      <row :label="'手机号：'">
        <div slot="rowContent">
          <input class="input" type="text" v-model="phone" />
          <span class="errMsg">{{phoneErr}}</span>
        </div>
      </row>
    </div>

    <preview :category="detail.category" :status="0" />

    <div class="title">
      特别说明
    </div>

    <div class="particular_description">
      <p>1.承租方违约，出租方无需退还定金；出租方违约，出租方需退还定金，并赔偿与定金等额的钱给承租方。</p>
      <p>2.甲乙双方可采取银行、支付宝、微信转账等多种方式支付定金、押金、租金等款项。</p>
    </div>

    <div class="legal_description">
      <p>本功能由<a href="http://www.xihulvshi.cn/">浙江西湖律师事务所</a>制定，按照《中华人民共和国担保法》《中华人民共和国合同法》生成具有法律效力的电子协议/合同，条款公开透明，旨在保护双方权益，远离租房纠纷。</p>

      <div>
        <input type="checkbox" v-model="checked">我已阅读并接受<a :href="detail.contract_statement">《免责声明》</a>
      </div>

      <span>建议在签订前支付定金，确认签订即代表定金已支付</span>
    </div>

    <div class="contract_btn">
      <van-col :span="9">
        <van-button class="enter-btn operation-btn ignore">忽略</van-button>
      </van-col>
      <van-col :span="14">
        <van-button class="enter-btn operation-btn confirm" @click.stop="dealContract">确认签订</van-button>
      </van-col>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import Row from '@/components/contract/row.vue';
import Bar from '@/components/contract/bar.vue';
import Status from '@/components/contract/status.vue';
import Preview from '@/components/contract/preview.vue';
import UploadImg from '@/components/common/upload_img.vue';

@Component({
  components: {
    Row,
    Bar,
    Status,
    Preview,
    UploadImg,
  },
})
export default class ContractMine extends Vue {
  private username: string = ''; // 姓名
  private identityCode: string = ''; // 身份证
  private identityImgSrc: string = ''; // 证件图片
  private phone: string = ''; // 手机号
  private checked: boolean = false; // 复选框选中状态
  private usernameErr: string = ''; // 姓名错误
  private identityCodeErr: string = ''; // 身份证号错误
  private identityImgSrcErr: string = '虚假证件将承担法律责任'; // 身份证图片错误
  private phoneErr: string = ''; // 电话错误

  @Prop({default: ''}) private detail!: any;

  @State((state: any) => state.AccountModule.validate) private validate!: any;
  @State((state: any) => state.AccountModule.account) private account!: any;
  @Action('getUserValidate') private getUserValidate!: any;
  @Action('signContract') private signContract!: any;

  get status(): string {
    return this.detail.is_self ? '等待对方签订' : '等待自己签订';
  }

  private created(): void {
    this.getUserValidate({
      success: () => {
        this.username = this.validate.identity_username;
        this.identityCode = this.validate.identity_number;
        this.identityImgSrc = this.validate.photos[0] ? this.validate.photos[0].src : '';
        this.phone = this.account.user.phone;
      },
    });
  }

  private changeIdentityImgSrcErr(src: string): void {
    this.identityImgSrc = src;
  }

  private dealContract(): void {
    if (this.username === '') {
      this.usernameErr = '姓名不能为空';
    } else if (this.identityCode === '') {
      this.identityCodeErr = '身份证号不能为空';
    } else if (this.phone === '') {
      this.identityCodeErr = '电话号不能为空';
    } else {
      this.signContract({
        data: {
          id: this.detail.id,
          phone: this.phone,
          identity_username: this.username,
          identity_number: this.phone,
          identity_validate: this.identityImgSrc,
        },
        success: () => {
          this.$dialog.confirm({
            title: '提醒',
            message: '确认签订后即时生效。协议/合同具备法律效力，请跟对方沟通明确，并认真核对信息。'
          }).then(() => {
            // on confirm
            window.location.reload();
          }).catch(() => {
            // on cancel
          });
        },
      });
    }
  }
}
</script>

<style lang="less" scoped>
.contract_response_wrap {
  padding-bottom: 60px;
  .errMsg {
    color: #FF7D7D;
    font-size: 12px;
    margin-right: 20px;
    > i {
      font-size: 10px;
    }
  }
}
</style>
