<template>
  <div class="image_detail_wrap photo"
  :style="'background-image: url('+ photoSrc +');'"
  @click.stop="showImagePreview"
  >
    <span v-if="photos.length > 0">
      <i class="iconfont">&#xe65a;</i>
      {{photos.length}}
    </span>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { ImagePreview } from 'vant';

@Component
export default class ImageDetail extends Vue {
  private instance: any = null;
  private viewing: boolean = false;

  @Prop({default: ''}) private photoSrc!: string;
  @Prop({default: {}}) private photos!: any;

  get Images(): string[] {
    if (this.photos.length > 0) {
      return this.photos.map((n: any, i: any) => {
        return n.src;
      });
    }
    return [];
  }

  private showImagePreview(position: any, timer: any) {
    const that = this;
    this.viewing = true;
    this.$router.push({
      name: 'image',
    });
    if (this.photos.length > 0) {
      const that = this;
      this.instance = ImagePreview({
        images: that.Images,
        startPosition: typeof position === 'number' ? position : 0,
        onClose() {
          that.viewing = false;
          if (that.$route.name !== 'bedDetail') {
            history.back();
          }
        },
      });

      if (timer) {
        setTimeout(() => {
          this.instance.close();
        }, timer);
      }
    } else {
      this.$dialog.alert({
        message: '暂无照片，请上传图片',
      });
    }
  }
  private mounted(): void {
    window.addEventListener('popstate', () => {
      if (this.viewing) {
        this.instance.close();
        this.viewing = false;
      }
      return;
    });
  }
}
</script>

<style lang='less'>
.image_detail_wrap {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  overflow: hidden;
  > img {
    width: 100%;
    height: 100%;
  }
  span {
    position: absolute;
    left: 15px;
    bottom: 15px;
    font-size: 11px;
    background-color: rgba(0, 0, 0, .5);
    color: #fff;
    padding: 2px 6px;
    border-radius: 10px;
    > i {
      font-size: 12px;
    }
  }
}
</style>
