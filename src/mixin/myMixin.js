export default {
  methods: {
    send() {
      this.money -= 50
      this.$parent.money1 += 50
    }
  },
  mounted() {
    console.log(666)
  }
}
