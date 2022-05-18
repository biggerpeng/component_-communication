<template>
  <div>
    小黄有{{ money }}元
    <button @click="send">给小许50元</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        money: 1000
      }
    },
    methods: {
      send() {
        this.money -= 50
        this.$parent.money1 += 50
      }
    }
  }
</script>

<style>
</style>