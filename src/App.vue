<template>
  <div id="app">
    <title>{{$route.meta.title}}</title>
    <keep-alive>
      <router-view v-if='ifLogged || !ifWeixin'/>
    </keep-alive>
    <init-app v-if="$route.name" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import Platform from '@/utils/platform';
import InitApp from '@/components/init.vue';

@Component({
  components: {
    InitApp,
  },
})
export default class App extends Vue {
  private ifWeixin: boolean = false;

  @State((state: any) => state.AuthModule.ifLogged) private ifLogged!: boolean;

  private created(): void {
    const platform = new Platform();
    this.ifWeixin = platform.checkWeixin();
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
