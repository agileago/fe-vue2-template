import { getProtoMetadata, useCtx } from '@/common/core/helper'
import { Hanlder } from '@/common/core/type'

const MetadataKey = Symbol('Link')
export function Link(): PropertyDecorator {
  return function (target: any, key: string | symbol) {
    const list: (string | symbol)[] = Reflect.getMetadata(MetadataKey, target) || []
    const hasItem = list.find(k => k === key)
    if (hasItem) return
    list.push(key)
    Reflect.defineMetadata(MetadataKey, list, target)
  }
}

function handler(targetThis: Record<any, any>) {
  const list: (string | symbol)[] = getProtoMetadata(targetThis, MetadataKey)
  if (!list || !list.length) return
  for (const item of list) {
    const instance = useCtx()
    Object.defineProperty(targetThis, item, {
      enumerable: true,
      configurable: true,
      get() {
        return instance?.refs[item as string]
      },
    })
  }
}

export const LinkHandler: Hanlder = {
  key: 'Link',
  handler,
}
