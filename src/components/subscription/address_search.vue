<template>
  <div class="address_search_wrap">
    <div class="room_detail_header">
      <div class="room_detail_header_left" @click.stop="changePopup">
        <i class="iconfont" >&#xe603;</i>
      </div>
      <div class="room_detail_header_title">
        选择位置
      </div>
      <div class="room_detail_header_right">
        <slot name="header_right" />
      </div>
    </div>

    <div class="address_input_wrap">
      <p>
        填写工作地址或者目标居住地址，不需要精确，从输入提示中选择附近地点即可，便于定位匹配。
      </p>
      <div class="input_wrap">
        <van-search
        placeholder="输入写字楼、小区名或其他关键字"
        v-model="val"
        @focus.stop="show(true)"
        @blur.stop="show(false)" />
      </div>
    </div>

    <div class="address_search_list_wrap">
      <input-search-list
      :isShow="isShow"
      :list="addresses"
      :change="callback"
      :requestCallback="request"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import InputSearchList from '@/components/list/input_search_list.vue';

@Component({
  components: {
    InputSearchList,
  },
})
export default class AddressSearch extends Vue {
  private val: string = '';
  private isShow: boolean = false;

  @Prop({default: {}}) private search!: any;
  @Prop({default: {}}) private changePopup!: any;
  @Prop({default: []}) private addresses!: any[];
  @Prop({default: {}}) private changeAddress!: any;

  @Watch('val') private changeVal(): void {
    this.search({
      data: {
        keyword: this.val,
        city: '上海',
      },
    });
  }

  private show(bool: boolean): void {
    this.isShow = bool;
  }

  private callback(val: string): void {
    this.changeAddress({
      name: val,
    });
    this.changePopup();
    this.val = '';
    this.isShow = false;
  }

  private request(): void {
    // body
  }
}
</script>
