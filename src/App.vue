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
    <hr />
    <h1>封装带提示功能的按钮($attrs、$listeners)</h1>
    <HintBotton type="primary" icon="el-icon-video-play" size="mini" title="提示" @click="handler"></HintBotton>

    <hr />
    <h1>$children、$parent</h1>
    <h3>小许有{{ money1 }}元</h3>
    <button @click="borrow1">找小黄借100</button>
    <button @click="borrow2">找小赵借200</button>
    <button @click="borrow3">找两人各借借200</button>
    <XiaoHuang ref="xh"></XiaoHuang>
    <XiaoZhao ref="xz"></XiaoZhao>

    <hr />
    <h1>作用域插槽</h1>
    <h3>第一种效果</h3>
    <List :todos="todos">
      <template v-slot:default="{ todo }">
        <span :style="{ color: todo.isComplete ? 'green' : 'red' }">{{ todo.text }}</span>
      </template>
    </List>
    <h3>第二种效果</h3>
    <List :todos="todos">
      <template v-slot:default="{ todo, $index }">
        <span :style="{ color: $index % 2 ? 'skyblue' : 'green' }">{{ $index }}-{{ todo.text }}</span>
      </template>
    </List>
  </div>
</template>

<script>
  import Test from './components/Test'
  import XiaoMing from './components/XiaoMing'
  import XiaoMing2 from './components/XiaoMing2'
  import HintBotton from './components/HintBotton'
  import XiaoZhao from './components/XiaoZhao'
  import XiaoHuang from './components/XiaoHuang'
  import List from '@/components/List'
  export default {
    name: 'App',
    data() {
      return {
        msg: 'hello',
        money: 10000,
        money1: 5000,
        todos: [
          { id: 1, text: 'AAA', isComplete: false },
          { id: 2, text: 'BBB', isComplete: true },
          { id: 3, text: 'CCC', isComplete: false },
          { id: 4, text: 'DDD', isComplete: true }
        ]
      }
    },
    methods: {
      handler() {
        alert('666')
      },
      borrow1() {
        this.money1 += 100
        this.$refs.xh.money -= 100
      },
      borrow2() {
        this.money1 += 200
        this.$refs.xz.money -= 200
      },
      borrow3() {
        this.money1 += 400
        this.$children.forEach(item => {
          //这里的子组件还包括其他无关当前演示，因此会报错，无碍
          item.money -= 200
        })
      }
    },
    components: { List, Test, XiaoMing, XiaoMing2, HintBotton, XiaoHuang, XiaoZhao }
  }
</script>
