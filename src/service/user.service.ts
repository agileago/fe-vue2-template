import { InjectionKey, provide, ref } from '@vue/composition-api'

export interface User {
  name: string
  age?: number
}
export class UserService {
  static ProviderKey: InjectionKey<UserService> = Symbol()
  user = ref<User | null>(null)
  getUser = () => {
    this.user.value = {
      name: 'aaaa',
    }
  }
  constructor() {
    provide(UserService.ProviderKey, this)
  }
}
