<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'default-layout',
  data() {
    return {
      msg: '111',
    }
  },
})
</script>

<template>
  <div>{{ msg }}</div>
</template>

<style lang="scss" scoped></style>
