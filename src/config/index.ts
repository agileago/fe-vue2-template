import defaultConf from './config.default'
import developmentConf from './config.development'
import productionConf from './config.production'
import uatConf from './config.uat'
import deepMerge from 'ts-deepmerge'

let config = defaultConf
switch (process.env.VUE_APP_MODE) {
  case 'development':
    config = deepMerge(defaultConf, developmentConf)
    break
  case 'uat':
    config = deepMerge(defaultConf, uatConf)
    break
  case 'production':
    config = deepMerge(defaultConf, productionConf)
    break
}
config.env = process.env.VUE_APP_MODE
export default config
