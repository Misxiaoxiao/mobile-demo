<template>
  <div class="locate_city_wrap">
    <p>当前城市</p>
    <div class="locate_city" @click.stop="city && change({city})">
      <i class="locate_city_icon"></i>
      {{locating ? '定位中···' : (city === '' ? '定位失败' : city)}}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class LocateCity extends Vue {
  @Prop({default: ''}) private city!: string;
  @Prop({default: false}) private locating!: boolean;
  @Prop({default: {}}) private change!: any;
}
</script>

<style lang="less">
.locate_city_wrap {
  background-color: #F4F4F4;
  p {
    line-height: 31px;
    font-size: 12px;
    padding: 0 15px;
  }
  .locate_city {
    line-height: 55px;
    font-size: 15px;
    color: #484848;
    background-color: #fff;
    padding: 0 15px;
    display: flex;
    align-items: center;
    .locate_city_icon {
      width: 14px;
      height: 12px;
      padding-right: 5px;
      background: url('../../assets/address@2x.png') no-repeat center;
      background-size: 50%;
    }
  }
}
</style>
