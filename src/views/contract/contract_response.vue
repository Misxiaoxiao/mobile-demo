<template>
  <div class="contract_response_wrap" v-if="detail.id !== ''">

    <bar />

    <status :status="'等待自己签订'" />

    <div class="title">
      对方信息（{{detail.owner_apply ? '出租方' : '承租方'}}）
    </div>

    <div class="other_info" v-if="detail.owner_apply">
      <div class="img" :style="'background: url('+ detail.owner_user.identity.identity_validate.src +') no-repeat center; background-size: 100%;'">
      </div>
      <p>
        {{detail.owner_user.identity.identity_username}}
        <span>{{detail.owner_user.identity.identity_number}}</span>
      </p>
      <p>
        {{detail.owner_user.phone}}
      </p>
    </div>

    <div class="other_info" v-else>
      <div class="img" :style="'background: url('+ detail.object_user.identity.identity_validate.src +') no-repeat center; background-size: 100%;'">
      </div>
      <p>
        {{detail.object_user.identity.identity_username}}
        <span>{{detail.object_user.identity.identity_number}}</span>
      </p>
      <p>
        {{detail.object_user.phone}}
      </p>
    </div>
    
    <row :label="'租赁地址：'" :class="'border_top border_bottom margin_top'">
      <p slot="rowContent">{{detail.city}}市{{detail.road}}{{detail.street}}·{{detail.bed_title}}</p>
    </row>

    <row v-if="detail.earnest_money" :label="'定金：'" :rightText="'元'" :class="'border_top border_bottom margin_top'">
      <span slot="rowContent">{{detail.earnest_money}}</span>
    </row>

    <div class="title">
      约定内容
    </div>

    <div class="agreement_content">
      
      <row :label="'押金：'">
        <span slot="rowContent">{{detail.rent_deposit}}元</span>
      </row>

      <row :label="'租金：'">
        <span slot="rowContent">{{detail.rent_price}}元/月</span>
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

    <div class="title">
      我的信息（{{detail.owner_apply ? '承租方' : '出租方'}}）
    </div>

    <div class="rent_content">

      <row :label="'姓名：'" :ifErr="usernameErr">
        <div slot="rowContent" ref="user">
          <input class="input" type="text" v-model="username" />
        </div>
      </row>

      <row :label="'身份证号：'" :ifErr="identityCodeErr">
        <div slot="rowContent" ref="identityCode">
          <input class="input" type="text" v-model="identityCode" />
        </div>
      </row>

      <row :label="'身份证：(人像面)'" :ifErr="identityImgSrcErr">
        <div slot="rowContent" ref="identityImg">
          <upload-img :imageSrc="identityImgSrc" :change="changeIdentityImgSrcErr" />
          <span class="errMsg"><i class="iconfont">&#xe6c3;</i> 虚假证件将承担法律责任</span>
        </div>
      </row>

      <row :label="'手机号：'" :ifErr="phoneErr">
        <div slot="rowContent" ref="phone">
          <input class="input" type="text" v-model="phone" />
        </div>
      </row>
    </div>

    <preview :category="detail.category" :status="0" />

    <div class="title">
      特别说明
    </div>

    <div class="particular_description" v-if="detail.category === 2">
      <p>1.承租方违约，出租方无需退还定金；出租方违约，出租方需退还定金，并赔偿与定金等额的钱给承租方。</p>
      <p>2.甲乙双方可采取银行、支付宝、微信转账等多种方式支付定金、押金、租金等款项。</p>
    </div>

    <div class="particular_description" v-else>
      <p>1.建议在补充约定中明确提前退租的处理方式，比如赔偿违约金后按实际居住时间结算费用。因未约定而产生的纠纷，平台将无法受理。</p>
      <p>2.甲乙双方可采取银行、支付宝、微信转账等多种方式支付定金、押金、租金等款项。</p>
    </div>

    <div class="legal_description">
      <p>本功能由<a href="http://www.xihulvshi.cn/">浙江西湖律师事务所</a>制定，按照《中华人民共和国担保法》《中华人民共和国合同法》生成具有法律效力的电子协议/合同，条款公开透明，旨在保护双方权益，远离租房纠纷。</p>

      <div>
        <input type="checkbox" v-model="checked">我已阅读并接受<a :href="detail.contract_statement">《免责声明》</a>
      </div>

      <span v-if="detail.category === 2">{{detail.owner_apply ? '建议在签订前支付定金，确认签订即代表定金已支付' : '建议在签订前收取定金，确认签订即代表定金已收取'}}</span>
    </div>

    <div class="contract_btn">
      <van-col :span="9">
        <van-button class="enter-btn operation-btn ignore" @click="ignore">忽略</van-button>
      </van-col>
      <van-col :span="14">
        <van-button class="enter-btn operation-btn confirm" @click.stop="dealContract" :disabled="!checked">确认签订</van-button>
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
  private checked: boolean = true; // 复选框选中状态
  private usernameErr: boolean = false; // 姓名错误
  private identityCodeErr: boolean = false; // 身份证号错误
  private identityImgSrcErr: boolean = false; // 身份证图片错误
  private phoneErr: boolean = false; // 电话错误

  @Prop({default: ''}) private detail!: any;
  @Prop({default: ''}) private ignore!: any;

  @State((state: any) => state.AccountModule.validate) private validate!: any;
  @State((state: any) => state.AccountModule.account) private account!: any;
  @Action('getUserValidate') private getUserValidate!: any;
  @Action('signContract') private signContract!: any;

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

  private scrollTo(x: any) {
    const Window: any = window;
    const doc: any = document;
    doc.documentElement.scrollTop = x - 15;
    Window.pageYOffset = x - 15;
    doc.body.scrollTop = x - 15;
  }

  private dealContract(): void {
    this.usernameErr = false;
    this.identityCodeErr = false;
    this.identityImgSrcErr = false;
    this.phoneErr = false;
    let top: number = 0;
    if (this.username === '') {
      this.usernameErr = true;
      if (top === 0) {
        const ele: any = this.$refs.user;
        top = ele.offsetTop;
      }
      this.scrollTo(top);
    }
    if (this.identityCode === '') {
      this.identityCodeErr = true;
      if (top === 0) {
        const ele: any = this.$refs.identityCode;
        top = ele.offsetTop;
      }
      this.scrollTo(top);
    }
    if (this.phone === '' && !(/^1[34578]\d{9}$/.test(this.phone))) {
      this.identityCodeErr = true;
      if (top === 0) {
        const ele: any = this.$refs.identityImg;
        top = ele.offsetTop;
      }
      this.scrollTo(top);
    }
    if (this.identityImgSrc === '') {
      this.identityImgSrcErr = true;
      if (top === 0) {
        const ele: any = this.$refs.phone;
        top = ele.offsetTop;
      }
      this.scrollTo(top);
    }
    if (!this.usernameErr && !this.identityCodeErr && !this.identityImgSrcErr && !this.phoneErr) {
      this.$dialog.confirm({
        title: '提醒',
        message: '确认签订后即时生效。协议/合同具备法律效力，请跟对方沟通明确，并认真核对信息。',
      }).then(() => {
        // on confirm
        this.signContract({
          data: {
            id: this.detail.id,
            phone: this.phone,
            identity_username: this.username,
            identity_number: this.phone,
            identity_validate: this.identityImgSrc,
          },
          success: () => {
            window.location.reload();
          },
        });
      }).catch(() => {
        // on cancel
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
