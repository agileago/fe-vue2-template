import 'reflect-metadata'
import Vue from 'vue'
import VueRouter from 'vue-router'
import vueCompositionApi from '@vue/composition-api'
import SvgIcon from '@/global/components/svg-icon/svg-icon.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(vueCompositionApi)

Vue.component('svg-icon', SvgIcon)
