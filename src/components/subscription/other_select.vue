<template>
  <div class="other_select">
    <van-col :span="6" class="other_select_label">租房要求</van-col>
    <van-col :span="18">
      <div class="other_select_item" @click.stop="changeOpenOne">整租</div>
      <div class="other_select_item" @click.stop="changeOpenTwo">合租</div>
    </van-col>

    <van-popup
    v-model="isOpenOne"
    position="bottom"
    class="popup_wrap"
    :close-on-click-overlay="false"
    >
      <div class="popup_header">
        <span>取消</span>
        <span class="active">确定</span>
      </div>
      <div class="popup_section">
        <div class="popup_section_label">户型</div>
        <div class="popup_section_wrap">
          <div class="button-b1">不限</div>
          <div class="button-b1">1室</div>
          <div class="button-b1">2室</div>
          <div class="button-b1">3室</div>
          <div class="button-b1">4室+</div>
        </div>
      </div>
      <div class="popup_section">
        <div class="popup_section_label">
          房源类型 <i class="iconfont">&#xe604;</i>
        </div>
        <div class="popup_section_wrap">
          <div class="button-b1">不限</div>
          <div class="button-b1">转租房源</div>
          <div class="button-b1">业主出租</div>
          <div class="button-b1">长租公寓</div>
        </div>
      </div>
    </van-popup>

    <van-popup
    v-model="isOpenTwo"
    position="bottom"
    class="popup_wrap"
    :close-on-click-overlay="false"
    >
      <div class="popup_header">
        <span>取消</span>
        <span class="active">确定</span>
      </div>
      <div class="popup_section">
        <div class="popup_section_label">户型</div>
        <div class="popup_section_wrap">
          <div class="button-b1">不限</div>
          <div class="button-b1">女生入住</div>
          <div class="button-b1">男生入住</div>
        </div>
      </div>
      <div class="popup_section">
        <div class="popup_section_label">
          房源类型 <i class="iconfont">&#xe604;</i>
        </div>
        <div class="popup_section_wrap">
          <div class="button-b1">不限</div>
          <div class="button-b1">室友合租</div>
          <div class="button-b1">转租房源</div>
          <div class="button-b1">业主出租</div>
          <div class="button-b1">长租公寓</div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class OtherSelect extends Vue {
  private isOpenOne: boolean = false;
  private isOpenTwo: boolean = false;

  private changeOpenOne(): void {
    this.isOpenOne = !this.isOpenOne;
  }

  private changeOpenTwo(): void {
    this.isOpenTwo = !this.isOpenTwo;
  }
}
</script>

<style lang="less">
.other_select {
  padding: 15px 0;
  overflow: hidden;
  .other_select_label {
    margin-top: 6px;
    font-size: 15px;
    color: #666;
  }
  .other_select_item {
    width: 125px;
    line-height: 30px;
    text-align: center;
    font-size: 14px;
    color: #999;
    border: 1px solid #999;
    border-radius: 3px;
    margin-bottom: 15px;
  }
  .other_select_item:last-child {
    margin: 0;
  }
}
.popup_header {
  height: 50px;
  background-color: #fff;
  padding: 0 15px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > span {
    color: #333;
    font-size: 16px;
  }
  > span.active {
    color: #BFE7E1;
  }
}
.popup_wrap {
  background-color: #fff;
}
.popup_section {
  padding: 10px 15px 20px;
  overflow: hidden;
  .popup_section_label {
    color: #999;
    font-size: 16px;
    > i {
      color: #66D4C3;
    }
  }
  .popup_section_wrap {
    > div {
      width: 22.3%;
      line-height: 30px;
      font-size: 14px;
      margin: 10px 1% 0;
      float: left;
      border-radius: 2px;
    }
  }
}
</style>
