<template>
  <div class="room_type_description_wrap">
    <common-header :label="'房源类型说明'" />
    <ul class="content_list">
      <li>
        <h5>业主出租</h5>
        <p>发布者是该房源的产权所有者，持有房屋产权证，被称作业主或房东</p>
      </li>
      <li>
        <h5>室友合租</h5>
        <p>发布者是该房源的承租方，经出租方授权，将全部使用面积划分不同区域，自己继续使用其中一部分区域，并将另外部分的使用权出让给其他用户。</p>
      </li>
      <li>
        <h5>转租房源</h5>
        <p>发布者是该房源的承租方，在租赁合同未到期的情况下因故需要提前解除合同，与出租方协商一致，替出租方找到新的承担方即可免除违约责任。</p>
      </li>
      <li>
        <h5>长租公寓</h5>
        <p>发布者是自然人或法人，已通过与业主签订合同等方式，取得了该房源的承租转让权和收益权，以获取差价收益为目的，是经营性出租。这种发布者被称作职业房东或公寓管家。</p>
      </li>
      <li>
        <p>未取得房屋使用权的用户将无法发布信息，房产经纪人请前往其他平台发布（58同城/赶集）。</p>
        <p>公寓和酒店经营者有合作需求请致电<span>021-31300179</span>如果以发布房源的用户帮助经纪人获客，我们将拉黑封锁用户账户，并写入个人违约记录。</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CommonHeader from '@/components/common/header.vue';

@Component({
  components: {
    CommonHeader,
  },
})
export default class RoomTypeDescription extends Vue {
}
</script>

<style lang="less">
.room_type_description_wrap {
  display: flex;
  flex-direction: column;
  > .content_list {
    flex: 1;
    overflow-y: scroll;
    background-color: #fff;
    > li {
      padding: 15px;
      border-bottom: 1px solid #ddd;
      > h5 {
        font-size: 16px;
        color: #4fceba;
        line-height: 30px;
      }
      > p {
        font-size: 14px;
        color: #7a7a7a;
        line-height: 18px;
      }
    }
    > li:last-child {
      border: 0;
    }
  }
}
</style>
