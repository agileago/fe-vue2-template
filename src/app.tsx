import { defineComponent } from 'vue'

export const App = defineComponent({
  setup() {
    return () => (
      <div class={'tw-bg-amber-200'}>
        <router-view />
      </div>
    )
  },
})
