<template>
  <div class="contract_mine_wrap">

    <!-- <bar /> -->

    <div class="title">
      对方信息（出租方）
    </div>

    <div class="lessor_info">
      <div class="img">
        我是图片
      </div>
      <p>
        刘海
        <span>33432412412412434</span>
      </p>
      <p>
        13184386800
      </p>
    </div>
    
    <row :label="'租赁地址：'" :class="'border_top border_bottom margin_top'">
      <p slot="rowContent">上海市虹桥路188弄11号306室·单间·主卧非隔断朝南</p>
    </row>

    <row :label="'定金：'" :rightText="'元'" :class="'border_top border_bottom margin_top'">
      <span slot="rowContent">500</span>
    </row>

    <div class="title">
      约定内容
    </div>

    <div class="agreement_content">
      
      <row :label="'押金：'">
        <span slot="rowContent">2300元</span>
      </row>

      <row :label="'租金：'">
        <span slot="rowContent">2300元/月</span>
      </row>

      <row :label="'付款方式：'">
        <span slot="rowContent">3个月一付</span>
      </row>

      <row :label="'租期：'">
        <span slot="rowContent">2017-10-12 ~ 2018-10-11</span>
      </row>

      <row :label="'补充约定：'">
        <span slot="rowContent">水电按人头均摊，需另外交物业费，均按市场标准收费，室友必须是女生</span>
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

    <row :class="'border_top border_bottom margin_top'">
      <span slot="rowContent">
        预览完整协议
        <i class="iconfont back">&#xe601;</i>
      </span>
    </row>

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
import { Vue, Component } from 'vue-property-decorator';
import Row from '@/components/contract/row.vue';
import Bar from '@/components/contract/bar.vue';

@Component({
  components: {
    Row,
    Bar,
  },
})
export default class ContractMine extends Vue {}
</script>

<style lang="less" scoped>
.contract_mine_wrap {
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
  .lessor_info {
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
    padding: 7px 15px;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #efefef;
    background-color: #fff;
    button {
      border-radius: 5px;
    }
  }
}
</style>
