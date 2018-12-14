<template>
  <loading v-if="requesting" />

  <div v-else>
    <div class="contract_wrap" v-if="ifWeixin">
      <div class="ignore" v-if="ignore || status === 2">
        <div class="msg_img"></div>
        <span class="msg_text">已忽略，请直接关闭网页或返回</span>
        <common-bar />
      </div>

      <contract-mine v-else-if="status === 0 && contractDetail.myself" :detail="contractDetail" />

      <contract-response
      v-else-if="contractDetail.can_response && status === 0"
      :detail="contractDetail"
      :ignore="changeIgnore" />

      <contract-finish v-else-if="status === 1" :detail="contractDetail" />

      <!-- <contract-refuse v-else-if="status === 2" /> -->

      <contract-invalid v-else-if="status === 3" :detail="contractDetail" />

      <contract-cancel v-else-if="status === 4" :detail="contractDetail" />

      <div class="nothing" v-else>
        <div class="msg_img"></div>
        <span class="msg_text">无法查看，请直接关闭网页或返回</span>
      </div>

    </div>

    <div class="contract_wrap" v-else>
      <div class="msg_img"></div>
      <span class="msg_text">请在微信客户端打开链接</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import Platform from '@/utils/platform';
import Loading from '@/components/common/loading.vue';
import CommonBar from '@/components/common/bar.vue';
import ContractResponse from './contract_response.vue';
import ContractFinish from './contract_finish.vue';
import ContractMine from './contract_mine.vue';
import ContractRefuse from './contract_refuse.vue';
import ContractInvalid from './contract_invalid.vue';
import ContractCancel from './contract_cancel.vue';

@Component({
  components: {
    Loading,
    ContractMine,
    ContractResponse,
    ContractFinish,
    ContractRefuse,
    ContractInvalid,
    ContractCancel,
    CommonBar,
  },
})
export default class ContractIndex extends Vue {
  private ifWeixin: boolean = false;
  private ignore: boolean = false;
  private category: number = 0; // 1 合同 2 协议
  private static: number = 0; //

  @State((state: any) => state.ContractModule.contract_detail) private contractDetail!: any;
  @State((state: any) => state.ContractModule.requesting) private requesting!: boolean;

  @Action('getContractDetail') private getContractDetail: any;
  @Action('configShareInfo') private configShareInfo: any;

  get status(): any { // 0 未签订 1 已签订 2 已拒签 3 已失效 4 已撤销
    switch (this.contractDetail.negotiation_status) {
      case 0:
        return 0;
      case 1:
        return 1;
      case 3:
        return 1;
      case 4:
        return 1;
      case 5:
        return 1;
      case 2:
        return 2;
      case 7:
        return 3;
      case 8:
        return 4;
      default:
        return -1;
    }
  }

  private created(): void {
    const platform = new Platform();
    this.ifWeixin = platform.checkWeixin();

    if (this.ifWeixin) {
    // if (true) {
      this.getContractDetail({
        data: {
          id: this.$route.params.id,
        },
        success: () => {
          document.title = this.contractDetail.category === 1 ? '租赁合同' : '定金协议';
          this.contractDetail.category === 1
            ? this.configShareInfo({
              info: {
                title: '签订租赁合同',
                link: window.location.href.split('?')[0],
                desc: '一键签订租赁合同，快捷方便\n专业租赁合同，保障双方权益',
                imgUrl: 'http://img.17zub.com/contract_invte_weixin.png',
              },
            })
            : this.configShareInfo({
              info: {
                title: '[zuber]我创建了定金协议',
                link: window.location.href.split('?')[0],
                desc: '一键签订定金协议，快捷方便\n专业定金协议，保障双方权益',
                imgUrl: 'http://img.17zub.com/contract_invte_weixin.png',
              },
            });
        },
      });
    }
  }

  private changeIgnore(): void {
    this.ignore = true;
  }
}
</script>

<style lang="less">
.contract_wrap {
  width: 100%;
  background:rgba(244,244,244,1);
  > .time {
    line-height: 30px;
    font-size: 12px;
    color: #ff6600;
    background-color: rgba(242, 242, 242, 1);
  }
  .title {
    padding: 15px 15px 6px;
    color: #484848;
    font-size: 14px;
  }
  .border_top {
    border-top: 1px solid #efefef;
  }
  .border_bottom {
    border-bottom: 1px solid #efefef;
  }
  .margin_top {
    margin-top: 10px;
  }
  .other_info {
    font-size: 14px;
    border-bottom: 1px solid #efefef;
    padding: 15px;
    background-color: #fff;
    font-weight: 500;
    > p {
      margin-top: 5px;
      > span {
        margin: 0 10px;
      }
      &:last-child {
        color: #66D4C3;
      }
    }
    .img {
      width: 100%;
      height: 180px;
      border: 1px solid #eee;
    }
  }
  .agreement_content {
    padding: 7px 0;
    border-bottom: 1px solid #efefef;
    background-color: #fff;
    > .contract_row {
      padding: 7px 15px;
    }
  }
  .rent_content {
    padding: 7px 15px;
    border-bottom: 1px solid #efefef;
    background-color: #fff;
    > .contract_row {
      padding: 12px 0px;
      border-bottom: 1px solid #efefef;
      &:last-child {
        border: 0;
      }
    }
  }
  .particular_description {
    padding: 7px 15px;
    border-bottom: 1px solid #efefef;
    font-size: 14px;
    background-color: #fff;
    p {
      padding: 3px 0;
    }
  }
  .back {
    font-size: 14px;
    float: right;
  }
  .legal_description {
    font-size: 12px;
    padding: 30px 15px 15px;
    text-align: center;
    background-color: #fff;
    a {
      color: #75B56A;
    }
    > p {
      text-align: left;
    }
    > div {
      height: 20px;
      margin: 20px 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    > span {
      color: #FF6600;
    }
  }
  .contract_btn {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 7px 15px;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #efefef;
    background-color: #fff;
    z-index: 99;
    .operation-btn {
      padding: 0;
    }
    button {
      border-radius: 5px;
    }
  }
  .msg_img {
    width: 90px;
    height: 90px;
    position: absolute;
    top: 20%;
    right: 0;
    left: 0;
    margin: auto;
    background: url('../../assets/fenzu@2x.png') no-repeat center;
    background-size: 100%;
  }
  .msg_text {
    position: absolute;
    top: 37%;
    right: 0;
    left: 0;
    margin: auto;
    text-align: center;
    font-size: 16px;
    color: #333;
  }
  > .nothing {
    height: 100%;
    > .msg_img {
      background: url('../../assets/fenzu1@2x.png') no-repeat center;
      background-size: 100%;
    }
  }
}
</style>
