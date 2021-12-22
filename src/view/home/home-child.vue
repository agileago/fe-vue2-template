<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'

const HomeChild = defineComponent({
  name: 'home-child',
  props: {
    size: {
      type: String as PropType<'small' | 'large'>,
      required: true,
    },
    age: Number,
  },
})
export default HomeChild
</script>

<template>
  <div></div>
</template>

<style lang="scss" scoped></style>
