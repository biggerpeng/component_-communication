<template>
  <div>小赵有{{ money }}元<button @click="send">给小许50元</button></div>
</template>

<script>
  import myMxin from '@/mixin/myMixin'
  export default {
    data() {
      return {
        money: 2000
      }
    },
    mixins: [myMxin]
  }
</script>

<style>
</style>