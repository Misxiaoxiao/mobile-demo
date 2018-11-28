<template>
  <div class="map_wrap">
    <i class="iconfont" @click.stop="goBack">
      &#xe603;
    </i>
    <div id="container"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const Window: any = window;
const amap: any = Window.AMap; // tslint:disable-line

@Component
export default class MapComponent extends Vue {
  private map: any = null;

  private goBack(): void {
    if (window.history.length <= 1) {
      this.$router.push({path: '/'});
    } else {
      this.$router.back();
    }
  }

  private mounted(): void {
    const center = [this.$route.query.longitude, this.$route.query.latitude];
    this.map = new amap.Map('container', {
      resizeEnable: true,
      center,
      zoom: 16,
    });
    this.addMarker();
    // amap.plugin('AMap.Geolocation', () => {
    //   const geolocation = new amap.Geolocation({
    //   enableHighAccuracy: true, // 是否使用高精度定位，默认:true
    //     timeout: 10000,          // 超过10秒后停止定位，默认：5s
    //     buttonPosition: 'RB',    // 定位按钮的停靠位置
    //     buttonOffset: new amap.Pixel(10, 20), // 定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
    //     zoomToAccuracy: true,   // 定位成功后是否自动调整地图视野到定位点
    //   });
    //   this.map.addControl(geolocation);
    //   geolocation.getCurrentPosition((status: any, result: any) => {
    //     if (status === 'complete') {
    //       // onComplete(result);
    //       // console.log('定位成功');
    //     } else {
    //       // onError(result);
    //       // console.log('定位失败');
    //     }
    //   });
    // });
  }

  private addMarker(): void {
    const position = [this.$route.query.longitude, this.$route.query.latitude];
    this.map.clearMap();
    const marker = new amap.Marker({
      map: this.map,
      position,
    });
  }
}
</script>

<style lang="less">
.map_wrap {
  position: fixed;
  width: 100%;
  height: 100%;
  > i {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 30px;
    line-height: 30px;
    border-radius: 50%;
    text-align: center;
    background-color: #fff;
    z-index: 999;
    color: #333;
    border: 1px solid #eee;
  }
}
#container {
  width: 100%;
  height: 100%;
}
</style>
