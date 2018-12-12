<template>
  <div class="company_person_wrap">
    <div class="company_person_title text--title-s">
      运营人员
    </div>
    <div class="company_person_list">
      
      <swiper
      :slotArr="slotArr"
      :slidesPerView="3.3"
      >
        <div
        v-for="(n, i) in companyDetail.staffs"
        :slot="i"
        :key="i"
        class="staffs_item"
        >
          <div class="staffs_img" :style="'background: url(' + n.avatar.src + ') no-repeat center; background-size: 100%;'">
            <!-- <img :src="n.avatar.src" alt=""> -->
          </div>
          <div class="staffs_name text-o1 text-ellipsis">
            {{n.username}}
          </div>
          <div class="staffs_btn button-b1-active" @click.stop="clickBtn">
            私信联系
          </div>
        </div>
      </swiper>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { State } from 'vuex-class';
import Swiper from '@/components/common/swiper.vue';

@Component({
  components: {
    Swiper,
  },
})
export default class CompanyPerson extends Vue {
  @State((state: any) => state.UserModule.company_detail) private companyDetail!: any;
  get slotArr(): any[] {
    if (this.companyDetail.staffs) {
      return this.companyDetail.staffs.map((n: any, i: any) => {
        return i;
      });
    } else  {
      return [];
    }
  }

  private clickBtn(): void {
    this.$dialog.alert({
      message: '请下载APP，使用私信聊天功能',
    });
  }
}
</script>

<style lang="less">
.company_person_wrap {
  background-color: #fff;
  margin-top: 10px;
  box-sizing: border-box;
  overflow: hidden;
  .company_person_title {
    padding: 15px;
  }
  .company_person_list {
    background-color: #fff;
    margin-bottom: 15px;
    .staffs_item {
      border: 1px solid #ccc;
      margin: 5px;
      height: 120px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      border-radius: 2px;
      box-sizing: border-box;
      padding: 10px;
      .staffs_img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
        > img {
          width: 100%;
          height: 100%;
        }
      }
      .staffs_name {
        width: 100%;
        text-align: center;
      }
      .staffs_btn {
        font-size: 10px;
        border-radius: 10px;
        padding: 3px;
      }
    }
  }
}
.swiper-slide:first-child {
  .staffs_item {
    margin-left: 0;
  }
}
.swiper-slide:last-child {
  .staffs_item {
    margin-right: 0;
  }
}
</style>
