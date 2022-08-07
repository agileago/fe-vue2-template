import type { DeepPartial } from 'ts-essentials'

/**
 * 默认本地开发配置
 */
export class Config {
  env = 'development'
  routeBase: string = process.env.BASE_URL
}

export type ConfigTypeOptional = DeepPartial<Config>

export default new Config()
