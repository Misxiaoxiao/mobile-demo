<template>
  <div class="search_tab">
    <div
    :class="'tab_item' + ($route.name === 'room' ? ' tab_item_active' : '')"
    @click.stop="changeItme('room')"
    >房源</div>
    <div
    :class="'tab_item' + ($route.name === 'demand' ? ' tab_item_active' : '')"
    @click.stop="changeItme('demand')"
    >求租</div>
    <div
    class="tab_line"
    :style="{transform: 'translate(' + ($route.name === 'room' ? '90%' : '370%') + ')'}"
    ></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import Popup from '@/components/common/popup.vue';

@Component({
  components: {
    Popup,
  },
})
export default class SearchTab extends Vue {
  private changeItme(name: string) {
    this.$router.push({name});
  }
}
</script>

<style lang="less">
.search_tab {
  display: flex;
  position: relative;
  .tab_item {
    margin: 0 12px;
    font-size: 17px;
    color: #4a4a4a;
    font-weight: 400px;
    cursor: pointer;
  }
  .tab_item_active {
    font-size: 18px;
    color: #66D4C3;
    font-weight: 500px;
  }
  .tab_line {
    position: absolute;
    top: 27px;
    width: 21px;
    height: 2px;
    background-color: #66D4C3;
    border-radius: 1px;
    transform: translate(20px);
    transition: all .3s;
  }
}
</style>
