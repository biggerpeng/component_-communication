<template>
  <div>
    <h1>{{ msg }}</h1>
    <Test v-model="msg"></Test>
  </div>
</template>

<script>
  import Test from './components/test.vue'
  export default {
    name: 'App',
    data() {
      return {
        msg: 'hello'
      }
    },
    components: { Test }
  }
</script>
