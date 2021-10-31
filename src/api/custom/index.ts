import { AxiosRequestConfig, custom as requester } from '../http'

interface LoginOption {
  body: {
    username: string
    pwd: string
  }
}

/**
 * 登录接口
 * @param option
 * @param config
 */
export function postLogin(option: LoginOption, config?: AxiosRequestConfig) {
  return requester<string>('/enterprise/gettoken', { method: 'post', ...option }, config)
}

/**
 * 获取用户信息
 * @param config
 */
export function postGetUser(config?: AxiosRequestConfig) {
  return Promise.resolve({
    name: '超级管理员',
  })
}
