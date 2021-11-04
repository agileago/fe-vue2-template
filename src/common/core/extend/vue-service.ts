import { ComponentInternalInstance, getCurrentInstance, InjectionKey, provide } from '@vue/composition-api'
import { ComputedHandler } from '@/common/core/decorators/computed'
import { RefHandler } from '@/common/core/decorators/ref'
import { Hanlder } from '@/common/core/type'
import { HookHandler } from '@/common/core/decorators/hook'
import { LinkHandler } from '@/common/core/decorators/link'

export const ProviderKey = 'ProviderKey'

export abstract class VueService {
  static handler: Hanlder[] = [RefHandler, ComputedHandler, LinkHandler, HookHandler]
  constructor() {
    // 自动provide service
    // @ts-ignore
    if (this.constructor[ProviderKey]) provide(this.constructor[ProviderKey], this)
    VueService.handler.forEach(handler => handler.handler(this))
  }
}

export abstract class VueGlobalService extends VueService {
  static __instance: (ComponentInternalInstance['proxy'] & { _provided: any }) | null = null
  static __self: VueGlobalService | null = null
  static get<T = any>(token: string | symbol): T
  static get<T = any>(token: InjectionKey<T>): T
  static get<
    T extends {
      new (...args: any[]): InstanceType<T>
      ProviderKey: InjectionKey<T>
    },
  >(token: T): InstanceType<T>
  static get(token: any) {
    if (!token) return null
    if ((typeof token === 'function' || typeof token === 'object') && 'ProviderKey' in token) {
      token = token.ProviderKey
    }

    let source = VueGlobalService.__instance
    while (source) {
      if (source._provided && Object.prototype.hasOwnProperty.call(source._provided, token)) {
        return source._provided[token]
      }
      source = source.$parent as unknown as (ComponentInternalInstance['proxy'] & { _provided: any }) | null
    }
    return null
  }
  static getSelf<T extends { new (...args: any[]): any }>(this: T): InstanceType<T> {
    return VueGlobalService.__self as unknown as InstanceType<T>
  }
  public constructor() {
    super()
    VueGlobalService.__self = this
    // @ts-ignore
    VueGlobalService.__instance = getCurrentInstance()!.proxy
  }
}
