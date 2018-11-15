<template>
  <a @click.prevent="collect" class="favor_room">
    <i class="iconfont">&#xe68d;</i>{{collected ? '已收藏' : '收藏'}}
  </a>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';

@Component
export default class FavorRoom extends Vue {
  @State((state: any) => state.AuthModule.ifLogged) private ifLogged!: boolean;

  private collect(): void {
    if (!this.ifLogged) {
      this.$toast('请先登录');
    } else {
      this.$toast('请下载');
    }
  }
}
</script>

<style lang="less">
.favor_room {
  width: 100%;
  height: 100%;
  color: #999999;
  font-size: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > i {
    font-size: 20px;
  }
}
</style>
