declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

interface Window {
  /**
   * 微前端环境下
   */
  __MICRO_APP_ENVIRONMENT__?: boolean
  /**
   * 微前端应用名称
   */
  __MICRO_APP_NAME__?: string
}
