<template>
  <div class="subscription_wrap">

    <common-header :label="'订阅我需要的房源'" />

    <div class="subscription_content_wrap">
      
      <subscription-form />

    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CommonHeader from '@/components/common/header.vue';
import SubscriptionForm from './subscription_form.vue';

@Component({
  components: {
    CommonHeader,
    SubscriptionForm,
  },
})
export default class SubscriptionIndex extends Vue {}
</script>

<style lang="less">
.subscription_wrap {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .subscription_content_wrap {
    flex: 1;
    background-color: #f3f4f5;
  }
}
</style>
