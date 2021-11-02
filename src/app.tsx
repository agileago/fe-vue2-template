import { defineComponent } from '@vue/composition-api'

const App = defineComponent({
  setup() {
    return () => (
      <div>
        <h2>app</h2>
        <router-view></router-view>
      </div>
    )
  },
})

export default App
