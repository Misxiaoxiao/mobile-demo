<template>
  <div class="user_footer_wrap">
    <van-col :span="7">
      <link-attention />
    </van-col>
    <van-col :span="7">
      <link-contact />
    </van-col>
    <van-col :span="7">
      <link-comment />
    </van-col>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LinkAttention from '@/components/operation/link_attention.vue';
import LinkComment from '@/components/operation/link_comment.vue';
import LinkContact from '@/components/operation/link_contact.vue';

@Component({
  components: {
    LinkAttention,
    LinkComment,
    LinkContact,
  },
})
export default class UserFooter extends Vue {}
</script>

<style lang="less">
.user_footer_wrap {
  position: fixed;
  width: 100%;
  height: 60px;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #EFEFEF;
  background-color: #fff;
  > div {
    width: 109px;
    height: 45px;
  }
}
</style>
