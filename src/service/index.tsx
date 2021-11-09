import { defineComponent, PropType } from '@vue/composition-api'
import { UserService } from '@/service/user.service'
import { VueGlobalService } from '@/common/core/extend/vue-service'

// 全局服务初始化容器，也可认为是全局store,通过此类可获得全局服务示例
// const userService = ServiceContainer.getService(UserService)
export class ServiceContainer extends VueGlobalService {
  userService = new UserService()
}

export const ServiceProvider = defineComponent({
  name: 'ServiceProvider',
  props: {
    size: String as PropType<'small' | 'large'>,
  },
  setup(props, ctx) {
    const serviceContainer = new ServiceContainer()
    return () => <div>{ctx.slots.default?.(props)}</div>
  },
})
