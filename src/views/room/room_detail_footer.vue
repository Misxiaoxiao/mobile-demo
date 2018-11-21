<template>
  <van-row v-if="bedDetail.myself && !bedDetail.room.biz">
    <van-col :span="4" >
      <link-edit :editClass="'collect_btn_1'" />
    </van-col>
    <van-col :span="20">
       <link-sign />
    </van-col>
  </van-row>

  <van-row v-else-if="bedDetail.myself && bedDetail.room.biz">
    <van-col :span="24" class="collect_btn">
      <link-edit :editClass="'collect_btn_2'" />
    </van-col>
  </van-row>

  <van-row class="room_detail_footer_wrap" v-else>
    <van-col :span="4" class="collect_btn">
      <favor-room />
    </van-col>
    <van-col :span="20">
      
      <div style="width: 48%;">
        <link-contact />
      </div>

      <div style="width: 48%;">
        <link-sign />
      </div>

    </van-col>
  </van-row>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import { DetailModel } from '@/vuex/modules/residence/residence.model';
import LinkContact from '@/components/operation/link_contact.vue';
import LinkSign from '@/components/operation/link_sign.vue';
import LinkEdit from '@/components/operation/link_edit.vue';
import FavorRoom from '@/components/favor/room.vue';

@Component({
  components: {
    LinkContact,
    LinkSign,
    LinkEdit,
    FavorRoom,
  },
})
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
  background-color: #fff;
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
}
</style>
