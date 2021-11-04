import { getProtoMetadata } from '@/common/core/helper'
import { computed } from '@vue/composition-api'
import { Hanlder } from '@/common/core/type'

interface ComputedItem {
  key: string | symbol
  desc: PropertyDescriptor
}

const MetadataKey = Symbol('Computed')
export function Computed() {
  return function (target: any, key: string | symbol) {
    const list: (string | symbol)[] = Reflect.getMetadata(MetadataKey, target) || []
    const hasItem = list.find(k => k === key)
    if (hasItem) return
    list.push(key)
    Reflect.defineMetadata(MetadataKey, list, target)
  }
}

function handler(targetThis: Record<any, any>) {
  const list: ComputedItem[] = getProtoMetadata(targetThis, MetadataKey, true)
  if (!list || !list.length) return
  for (const item of list) {
    const desc = item.desc
    const keyVal = computed({
      get: () => desc.get?.call(targetThis),
      set: (v: any) => desc.set?.call(targetThis, v),
    })
    Object.defineProperty(targetThis, item.key, {
      enumerable: desc?.enumerable,
      configurable: true,
      get() {
        return keyVal.value
      },
      set(v: any) {
        keyVal.value = v
      },
    })
  }
}

export const ComputedHandler: Hanlder = {
  key: 'Computed',
  handler,
}
