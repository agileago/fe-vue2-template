<template>
  <div>
    <div>home view</div>
    <span @click="add">+</span>
    <span>{{ count }}</span>
    <span @click="remove">--</span>
    <svg-icon name=""></svg-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

function useCount() {
  const count = ref(1)
  function add() {
    count.value--
  }
  function remove() {
    count.value++
  }
  return { count, add, remove }
}

export default defineComponent({
  name: 'Home',
  setup() {
    return {
      ...useCount(),
    }
  },
})
</script>

<style lang="scss" scoped></style>
