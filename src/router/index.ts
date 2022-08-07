import VueRouter from 'vue-router'
import { routes } from '@/router/routes'
import config from '@/config'

const router = new VueRouter({
  base: config.routeBase,
  mode: 'history',
  routes,
})

export default router
