<template>
  <div class="refresh_item">
    <div class="person_img" :style="'background: url(' + detail.user.avatar.small + ') no-repeat center; background-size: cover;'"></div>
    <div class="person_name text-ellipsis">{{detail.user.username}}</div>
    <div class="person_des">{{detail.label}}</div>
    <div class="person_time">{{detail.format_create_time ? detail.format_create_time : ''}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class RefreshItem extends Vue {
  @Prop({default: ''}) private detail!: any;
}
</script>

<style lang="less" scoped>
.refresh_item {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #999;
  .person_img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 12px;
    border: 1px solid #eee;
  }
  .person_name {
    color: #333;
    margin-right: 3px;
    max-width: 60px;
  }
  .person_time {
    flex: 1;
    text-align: right;
  }
}
</style>
