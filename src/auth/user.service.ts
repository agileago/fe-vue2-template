import Vue from 'vue'

const userService = new Vue({
  data() {
    return {
      name: 'aaa',
      age: 18,
    }
  },
  methods: {
    add() {
      console.log(this.name)
    },
  },
})

export default userService
