/**
 * 装饰器处理
 */
export interface Hanlder {
  key: string
  handler: (targetThis: any) => void
}

/**
 * 获取组件属性
 */
export type ComponentProps<T> = T extends new () => { $props: infer P } ? P : never
