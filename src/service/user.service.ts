import { InjectionKey } from '@vue/composition-api'
import { VueService } from '@/common/core/extend/vue-service'
import { Ref } from '@/common/core/decorators/ref'

export interface User {
  name: string
  age?: number
}
export class UserService extends VueService {
  static ProviderKey: InjectionKey<UserService> = Symbol()
  @Ref() user: User = {
    name: 'aaaa',
  }
  getUser() {
    this.user = {
      name: 'cccc',
    }
  }
}
