<template>
  <div class="person_wrap">
    <div class="person_img_wrap photo"
    :style="'background-image: url(' + info.avatar.src + ');'">
      <i class="gender_icon iconfont m" v-if="info.gender === 'm'">&#xe677;</i>
      <i class="gender_icon iconfont f" v-else>&#xe644;</i>
    </div>
    <div class="person_img_des">
      <div>
        <p class="text-ellipsis">{{info.username}}</p>
        <span class="active" v-if="info.identity_validate_status === 1">
          <i class="iconfont">&#xe658;</i>
          实名
        </span>
        <span v-else>未实名</span>
      </div>
      {{info.client_attr.profession === '' ? '职业未知' : info.client_attr.profession}}  {{info.client_attr.xingzuo ? ' | ' + info.client_attr.xingzuo : ''}}
      <slot name="userDetail"></slot>
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
  width: 100%;
  overflow: hidden;
  .person_img_wrap {
    float: left;
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    .gender_icon {
      width: 12px;
      height: 12px;
      position: absolute;
      right: -4px;
      bottom: 0px;
      background-color: #fff;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      border: 2px solid #fff;
      overflow: hidden;
    }
  }
  .person_img_des {
    float: left;
    margin-left: 15px;
    color: #484848;
    line-height: 18px;
    width: 70%;
    > div {
      font-size: 14px;
      margin-bottom: 5px;
      display: flex;
      align-items: center;
      > p {
        max-width: 60%;
      }
      > span {
        // float: right;
        display: inline-block;
        color: #ccc;
        background-color: #eee;
        border-radius: 10px;
        font-size: 12px;
        height: 15px;
        line-height: 15px;
        padding: 0 4px;
        margin-left: 5px;
        > i {
          font-size: 12px;
        }
      }
      > span.active {
        border: 1px solid #66D4C3;
        color: #66D4C3;
        background-color: #F0FFFD;
      }
    }
  }
  .person_time {
    float: right;
    font-size: 10px;
    color: #C4C4C4;
  }
}
</style>
