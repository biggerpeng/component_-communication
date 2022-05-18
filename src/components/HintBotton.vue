<template>
  <div>
    <el-button v-bind="$attrs" v-on="$listeners">按钮</el-button>
  </div>
</template>

<script>
  export default {
    name: 'HintBotton',
    // props: ['title'],
    mounted() {
      // console.log(this)
      // console.log(this.$attrs)
      // console.log(this.$listeners)
    }
  }
</script>

<style>
</style>