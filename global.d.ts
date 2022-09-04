/// <reference types="vite/client" />

declare module '*.vue' {
  import Vue from "vue";
  export default Vue
}

declare namespace __WebpackModuleApi {
  interface NodeProcess {
    env: {
      // 程序运行在什么模式下面
      VUE_APP_MODE: string
      // 部署路径 / or /app/
      VUE_APP_BASE_ROUTE: string
      // 静态资源路径
      VUE_APP_BASE_URL: string
    }
  }
}
