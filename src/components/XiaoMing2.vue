<template>
  <div>小明每次<button @click="$emit('update:money', money - 100)">花</button>小李100元</div>
</template>

<script>
  export default {
    name: 'XiaoMing2',
    props: ['money']
  }
</script>

<style>
</style>