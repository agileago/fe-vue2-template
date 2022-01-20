<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'

const HomeChild = defineComponent({
  name: 'HomeChild',
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
  <div>1111</div>
</template>

<style lang="scss" scoped></style>
