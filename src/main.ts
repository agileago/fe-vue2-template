import '@/global'
import Vue from 'vue'
import App from './app.vue'
import router from './router'

let app: Vue | null

export function mount() {
  app = new Vue({
    router,
    render: h => h(App),
  })
  app.$mount('#app')
}
export function unmount() {
  if (!app) return
  app?.$destroy()
  app.$el.innerHTML = ''
  app = null
}

mount()
