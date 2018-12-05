<template>
  <van-row class="bar_wrap">
    <van-col :span="17">
      <p>你正在使用zuber定金协议/租赁合同</p>
      <span>zuber，一个靠口碑发展壮大的白领租房平台，真房源，在线视频看房，高效省心</span>
    </van-col>
    <van-col :span="6">
      <i>zuber</i>
    </van-col>
  </van-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class ContractBar extends Vue {}
</script>

<style lang="less" scoped>
.bar_wrap {
  background-color: rgb(255, 242, 190);
  color: #CFA55A;
  font-size: 12px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  > .van-col {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    > p {
      font-size: 14px;
    }
    > span {
      font-size: 12px;
      margin-top: 5px;
    }
    > i {
      font-family: 'ArialRoundedMTBold', 'Arial Rounded MT Bold';
      font-weight: 400;
      font-style: normal;
      font-size: 32px;
      color: #00CCCC;
    }
  }
}
</style>
