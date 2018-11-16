<template>
  <a :href="jumpUrl" :class="editClass" target="_blank">
    <i class="iconfont">&#xe661;</i>编辑
  </a>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Platform from '@/utils/platform';

@Component
export default class LinkEdit extends Vue {
  private jumpUrl: string = '';

  @Prop({default: ''}) private editClass!: string;

  private created(): void {
    const platform = new Platform();
    this.jumpUrl = platform.parseUrl(this.$route.path);
  }
}
</script>

<style lang="less">
.collect_btn_1 {
  width: 100%;
  height: 100%;
  color: #999999;
  font-size: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > i {
    font-size: 20px;
  }
}
.collect_btn_2 {
  width: 100%;
	font-size: 1em;
	display: inline-block;
	text-align: center;
	padding: 10px 0;
	border: 1px solid #66D4C3;
	border-radius: 4px;
  font-size: 16px;
  background-color: #66D4C3;
	color: #fff;
  > i {
    font-size: 20px;
    margin: 0 5px;
  }
}
</style>
