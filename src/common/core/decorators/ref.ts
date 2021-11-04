import { ref } from '@vue/composition-api'
import { getProtoMetadata } from '@/common/core/helper'
import { Hanlder } from '@/common/core/type'

const MetadataKey = Symbol('Ref')
export function Ref(): PropertyDecorator {
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
    const keyVal = ref()
    Object.defineProperty(targetThis, item, {
      enumerable: true,
      configurable: true,
      get() {
        return keyVal.value
      },
      set(v) {
        keyVal.value = v
      },
    })
  }
}

export const RefHandler: Hanlder = {
  key: 'Ref',
  handler,
}
