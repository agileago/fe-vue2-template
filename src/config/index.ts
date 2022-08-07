import defaultConf, { type ConfigTypeOptional } from './config.default'
import deepMerge from 'ts-deepmerge'

let targetConf: ConfigTypeOptional = {}

// 自动扫描配置文件
const requireContext = require.context('./', false, /config\.(\w+)\.ts$/)
requireContext.keys().forEach(path => {
  if (path !== `./config.${process.env.VUE_APP_MODE}.ts`) return
  targetConf = requireContext(path).default
})

const config = deepMerge(defaultConf, targetConf)
config.env = process.env.VUE_APP_MODE
export default config
