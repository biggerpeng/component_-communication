<template>
  <div>
    <h1>v-model深入</h1>
    <h3>{{ msg }}</h3>
    <Test v-model="msg"></Test>
    <hr />
    <h1>不使用sync修饰符</h1>
    <h3>小李还剩{{ money }}元</h3>
    <XiaoMing :money="money" @update:money="money = $event"></XiaoMing>
    <hr />
    <h1>使用sync修饰符</h1>
    <h3>小李还剩{{ money }}元</h3>
    <XiaoMing2 :money.sync="money"></XiaoMing2>
  </div>
</template>

<script>
  import Test from './components/Test'
  import XiaoMing from './components/XiaoMing'
  import XiaoMing2 from './components/XiaoMing2'
  export default {
    name: 'App',
    data() {
      return {
        msg: 'hello',
        money: 10000
      }
    },
    components: { Test, XiaoMing, XiaoMing2 }
  }
</script>
