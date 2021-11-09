<template>
  <div>
    <div>home view</div>
    <span @click="countService.add()">+</span>
    <span>{{ countService.count }}</span>
    <span @click="countService.remove()">--</span>
    <svg-icon name="shezhi"></svg-icon>
    <p ref="button">{{ userService.user.name }}</p>
    <button @click="userService.getUser()">changeuser</button>
    <input type="text" v-model.trim="countService.count" />
    <home-child size="large"></home-child>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { injectService, useProps } from '@/common/core/helper'
import { UserService } from '@/service/user.service'
import { VueService } from '@/common/core/extend/vue-service'
import { Ref } from '@/common/core/decorators/ref'
import { Link } from '@/common/core/decorators/link'
import { Hook } from '@/common/core/decorators/hook'
import HomeChild from '@/view/home/home-child.vue'

class CountService extends VueService {
  props = useProps()
  @Ref() count = 0
  @Link() button?: HTMLButtonElement
  add() {
    this.count++
  }
  remove() {
    this.count--
  }
  @Hook('Mounted')
  mounted() {
    console.log(this.button)
  }
}

export default defineComponent({
  name: 'Home',
  components: { HomeChild },
  setup(props, ctx) {
    const userService = injectService(UserService)
    return {
      userService,
      countService: new CountService(),
    }
  },
})
</script>

<style lang="scss" scoped></style>
