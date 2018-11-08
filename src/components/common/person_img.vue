<template>
  <div class="person_wrap">
    <div class="person_img_wrap">
      <img :src="info.avatar.src" alt="">
      <i class="gender_icon iconfont m" v-if="info.gender === 'm'">&#xe664;</i>
      <i class="gender_icon iconfont f" v-else>&#xe707;</i>
    </div>
    <div class="person_img_des">
      <p>{{info.username}}</p>
      {{info.client_attr.profession}}  {{info.client_attr.xingzuo}}
    </div>
    <div class="person_time" v-if="formatTime">
      {{formatTime}}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class PersonImg extends Vue {
  @Prop({default: {}}) private info!: any;
  @Prop({default: ''}) private formatTime!: string;
}
</script>

<style lang="less">
.m {
  color: #75B8EB;
}
.f {
  color: #FF7D7D;
}
.person_wrap {
  overflow: hidden;
  .person_img_wrap {
    float: left;
    position: relative;
    > img {
      display: inline-block;
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    .gender_icon {
      width: 16px;
      height: 16px;
      text-align: center;
      line-height: 16px;
      position: absolute;
      right: -2px;
      bottom: 5px;
      background-color: #fff;
      border-radius: 50%;
      font-size: 14px;
    }
  }
  .person_img_des {
    float: left;
    margin-left: 15px;
    color: #484848;
    > p {
      font-size: 14px;
    }
    font-size: 10px;
  }
  .person_time {
    float: right;
    font-size: 10px;
    color: #C4C4C4;
  }
}
</style>
