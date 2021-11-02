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

// 微前端环境下，注册mount和unmount方法
if (window.__MICRO_APP_ENVIRONMENT__) {
  // @ts-ignore
  window[`micro-app-${window.__MICRO_APP_NAME__}`] = { mount, unmount }
} else {
  mount() // 非微前端环境直接渲染
}
