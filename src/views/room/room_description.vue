<template>
  <div class="room_description_wrap" v-if="roomDescription !== ''">
    <h4>房源描述</h4>
    <div class="room_description_person" @click.stop="view">
      <person-img
      v-if="roomDescription.person !== ''"
      :info="roomDescription.person"
      :formatTime="''"
      />

      <company-img
      v-if="roomDescription.company !== ''"
      :info="roomDescription.company"
      />

      <div class="contract_btn" @click.stop="clickContract">联系Ta</div>

    </div>
    <div class="room_des_text_wrap">
      {{roomDescription.content}}
    </div>
    <div class="room_des_msg_info_wrap">
      <div class="msg_info" v-if="roomDescription.person.identity_validate_status === 1">
        <div class="msg_info_left">
          <i class="iconfont">&#xe658;</i>
        </div>
        <div class="msg_info_right">
          由实名登记用户发布并承诺真实合法有效，接受所有用户监督和评价
        </div>
      </div>
      <div class="msg_info" v-if="this.bedDetail.room.rent_type === 2">
        <div class="msg_info_left">
          <i class="iconfont" style="font-size: 12px;">&#xe6c3;</i>
        </div>
        <div class="msg_info_right">
          温馨提示：异性合租需谨慎
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';
import { DetailModel } from '@/vuex/modules/residence/residence.model';
import PersonImg from '@/components/common/person_img.vue';
import CompanyImg from '@/components/common/company_img.vue';

@Component({
  components: {
    PersonImg,
    CompanyImg,
  },
})
export default class RoomDescription extends Vue {
  @State((state: any) => state.ResidenceModule.bed_detail) private bedDetail!: DetailModel;

  get roomDescription(): any {
    if (this.bedDetail.bed) {
      return {
        person: this.bedDetail.user ? this.bedDetail.user : '',
        company: this.bedDetail.company ? this.bedDetail.company : '',
        content: this.bedDetail.bed.content,
      };
    }
    return '';
  }

  // 点击查看用户详情
  private view(): void {
    // 根据房源信息进行判断
    if ((this.$route.query.biz).toString() === 'true') {
      this.$router.push({
        name: 'company',
        params: {
          id: this.roomDescription.company.id,
        },
      });
    } else {
      this.$router.push({
        name: 'user',
        params: {
          id: this.roomDescription.person.id,
        },
      });
    }
  }

  // 联系Ta
  private clickContract(): void {
    this.$dialog.alert({
      message: '请下载APP，使用私信聊天功能',
    });
  }
}
</script>

<style lang='less'>
.room_description_wrap {
  color: #333;
  font-size: 14px;
  padding: 15px;
  background-color: #fff;
  margin-top: 10px;
  > h4 {
    font-size: 18px;
    line-height: 25px;
  }
  > .room_description_person {
    box-sizing: border-box;
    padding: 5px;
    height: 60px;
    display: flex;
    align-items: center;
    background-color: rgba(217,217,217,0.06);
    border-radius: 5px;
    position: relative;
    > .person_wrap {
      width: 70%;
    }
    .contract_btn {
      position: absolute;
      right: 5px;
      width: 72px;
      line-height: 20px;
      background-color: #66D4c3;
      border: 1px solid #66D4C3;
      color: #fff;
      font-size: 12px;
      text-align: center;
      border-radius: 3px;
    }
  }
  .room_des_text_wrap {
    padding: 10px 0 15px;
    line-height: 18px;
    border-bottom: 1px solid #EBEBEB;
  }
  .room_des_msg_info_wrap {
    > .msg_info {
      margin-top: 10px;
      overflow: hidden;
      display: flex;
      > .msg_info_left {
        width: 12px;
        height: 15px;
        margin-right: 4px;
        > i {
          color: #66D4C3;
          font-size: 14px;
        }
      }
      > .msg_info_right {
        color: #999999;
        line-height: 20px;
      }
    }
  }
}
</style>
