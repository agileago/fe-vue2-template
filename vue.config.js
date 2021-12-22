const path = require('path')
const WebpackAliyunOss = require('webpack-aliyun-oss')
function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

// region 当前模式  处理环境变量
const mode = (process.env.VUE_APP_MODE = process.VUE_CLI_SERVICE.mode)
const command = mode === 'development' ? 'serve' : 'build'
if (command === 'build') process.env.NODE_ENV = 'production'
// endregion

const CDN_HOST = 'https://cdn.titanmatrix.com'
const OSS_DIR = '请输入文件夹名称' // 例子： /matrial/starter 资源存放路径，一般以仓库路径为主

let publicPath = ''
switch (mode) {
  // 生产环境上传CDN
  case 'production':
    publicPath = CDN_HOST + OSS_DIR
    break
}
/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  publicPath: publicPath + '/',
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
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        options.compiler = require('vue-template-babel-compiler')
        return options
      })
  },
  configureWebpack: config => {
    // 上传文件到oss
    if (process.env.VUE_APP_MODE === 'production') {
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
    },
  },
  devServer: {
    disableHostCheck: true,
    host: '0.0.0.0',
    headers: { 'Access-Control-Allow-Origin': '*' },
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://test-tmc2.titanmatrix.cn',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
}
