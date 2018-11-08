<template>
  <transition name="fade" class="popup_wrap">
    <div v-if="isShow">
      <slot />
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Popup extends Vue {
  @Prop({default: false}) private isShow!: boolean;
}
</script>

<style lang="less">
.fade-enter-active, .fade-leave-active {
  transition: .3s;
}
.fade-enter, .fade-leave-to {
  transform: translate(100%);
}
</style>
