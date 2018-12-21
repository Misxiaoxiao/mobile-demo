<template>
  <div class="refresh_rule_wrap">
    <p>
      通过微信发链接给好友，好友打开后点击“刷新”按钮完成房源一键代刷，无需关注公众号和下载App。 房源刷新后，将推送给匹配房源的用户，还将获首页优先展示。 <br />
      你的好友代刷新越多，出租越快！ 
    </p>
    <div class="p1">
      注意： <br>
      房源无视频的情况下，每位好友每天可为该房源代刷1次，有视频的情况下可代刷10次。 代刷好友人数无限制。
    </div>
    <div class="footer">
      <div class="btn" @click="back">知道了</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class RefreshRule extends Vue {
  private back(): void {
    this.$router.back();
  }
}
</script>

<style lang="less" scoped>
.refresh_rule_wrap {
  margin-top: 10px;
  padding: 12px 15px;
  font-weight: 400px;
  color: #333;
  > p {
    font-size: 15px;
    line-height: 21px;
    margin-bottom: 10px;
  }
  > .p1 {
    font-size: 14px;
    line-height: 20px;
  }
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background:rgba(255,255,255,1);
    box-shadow:0px -2px 3px 0px rgba(0,0,0,0.04);
    box-sizing: border-box;
    padding: 7px 15px;
    > .btn {
      width: 100%;
      height: 100%;
      font-size: 16px;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #66D4C3;
      border-radius:4px;
    }
  }
}
</style>
