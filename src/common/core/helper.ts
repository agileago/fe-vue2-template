import { getCurrentInstance, inject, InjectionKey } from '@vue/composition-api'

export function useProps<T = any>() {
  const instance = getCurrentInstance()
  return instance!.props as unknown as T
}
export function useCtx() {
  return getCurrentInstance()
}
export function useRefs() {
  const instance = getCurrentInstance()
  return instance!.refs
}
export function useEmit() {
  const instance = getCurrentInstance()
  return instance!.emit
}

export function getProtoMetadata(target: any, key: symbol, returnDesc = false): any[] {
  if (!target) return []
  const proto = Reflect.getPrototypeOf(target)
  if (!proto) return []
  let res: any[] = Reflect.getMetadata(key, proto) || []
  if (returnDesc) {
    res = res.map(k => {
      if (typeof k === 'string') {
        return {
          key: k,
          desc: getDeepOwnDescriptor(proto, k),
        }
      }
      if (typeof k === 'object') {
        return {
          key: k,
          desc: getDeepOwnDescriptor(proto, k.key),
        }
      }
    })
  }
  return res
}
export function getDeepOwnDescriptor(proto: any, key: string): PropertyDescriptor | null {
  if (!proto) return null
  const desc = Reflect.getOwnPropertyDescriptor(proto, key)
  if (desc) return desc
  return getDeepOwnDescriptor(Reflect.getPrototypeOf(proto), key)
}
/**
 * 注入服务
 * @param service
 */
export function injectService<
  T extends {
    new (...args: any[]): InstanceType<T>
    ProviderKey: InjectionKey<InstanceType<T>>
  },
>(service: T, defaultService?: InstanceType<T>): InstanceType<T> {
  return inject(service.ProviderKey, defaultService)!
}
