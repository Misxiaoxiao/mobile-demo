<template>
  <div class="upload_img_wrap">
    <van-loading type="spinner" color="white" v-if="uploading" />
    <van-uploader :after-read="onRead">
      <van-icon name="photograph" v-if="src === ''" />
    </van-uploader>
    <div class="img photo" :style="'background-image: url(' + src + ');'"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';

@Component
export default class UploadImg extends Vue {
  private el: any = null;
  private isFinish: boolean = false;
  private src: string = '';

  @Prop({default: ''}) private imageSrc!: string;
  @Prop({default: {}}) private change!: any;

  @State((state: any) => state.UploadModule.preview_album) private previewAlbum: any;
  @State((state: any) => state.UploadModule.uploading) private uploading: any;
  @Action('bindPreviewAlbum') private bindPreviewAlbum: any;

  @Watch('imageSrc') private changeSrc(): void {
    this.src = this.imageSrc;
  }

  @Watch('uploading') private changeloading() {
    if (!this.uploading) {
      this.isFinish = true;
      this.src = this.previewAlbum[0].src;
      this.change(this.src);
    }
  }

  private onRead(file: any) {
    this.isFinish = false;
    this.bindPreviewAlbum({
      el: 'upload_input',
    });
  }

  private mounted(): void {
    this.el = document.querySelector('.van-uploader__input');
    this.el.id = 'upload_input';
    this.bindPreviewAlbum({
      el: 'upload_input',
    });
  }
}
</script>

<style lang="less" scoped>
.upload_img_wrap {
  box-sizing: border-box;
  width: 80px;
  height: 80px;
  font-size: 30px;
  display: inline-block;
  // background-color: #eee;
  border: 1px solid #ddd;
  color: #ccc;
  border-radius: 3px;
  position: relative;
  > .van-uploader {
    position: absolute;
    top: 0;
    left: 0;
    width: 78px;
    height: 78px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }
  > .img {
    width: 100%;
    height: 100%;
    background-size: contain;
  }
  .van-loading {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    z-index: 5;
  }
}
</style>
