<template>
  <div class="sub_form">

    <city-select
    :city="subCondition.city"
    :change="changeCity"
    />
    
    <address-select
    :address="subCondition.address"
    :change="changeAddress"
    />

    <money-select />

    <time-select />

    <other-select />

    <div class="subscription_footer">
      <div class="submit_btn">提交</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import CitySelect from '@/components/subscription/city_select.vue';
import AddressSelect from '@/components/subscription/address_select.vue';
import MoneySelect from '@/components/subscription/money_select.vue';
import TimeSelect from '@/components/subscription/time_select.vue';
import OtherSelect from '@/components/subscription/other_select.vue';

@Component({
  components: {
    CitySelect,
    AddressSelect,
    MoneySelect,
    TimeSelect,
    OtherSelect,
  },
})
export default class SubscriptionForm extends Vue {
  private subCondition: any = {
    city: '北京',
    address: {
      name: '',
      isWork: false,
    },
    money: 0,
    time: '', // 2018-11-28
    other: {
      item: 0, // 0 表示没有  1 为整租  2为合租
      bedCount: [], // 0 不限
      gender: 0, //
      roomTypeAffirm: [],
    },
  };

  @Action('searchAddressByKeyword') private searchAddressByKeyword!: any;

  private changeCity(city: string): void {
    this.subCondition.city = city;
  }

  private changeAddress(obj: any): void {
    this.subCondition.address = Object.assign({}, this.subCondition.address, obj);
  }
}
</script>

<style lang="less">
.sub_form {
  margin-top: 10px;
  box-sizing: border-box;
  padding-left: 15px;
  background-color: #fff;
}
.subscription_footer {
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  background-color: #fff;
  padding: 7px 15px;
  .submit_btn {
    width: 100%;
    line-height: 45px;
    text-align: center;
    font-size: 16px;
    color: #fff;
    background-color: #66D4C3;
    border-radius: 3px;
  }
}
</style>
