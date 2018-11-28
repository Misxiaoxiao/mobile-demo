<template>
  <div class="company_img_wrap">
    <div class="div_one">
      <div class="company_wrap_left">
        <div class="company_img photo"
        :style="'background-image: url(' + info.logo.src + ');'">
        </div>
        <div class="company_username text-ellipsis">{{info.name}}</div>
      </div>
      <!-- <div class="company_wrap_right">
        查看全部房源 <i class="iconfont">&#xe601;</i>
      </div> -->
    </div>
    <slot name="companyDetail"></slot>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class ConpanyImg extends Vue {
  @Prop({default: {}}) private info!: any;
}
</script>

<style lang="less">
.company_img_wrap {
  width: 70%; 
}
.company_img_wrap > .div_one {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .company_img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 15px;
    > img {
      width: 100%;
      height: 100%;
    }
  }
  .company_wrap_left {
    display: flex;
    align-items: center;
  }
  .company_wrap_right {
    font-size: 14px;
    color: #66D4C3;
    i {
      font-size: 14px;
    }
  }
}
</style>
