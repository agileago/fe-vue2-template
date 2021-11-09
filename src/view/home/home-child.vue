<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { ComponentProps } from '@/common/core/type'

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

export type HomeChild_Props = ComponentProps<typeof HomeChild>

export default HomeChild
</script>

<template>
  <div></div>
</template>

<style lang="scss" scoped></style>
