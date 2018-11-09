<template>
  <div>
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

@Component({
  components: {
    MyImage,
  },
})
export default class RoomList extends Vue {
  @Prop({default: {}}) private roomItem!: any;
  private view(item: any): void {
    this.$router.push({name: 'roomDetail', params: {id: item.roomId}, query: {biz: item.biz}});
  }
}
</script>

<style lang="less">
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
