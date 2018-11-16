<template>
  <div class="address_select border_bottom">
    <div class="form-row" @click.stop="changePopup">
      <van-col :span="6" class="form-label">订阅地点</van-col>
      <van-col :span="16" class="border_bottom form-placeholder">
        请输入地铁、小区、商圈等
      </van-col>
      <van-col :span="2" class="border_bottom">
        <i class="iconfont form-right-icon">&#xe601;</i>
      </van-col>
    </div>
    <div class="form-row">
      <van-col :span="6" class="form-label"></van-col>
      <van-col :span="16" class="check_text">
        <input type="checkbox">&nbsp;&nbsp;同时订阅附近地铁沿线房源
      </van-col>
    </div>
    <van-popup v-model="showPopup" class="address_list_wrap" position="right">
      
      <address-search
      :changePopup="changePopup"
      />

    </van-popup>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import AddressSearch from './address_search.vue';

@Component({
  components: {
    AddressSearch,
  },
})
export default class AddressSelect extends Vue {
  private showPopup: boolean = false;
  private showInputSearchList: boolean = false;
  private addresses: any[] = [];
  private val: string = '';

  // @Prop('')

  private changePopup(): void {
    this.showPopup = !this.showPopup;
  }

  private callback(): void {
    // body
  }

  private request(): void {
    // body
  }
}
</script>

<style lang="less">
.border_bottom {
  border-bottom: 1px solid #f3f4f5;
}
.address_select > div {
  display: flex;
  align-items: center;
  .check_text {
    font-size: 14px;
    color: #999;
  }
}
.address_list_wrap {
  position: fixed;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  background-color: #f3f4f5;
  display: flex;
  flex-direction: column;
  .address_input_wrap {
    width: 100%;
    background-color: #fff;
    overflow: hidden;
    > p {
      padding: 10px 15px 0;
      font-size: 14px;
      color: #999;
    }
  }
}
</style>
