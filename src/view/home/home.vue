<template>
  <div>
    <div>home view</div>
    <span @click="add">+</span>
    <span>{{ count }}</span>
    <span @click="remove">--</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Home',
  props: {
    size: String,
  },
  data() {
    return {
      count: 1,
    }
  },
  methods: {
    add() {
      this.count++
    },
    remove() {
      console.log(this)
      this.count--
    },
  },
})
</script>

<style lang="scss" scoped></style>
