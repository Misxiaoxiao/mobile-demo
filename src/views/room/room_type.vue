<template>
  <div class="room_type_wrap" v-if="type !== ''">
    <i class="iconfont">&#xe6c3;</i>{{type}}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import { DetailModel } from '@/vuex/modules/residence/residence.model';

@Component
export default class RoomType extends Vue {
  private type: string = '';

  @State((state: any) => state.ResidenceModule.bed_detail) private bedDetail!: DetailModel;

  private changeType(): void {
    // 已出租
    if (this.bedDetail.bed && this.bedDetail.bed.state === 2) {
      this.type = '该房源已出租';
      return;
    }
    // 已删除
    if (this.bedDetail.bed && this.bedDetail.bed.status === 1) {
      this.type = '该房源已删除';
      return;
    }
    // 已失效
    if (this.bedDetail.room && this.bedDetail.room.may_expire) {
      this.type = '该房源许久未更新，可能已出租';
      return;
    }
  }

  private mounted(): void {
    this.changeType();
  }

}
</script>

<style lang="less">
.room_type_wrap {
  font-size: 12px;
  color: #cc9900;
  line-height: 40px;
  padding: 0 15px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 204, 1);
  > i {
    font-size: 10px;
    margin-right: 5px;
  }
}
</style>
