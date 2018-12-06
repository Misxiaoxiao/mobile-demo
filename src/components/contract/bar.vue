<template>
  <van-row class="bar_wrap">
    <van-col :span="17">
      <p>你正在使用<span>zuber定金协议/租赁合同</span></p>
      <span>zuber，一个靠口碑发展壮大的白领租房平台，真房源，在线视频看房，高效省心</span>
    </van-col>
    <van-col :span="6">
      <div></div>
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
  background-color: rgba(245,248,255,1);
  font-size: 12px;
  padding: 7px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  > .van-col {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    > p {
      font-size: 14px;
      color: #484848;
      font-weight:500;
      > span {
        color: #3B8CF3;
      }
    }
    > span {
      color: #939496;
      font-size: 12px;
      margin-top: 5px;
    }
    > div {
      width: 92px;
      height: 80px;
      background: url('../../assets/Group_19@2x.png') no-repeat center;
      background-size: 100% 95%;
    }
  }
}
</style>
