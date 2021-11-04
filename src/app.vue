<template>
  <service-provider>
    <router-view></router-view>
  </service-provider>
</template>
<script lang="ts">
import { ServiceProvider } from '@/service'

export default {
  components: { ServiceProvider },
}
</script>
