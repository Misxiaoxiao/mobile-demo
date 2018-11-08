<template>
  <div class="room_description_wrap">
    <h4>房源描述</h4>
    <div class="person_wrap">

    </div>
    <div class="room_des_text_wrap">
      房子为距离虹桥路、宜山路地铁站步行十分钟的高层电梯房，东航公寓，三室一厅，现朝北次卧、朝南次卧招租。 朝北次卧希望女生一人居住，朝南次卧可以两个女生一起住，有正当职业，工作时间规律，一定要爱干净哦。合同一年起签，与房东签。 租金：2300/月（朝北次卧），3000/月（朝南次卧），押一付三。入住时间：2月28日（朝北次卧），3月30日（朝南次卧），朝北次卧入住时间可商量提前。 朝北房间是没有衣柜的哒，只有一个衣架，客厅有个大衣柜，可以给你用。不过房间有个超大梳妆台，如果实在要衣橱，房东表示可以将梳妆台换成衣柜。 附近交通设施很便利，po主平时上班走路到虹桥路地铁站只需10min，虹桥路站有10号线、3号线以及4号线，宜山路站也在附近，步行十分钟不到，有9号线、3号线和四号线。房子离徐家汇自行车最多10分钟路程，附近还有光启城、宜家、家乐福，距离小区50米有一个大型的菜市场-虹珠市场，好德、全家、喜士多一应俱全，生活真的超级便利～每个双休都是逛逛逛买买买。 小区是两幢高层，有电梯，只有一个进出口，保安24小时值班（连我锁自行车慢一点都要来看看我是不是小偷……），整个小区遍布近40个监控，十分安全哦。 室友情况：一间住着我和我妹妹，都是90后，我是一名律师助理，妹妹从事人力资源工作。
    </div>
    <div class="room_des_msg_info_wrap">
      <div class="msg_info">
        <div class="msg_info_left">
          <i></i>
        </div>
        <div class="msg_info_right">
          由实名登记用户发布并承诺真实合法有效，接受所有用户监督和评价
        </div>
      </div>
      <div class="msg_info">
        <div class="msg_info_left">
          <i></i>
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

export default class RoomDescription extends Vue {}
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
  }
  .person_wrap {
    height: 60px;
  }
  .room_des_text_wrap {
    padding: 10px 0 15px;
    border-bottom: 1px solid #EBEBEB;
  }
  .room_des_msg_info_wrap {
    > .msg_info {
      margin-top: 5px;
      overflow: hidden;
      display: flex;
      > .msg_info_left {
        width: 12px;
        height: 15px;
        margin-right: 4px;
      }
      > .msg_info_right {
        color: #999999;
      }
    }
  }
}
</style>
