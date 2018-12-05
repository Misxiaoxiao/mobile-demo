<template>
  <div class="claim_btn">
    <a @click="handleClick" class="operation-btn confirm">
      认领此房源
    </a>
    <van-popup
      v-model="show"
      position="bottom"
    >
      <div class="captch_wrap" v-show="!bindPhoneSuccess">
        <p>如有租客跟您联系，我们将用手机短信通知您。</p>
        <van-row>
          <input type="text" v-model="phone">
          <van-button class="captch-btn" size="small" :disabled="disabled" @click.stop="captchaMessage">{{btnText}}</van-button>
        </van-row>
        <van-row>
          <input type="text" v-model="code">
          <span v-if="errMsg !== ''">{{errMsg}}</span>
        </van-row>
        <van-row>
          <van-button class="enter-btn operation-btn confirm" size="small" @click.stop="bindPhoneBtn">确定</van-button>
        </van-row>
      </div>
      <!-- <div class="captch_wrap_finish" v-show="bindPhoneSuccess">
        <p>恭喜，您已成功认领此房源！</p>
        <p>您可以使用App管理房源、与租客沟通。</p>
        <van-button class="enter-btn operation-btn confirm" @click.stop="changeShow">点击查看</van-button>
      </div> -->
    </van-popup>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';

@Component
export default class LinkClaim extends Vue {
  private timer: any = null;
  private phone: string = ''; // 手机号
  private code: string = ''; // 验证码
  private disabled: boolean = false;
  private show: boolean = false; // 是否展示弹出框
  private errMsg: string = ''; // 错误信息
  private btnText: string = '获取验证码'; // 按钮文字
  // private bindPhoneSuccess: boolean = false; // 是否绑定手机成功

  @State((state: any) => state.AccountModule.account) private account!: any;
  @State((state: any) => state.ResidenceModule.bed_detail) private bedDetail!: any;
  @Action('sendCaptchaMessage') private sendCaptchaMessage!: any;
  @Action('bindUserPhone') private bindUserPhone!: any;
  @Action('claimRoom') private claimRoom!: any;

  @Watch('show') private Show() {
    if (!this.show) {
      this.resetStatus();
    }
  }
  // 处理认领房源点击
  private handleClick(): void {
    if (this.account.user.phone === '') { // 如果用户没有绑定手机号
    // if (true) { // 如果用户没有绑定手机号
      this.show = true;
      // this.bindPhoneSuccess = false;
    } else {
      this.handleClaimRoom();
    }
  }
  private bindPhoneBtn(): void {
    if (this.phone === '') {
      this.errMsg = '手机号不能为空';
      return;
    } else if (this.code === '') {
      this.errMsg = '验证码不能为空';
      return;
    } else if (this.testPhone()) {
      const that = this;
      this.bindPhone()
        .then(() => {
          this.handleClaimRoom();
        });
        // .then(() => {
        //   // that.bindPhoneSuccess = true;
        // });
    }
  }
  // 绑定手机
  private async bindPhone() {
    return new Promise((resolve, reject) => {
      this.bindUserPhone({
        data: {
          phone: this.phone,
          captcha: this.code,
          force: 0,
        },
        success: () => {
          // this.bindPhoneSuccess = true;
          if (resolve) {
            resolve();
          }
        },
        fail: () => {
          if (reject) {
            reject();
          }
        },
      });
    });
  }
  // 认领房源
  private async handleClaimRoom() {
    return new Promise((resolve, reject) => {
      this.claimRoom({
        data: {
          id: this.bedDetail.room.id,
        },
        success: () => {
          this.$dialog.alert({
            message: '恭喜，您已成功认领此房源！您可以使用App管理房源、与租客沟通。',
          }).then(() => {
            window.location.reload();
          });
          if (resolve) {
            resolve();
          }
        },
      });
    });
  }
  // 发送验证码
  private captchaMessage(): void {
    if (this.testPhone()) {
      this.disabled = true;
      this.sendCaptchaMessage({
        data: {
          phone: this.phone,
        },
        success: () => {
          let totalSecond: number = 60;
          this.timer = setInterval(() => {
            totalSecond--;
            if (totalSecond <= 0) {
              this.disabled = false;
              this.btnText = '获取验证码';
              clearInterval(this.timer);
            } else {
              this.btnText = `${totalSecond}s`;
            }
          }, 1000);
        },
        fail: () => {
          this.disabled = false;
        },
      });
    }
  }
  // 验证手机号码
  private testPhone(): boolean {
    if (!(/^1[34578]\d{9}$/.test(this.phone))) {
      this.errMsg = '手机号码有误';
      return false;
    } else {
      this.errMsg = '';
      return true;
    }
  }

  private changeShow(): void {
    this.show = !this.show;
  }

  private resetStatus(): void {
    this.phone = '';
    this.code = '',
    this.disabled = false;
    this.errMsg = '';
    this.btnText = '获取验证码';
    clearTimeout(this.timer);
  }
}
</script>

<style lang="less" scoped>
.claim_btn {
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  padding: 7px 15px;
  background-color: #fff;
  border-top: 1px solid #EBEBEB;
  z-index: 99;
}
.captch_wrap_finish {
  padding: 15px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  > p {
    margin: 7px;
  }
  > button {
    margin-top: 7px;
    width: 60%;
    border-radius: 5px;
  }
}
.captch_wrap {
  padding: 15px 30px;
  > .van-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 45px;
    &:last-child {
      justify-content: center;
    }
  }
  p {
    width: 100%;
    text-align: left;
    font-size: 14px;
    margin: 8px 0;
  }
  input {
    // margin-top: 15px;
    border: 1px solid #ebebeb;
    width: 62%;
    margin-right: 15px;
    height: 28px;
    padding: 0 5px;
  }
  button {
    font-size: 14px;
    width: 90px;
  }
  .captch-btn {
    color: #0066FF;
    border: 1px solid #0066FF;
  }
  span {
    font-size: 12px;
    color: #FF0000;
  }
}
</style>
