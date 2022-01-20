import 'vant/lib/index.css'
import Vue from 'vue'
import VueRouter from 'vue-router'
import vueCompositionApi from '@vue/composition-api'
import SvgIcon from '@/global/components/svg-icon/svg-icon.vue'
import Vant from 'vant'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(vueCompositionApi)

Vue.component('svg-icon', SvgIcon)

Vue.use(Vant)
