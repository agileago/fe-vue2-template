<template>
  <i class="svg-icon">
    <svg aria-hidden="true">
      <use :xlink:href="`#icon-${name}`" />
    </svg>
  </i>
</template>

<script lang="ts">
import { PropType } from '@vue/composition-api'
import Vue from 'vue'

export default Vue.extend({
  name: 'SvgIcon',
  props: {
    name: {
      type: String as PropType<'shezhi'>,
      required: true,
    },
  },
})
</script>

<style lang="scss">
.svg-icon {
  display: inline-block;
  font-style: normal;
  vertical-align: -0.125em;
  text-align: center;
  text-transform: none;
  line-height: 0;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;

  svg {
    width: 1em;
    height: 1em;
    fill: currentColor;
    overflow: hidden;
    line-height: 1;
  }
}
</style>
