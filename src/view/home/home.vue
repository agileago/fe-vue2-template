<template>
  <div>
    <van-button type="primary">按钮</van-button>
    <p @click="add()">{{ count }}</p>
    <home-child size="large"></home-child>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import HomeChild from '@/view/home/home-child.vue'

export default defineComponent({
  name: 'Home',
  components: { HomeChild },
  setup() {
    const count = ref(1)
    return {
      count,
    }
  },
  data() {
    return {}
  },
  methods: {
    add() {
      this.count++
    },
    remove() {
      this.count--
    },
  },
})
</script>

<style lang="scss" scoped></style>
