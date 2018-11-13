<template>
  <van-row v-if="bedDetail.myself">
    <van-col :span="4" class="collect_btn">
      <i class="iconfont">&#xe68d;</i>
      编辑
    </van-col>
    <van-col :span="20">
      <div class="btn wid100 button-b2-primary">
        签协议/合同
      </div>
    </van-col>
  </van-row>
  <van-row class="room_detail_footer_wrap" v-else>
    <van-col :span="4" class="collect_btn">
      <i class="iconfont">&#xe68d;</i>
      收藏
    </van-col>
    <van-col :span="20">
      <div class="btn button-b2-warn">
        私信联系
      </div>
      <div class="btn button-b2-primary">
        签协议/合同
        <p>该房源暂未开放</p>
      </div>
    </van-col>
  </van-row>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import { DetailModel } from '@/vuex/modules/residence/residence.model';

@Component
export default class RoomDetailFooter extends Vue {
  @State((state: any) => state.ResidenceModule.bed_detail) private bedDetail!: DetailModel;
}
</script>

<style lang="less">
.room_detail_footer_wrap {
  padding: 7px 15px 8px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #EFEFEF;
  .van-col {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    color: #fff;
  }
  .btn {
    height: 45px;
    width: 48%;
    > p {
      font-size: 10px;
    }
  }
  .wid100 {
    width: 100%;
  }
  .color_green {
    background-color: #66D4C3;
  }
  .collect_btn {
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
}
</style>
