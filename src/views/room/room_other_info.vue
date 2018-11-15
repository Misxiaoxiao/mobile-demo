<template>
  <div class="room_other_info_wrap" v-if="otherInfo.length > 0">
    <h4>其他单间情况</h4>
    <ul>
      <li
      class="room_other_item"
      v-for="(n, i) in otherInfo"
      :key="i"
      @click="view(n)"
      >
        <div v-if="n.state === 1">
          <div class="room_other_item_left">
            <h5>{{n.type + (n.title ? '-' + n.title : '')}}</h5>
            <p>
              <span v-if="n.orientation !== ''">{{n.orientation}}·</span>
              <span v-if="n.squareMeter !== 0">{{n.squareMeter}}㎡·</span>
              <span v-if="n.privateBathroom !== 0">独卫·</span>
              <span v-if="n.veranda !== 0">阳台·</span>
              <span v-if="n.window !== 0">飘窗·</span>
              <span>{{n.dateDetail}}</span>
            </p>
          </div>
          <div class="room_other_item_right">
            <span>{{n.money}}元/月</span><i class="iconfont">&#xe601;</i>
          </div>
        </div>
        <div v-if="n.state === 2">
          <div class="room_other_item_left">
            {{n.type}}
          </div>
          <div class="room_other_item_right">
            室友未知
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import { ROOM_CONDITION_TYPE_ITEMS } from '@/model/index';
import { DetailModel } from '@/vuex/modules/residence/residence.model';

@Component
export default class RoomOtherInfo extends Vue {
  @State((state: any) => state.ResidenceModule.bed_detail) private bedDetail!: DetailModel;

  get otherInfo(): any[] {
    if (this.bedDetail.other_beds) {
      return this.bedDetail.other_beds.map((n: any) => {
        return {
          biz: this.bedDetail.room.biz,
          id: n.id,
          state: n.state,
          type: this.setType(n.type),
          title: n.title,
          money: n.money,
          sex: n.sex ? n.sex : '',
          orientation: n.orientation ? n.orientation : '',
          squareMeter: n.square_meter ? n.square_meter : 0,
          privateBathroom: n.private_bathroom ? n.private_bathroom : 0,
          veranda: n.veranda ? n.veranda : 0,
          window: n.window ? n.window : 0,
          dateDetail: n.dateDetail,
        };
      });
    }
    return [];
  }

  private setType(type: number): string {
    for (const n of ROOM_CONDITION_TYPE_ITEMS) {
      if (n.value === type) {
        return n.key;
      }
    }
    return '';
  }

  private view(item: any): void {
    if (item.id !== this.$route.params.id) {
      this.$router.push({name: 'bedDetail', params: {id: item.id}, query: {biz: item.biz}});
    }
  }
}
</script>

<style lang="less">
.room_other_info_wrap {
  color: #333333;
  margin-top: 10px;
  padding: 15px 15px 0;
  background-color: #fff;
  > h4 {
    font-size: 18px;
    line-height: 25px;
  }
  li.room_other_item > div {
    box-sizing: border-box;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 42px;
    border-bottom: 1px solid #EBEBEB;
    .room_other_item_left {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      font-size: 14px;
      > h5 {
        font-size: 14px;
        margin-bottom: 5px;
      }
      > p {
        font-size: 12px;
        color: #999999;
      }
    }
    .room_other_item_right {
      color: #CCCCCC;
      font-size: 12px;
      > span {
        font-size: 14px;
        color: #FB686B;
      }
      > i {
        margin-left: 5px;
        font-size: 12px;
      }
    }
  }
  li.room_other_item:last-child > div {
    border: 0;
  }
}
</style>
