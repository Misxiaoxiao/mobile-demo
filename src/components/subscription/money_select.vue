<template>
  <div class="money_select">

    <van-col :span="6" class="form-label">租金预算</van-col>

    <van-col :span="15">
      <input class="form-text" type="text" placeholder="请输入">
    </van-col>

    <van-col :span="4" class="form_right_text">月/元</van-col>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MoneySelect extends Vue {}
</script>

<style lang="less">
.money_select {
  height: 48px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f3f4f5;
  .form_right_text {
    font-size: 15px;
    color: #666;
  }
}
</style>
