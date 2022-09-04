const { defineConfig } = require('@vue/cli-service')
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

// region 当前模式  处理环境变量
const mode = (process.env.VUE_APP_MODE = process.VUE_CLI_SERVICE.mode)
const command = mode === 'development' ? 'serve' : 'build'
if (command === 'build') process.env.BABEL_ENV = process.env.NODE_ENV = 'production'
// endregion

module.exports = defineConfig({
  lintOnSave: false,
  publicPath: process.env.VUE_APP_BASE_URL,
  productionSourceMap: false,
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].minify = false
      return args
    })
    // 配置svg-icon
    config.module.rule('svg').exclude.add(resolve('src/assets/icons')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons')) // 处理svg目录
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
  },
  configureWebpack: config => {
    // 上传阿里OSS cdn
    if (command === 'build' && /^http/.test(process.env.VUE_APP_BASE_URL)) {
      // 根据路径获取Oss目录
      const OSS_DIR = new URL(process.env.VUE_APP_BASE_URL).pathname.replace(/\/$/, '')
      config.plugins.unshift(
        new WebpackAliyunOss({
          from: ['./dist/**', '!./dist/**/*.html'],
          dist: OSS_DIR,
          region: process.env.OSS_REGION,
          accessKeyId: process.env.OSS_KEY,
          accessKeySecret: process.env.OSS_SECRET,
          bucket: process.env.OSS_BUCKET,
          verbose: true,
        }),
      )
    }
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
      css: {
        modules: {
          localIdentName: '[local]--[hash:base64:5]',
          exportLocalsConvention: 'camelCaseOnly',
          auto: true,
        }
      }
    },
  },
  devServer: {
    host: '0.0.0.0',
    headers: { 'Access-Control-Allow-Origin': '*' },
    proxy: {
      // '/api': {
      //   target: 'http://test-tmc2.titanmatrix.cn',
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/api': '',
      //   },
      // },
    },
  },
})
