import { defineComponent } from 'vue'
import './theme/app.scss'

export const App = defineComponent({
  setup() {
    return () => (
      <div class={'tw-bg-amber-200 tw-flex'}>
        <router-view />
      </div>
    )
  },
})
