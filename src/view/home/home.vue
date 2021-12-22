<template>
  <div>
    <p @click="add()">{{ count }}</p>
    <home-child size="large"></home-child>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import HomeChild from '@/view/home/home-child.vue'

export default defineComponent({
  name: 'Home',
  components: { HomeChild },
  data() {
    return {
      count: 0,
    }
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
