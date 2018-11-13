<template lang="html">
  <div class="room_detail_header">
    <div class="room_detail_header_left">
      <i class="iconfont" @click.stop="goBack">&#xe603;</i>
    </div>
    <div class="room_detail_header_title">
      {{headerTitle}}
    </div>
    <div class="room_detail_header_right">
      <span @click.stop="changeShow">举报</span>
      <span @click.stop="changeShow">
        <i class="iconfont share_cion">&#xe66e;</i>
      </span>
      <van-popup v-model="show">
        <p>
          <i class="iconfont warn">&#xe6c3;</i>
          请下载App查看
        </p>
        <div class="btn" @click.stop="changeShow">确定</div>
      </van-popup>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import { DetailModel } from '@/vuex/modules/residence/residence.model';

@Component
export default class RoomDetailHeader extends Vue {
  private show = false;

  @State((state: any) => state.ResidenceModule.bed_detail) private bedDetail!: DetailModel;

  get headerTitle(): string {
    if (JSON.stringify(this.bedDetail) !== '{}') {
      return this.bedDetail.room.rent_type === 1 ? '整租房源' : '合租房源';
    }
    return '';
  }

  private goBack(): void {
    if (window.history.length <= 1) {
      this.$router.push({path: '/'});
    } else {
      this.$router.back();
    }
  }

  private changeShow(): void {
    this.show = !this.show;
  }
}
</script>

<style lang="less">
.share_cion {
  color: #5B5B5B;
  font-size: 20px;
}
.room_detail_header {
  box-sizing: border-box;
  width: 100%;
  padding: 12px 15px;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #EBEBEB;
}
.room_detail_header_left {
  width: 20%;
}
.room_detail_header_title {
  font-size: 18px;
  color: #333;
  font-weight: 500;
}
.room_detail_header_right {
  width: 20%;
  color: #999999;
  display: flex;
  font-size: 16px;
  justify-content: space-between;
  .van-popup {
    width: 80%;
    padding: 20px;
    border-radius: 3px;
    font-size: 16px;
    color: #333;
    p {
      margin-bottom: 50px;
      .warn {
        color: #ffc673;
      }
    }
    .btn {
      color: #66d4c3;
      text-align: right;
    }
  }
}
</style>
