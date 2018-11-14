<template>
  <div class="room_list_item_wrap">
    <div class="room_list_item" @click.stop="view(roomItem)">
      <div class="room_list_item_left">
        <my-image :src="roomItem.photo" :hasVideo="roomItem.hasVideo" />
      </div>
      <div class="room_list_item_right">
        <h4>{{roomItem.fullTitle}}</h4>
        <p>{{roomItem.roomTitle}}</p>
        <div class="room_type" v-show="(typeof roomItem.types) === 'string'">
          {{roomItem.types}}
        </div>
        <div class="room_type" v-show="(typeof roomItem.types) === 'object'">
          <span v-for="(item, i) in roomItem.types" :key="i" v-show="item !== ''">{{item}}</span>
        </div>
        <div class="room_info">
          <p>{{roomItem.money}}<span>元/月</span></p>
          <span>{{roomItem.refreshTime}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import MyImage from '@/components/common/image.vue';
import { ROOM_CONDITION_TYPE_ITEMS } from '@/model/index';

@Component({
  components: {
    MyImage,
  },
})
export default class RoomList extends Vue {
  @Prop({default: {}}) private room!: any;

  get roomItem(): any {
    const room = this.room;
    if (room) {
      let types: any = '';
      let roomTitle: string = '';
      if (room.biz) { // 如果为b端房源
        types = room.biz_attr.beds[0].number;
        roomTitle = room.biz_attr.beds[0].title;
      } else { // 如果为c端房源
        roomTitle = `${this.setType(room.client_attr.beds[0].type)}·${room.client_attr.beds[0].title}`;
        types = [
          room.client_attr.beds[0].dateDetail,
          room.client_attr.beds[0].sex === 0 ? '' : (room.client_attr.beds[0].sex === 1 ? '仅限男生' : '仅限女生'),
          room.client_attr.beds[0].short_rent === 0 ? '' : '可短租',
        ];
      }
      const dataInfo = {
        biz: room.biz,
        roomId: room.biz ? room.biz_attr.beds[0].id : room.client_attr.beds[0].id,
        fullTitle: room.full_title,
        roomTitle,
        photo: room.biz ? room.biz_attr.beds[0].photo.src : room.client_attr.beds[0].photo.src,
        types,
        money: room.biz ? room.biz_attr.beds[0].money : room.client_attr.beds[0].money,
        refreshTime: room.biz ? room.biz_attr.beds[0].refresh_time : room.client_attr.beds[0].refresh_time,
        hasVideo: room.biz ? room.biz_attr.beds[0].has_video : room.client_attr.beds[0].has_video,
      };
      return dataInfo;
    }
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
    const { href } = this.$router.resolve({
      name: 'bedDetail',
      params: {
        id: item.roomId,
      },
      query: {
        biz: item.biz,
      },
    })
    window.open(href, '_blank');
  }
}
</script>

<style lang="less">
.room_list_item_wrap {
  width: 100%;
}
.room_list_item {
  overflow: hidden;
  display: flex;
  .room_list_item_left {
    width: 120px;
    height: 90px;
    border-radius: 2px;
    float: left;
    overflow: hidden;
  }
  .room_list_item_right {
    flex: 1;
    float: left;
    margin-left: 10px;
    color: #999999;
    h4 {
      font-size: 15px;
      font-weight: 400;
      color: #333333;
      word-break:keep-all;
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
    }
    p {
      font-size: 12px;
      line-height: 22px;
      height: 22px;
    }
    .room_type {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-start;
      margin-top: 5px;
      height: 20px;
      span {
        font-size: 10px;
        line-height: 16px;
        color: #68D4C4;
        padding: 0 5px;
        border: 1px solid #68D4C4;
        border-radius: 2px;
        margin-right: 5px;
      }
    }
    .room_info {
      margin-top: 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        color: #FB686B;
        font-size: 16px;
        span {
          font-size: 12px;
        }
      }
      > span {
        color: #999999;
        font-size: 11px;
      }
    }
  }
}
</style>
