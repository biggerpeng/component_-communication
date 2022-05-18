<template>
  <ul>
    <li v-for="(item, index) in todos" :key="item.id">
      <slot :todo="item" :$index="index"></slot>
      <!-- 作用域插槽，插槽props -->
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'List',
    props: ['todos']
  }
</script>

<style>
</style>