<template>
  <div class="claim_btn">
    <a @click="handleClick" class="operation-btn confirm">
      认领此房源
    </a>
    <van-popup
      v-model="show"
    >
      <div class="captch_wrap" v-if="!bindPhoneSuccess">
        <div class="close" @click.stop="changeShow">×</div>
        <p>如有租客跟您联系，您将收到短信通知</p>
        <van-row>
          <van-field
            v-model="phone"
            clearable
            placeholder="请输入手机号"
            @blur="onBlur"
          />
        </van-row>
        <van-row>
          <van-field
            v-model="code"
            center
            placeholder="请输入验证码"
            @blur="onBlur"
          >
            <van-button slot="button" size="small" type="primary"
            :disabled="disabled"
            @click.stop="captchaMessage"
            >{{btnText}}</van-button>
          </van-field>
        </van-row>
        <span class="errMsg">{{errMsg}}</span>
        <van-button class="enter-btn operation-btn confirm" size="small" @click.stop="bindPhoneBtn">确定</van-button>
      </div>
      <div class="captch_wrap" v-else>
        <div class="close" @click.stop="changeShow">×</div>
        <div class="ok"></div>
        <h5>恭喜，您已成功认领此房源！</h5>
        <span>您可以使用App管理房源、与客户沟通</span>
        <van-button class="enter-btn operation-btn confirm" size="small" @click.stop="reload">点击查看</van-button>
      </div>
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
  private bindPhoneSuccess: boolean = false; // 是否绑定手机成功

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
      this.bindPhoneSuccess = false;
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
          this.show = true;
          this.bindPhoneSuccess = true;
          if (resolve) {
            resolve();
          }
        },
        fail: () => {
        }
      });
    });
  }
  // 发送验证码
  private captchaMessage(): void {
    if (this.testPhone()) {
      clearInterval(this.timer);
      this.disabled = true;
      let totalSecond: number = 60;
      this.btnText = `重新发送(${totalSecond})s`;
      this.timer = setInterval(() => {
        totalSecond--;
        if (totalSecond <= 0) {
          this.disabled = false;
          this.btnText = '获取验证码';
          clearInterval(this.timer);
        } else {
          this.btnText = `重新发送(${totalSecond})s`;
        }
      }, 1000);
      this.sendCaptchaMessage({
        data: {
          phone: this.phone,
        },
        fail: () => {
          this.disabled = false;
          clearInterval(this.timer);
          this.btnText = '获取验证码';
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
  // 刷新页面
  private reload(): void {
    window.location.reload();
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
    this.bindPhoneSuccess = false;
    clearTimeout(this.timer);
  }
  // 失去焦点  重新绘制
  private onBlur(e: any): void {
    document.body && (document.body.scrollTop = document.body.scrollTop);
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
  .van-popup {
    border-radius: 5px;
    // position: absolute;
    // overflow: visible;
    // top: -70vh;
  }
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
  width: 330px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #fff;
  position: relative;
  padding: 40px 0;
  box-sizing: border-box;
  border-radius: 5px;
  .close {
    font-size: 20px;
    position: absolute;
    right: 15px;
    top: 15px;
    color: #D9D9D9;
  }
  > p {
    font-size: 14px;
    font-weight: 500;
    text-align: center;
  }
  .van-row {
    border-bottom: 1px solid #efefef;
    width: 80%;
    margin-top: 10px;
    .van-cell {
      padding: 10px 0;
    }
    .van-button {
      background-color: #fff;
      border: 1px solid #fff;
      color: #66D4C3;
      font-size: 14px;
      &--disabled {
        color: #999;
      }
    }
  }
  > .errMsg {
    color: #FB686B;
    font-size: 12px;
    margin-top: 20px;
    height: 14px;
  }
  .enter-btn {
    width: 80%;
    height: 40px;
    border-radius: 5px;
    margin-top: 10px;
    padding: 0;
  }
  .ok {
    width: 50px;
    height: 50px;
    background: url('../../assets/ok@2x.png') no-repeat center;
    background-size: cover;
  }
  > h5 {
    margin-top: 30px;
    color: #333;
    font-size: 14px;
  }
  > span {
    color: #666;
    font-size: 14px;
    margin: 10px 0 20px;
  }
}
</style>
