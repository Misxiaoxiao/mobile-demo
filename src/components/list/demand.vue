<template>
  <div>
    <div class="demand_list_item" @click.stop="showMessage">
      <div class="demand_list_item_title">
        <person-img :info="demandItem.user" :formatTime="demandItem.demand.format_last_modify_time" />
      </div>
      <div class="demand_list_item_types">
        <span v-if="demandItem.demand.money">预算{{demandItem.demand.money}}元</span>
        <span v-if="demandItem.demand.dateDetail">{{demandItem.demand.dateDetail}}</span>
      </div>
      <div class="demand_list_des">{{demandItem.demand.content}}</div>
      <div class="demand_list_position" v-if="demandItem.demand.localization !== ''">
        <i class="position_icon iconfont">&#xe680;</i>
        {{demandItem.demand.localization}}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import PersonImg from '@/components/common/person_img.vue';

@Component({
  components: {
    PersonImg,
  },
})
export default class DemandList extends Vue {
  @Prop({default: {}}) private demandItem!: any;

  private showMessage(): void {
    this.$dialog.alert({
      message: '请下载App查看',
    });
  }
}
</script>

<style lang="less">
.demand_list_item {
  .demand_list_item_types {
    margin: 15px 0;
    span {
      font-size: 12px;
      color: #484848;
      padding: 3px 5px;
      border: 1px solid #B5B5B5;
      border-radius: 13px;
      margin-right: 5px;
    }
  }
  .demand_list_des {
    font-size: 14px;
    color: #484848;
  }
  .demand_list_position {
    display: flex;
    font-size: 12px;
    color: #888888;
    height: 24px;
  }
  .position_icon {
    width: 10px;
    height: 12px;
    font-size: 10px;
    color: #ccc;
    margin-right: 5px;
  }
}
</style>
