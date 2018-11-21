<template>
  <div class="contract_list_wrap">
    <div class="contract_list_header">
      <div class="left">
        租赁合同
        <span class="color-denger">
          <i class="iconfont"></i>
          对方有修改，请重新签订
        </span>
      </div>
      <div class="right">
        <span class="color-primary">待对方签</span>
      </div>
    </div>
    <div class="contract_list_content">
      <h4>上海市延安西路1888号11号306室·单间·主卧非隔 断朝南</h4>
      <div class="contract_list_user">
        <span>出租方：陈伟霆</span>
        <span>承租方：迪丽热巴</span>
      </div>
      <p>500元（2017-10-12～2018-10-13）</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ContractList extends Vue {}
</script>

<style lang="less">
.contract_list_wrap {
  width: 100%;
  box-sizing: border-box;
  padding: 12px 0 12px 12px;
  background-color: #fff;
  margin-top: 5px;
  .contract_list_header {
    border-bottom: 1px solid #eee;
    padding: 0 12px 12px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      font-size: 15px;
      font-weight:500;
      color: #484848;
      > span {
        font-weight: 400px;
        font-size: 12px;
        margin-left: 12px;
      }
    }
    .right {
      font-size: 14px;
    }
  }
  .contract_list_content {
    padding: 11px 12px 0 0;
    > h4 {
      font-size: 15px;
      color: #484848;
      line-height: 22px;
    }
    .contract_list_user {
      font-size: 13px;
      margin-top: 12px;
      color: #888888;
      > span {
        margin-right: 30px;
        line-height: 18px;
      }
      > span:last-child {
        margin: 0;
      }
    }
    > p {
      color: #888;
      font-size: 13px;
      margin-top: 6px;
    }
  }
}

.color {
  &-primary {
    color: #888888;
  }
  &-warn {
    color: #FFC673;
  }
  &-denger {
    color: #FF7D7D;
  }
}
</style>
