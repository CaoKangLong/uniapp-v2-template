import { RequestCore } from './core'

class Request extends RequestCore {
  constructor() {
    super()
    // 实例
    this.instance = null;
    // 请求配置
    this.config = {
      baseUrl: 'https://www.example.com', // url = base url + request url
      header: {
        // 'Content-Type': 'application/json;charset=UTF-8',
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: {},
      method: "GET",
      // dataType: 'json' /* 如果设置为JSON，返回的数据将在JSON.parse一次处理 */,
      success() {},
      fail() {},
      complete() {},
    };
    // 请求拦截器
    this.interceptor = {
      before: (_config) => {
        // 请求前
        return _config;
      },
      success: (response,resolve,reject) => {
        // 请求成功后
        if (response.statusCode === 200) {
          return resolve(response);
        }else if (response.statusCode === 500) {
          uni.showToast({
            title: '500: 内部服务器错误',
            icon: 'none',
            duration: 1500
          })
          reject(response)
        } else if (response.statusCode === 400) {
          uni.showToast({
            title: '400: 参数错误',
            icon: 'none',
            duration: 1500
          })
          reject(response)
        }else if (response.statusCode === 405) {
          uni.showToast({
            title: '405: 传参方式错误',
            icon: 'none',
            duration: 1500
          })
          reject(response)
        } else if (response.statusCode === 404) {
          uni.showToast({
            title: '404 Not Found',
            icon: 'none',
            duration: 1500
          })
          reject(response)
        } else if (response.statusCode === 415) {
          uni.showToast({
            title: '415: 服务器无法处理请求附带的媒体格式',
            icon: 'none',
            duration: 1500
          })
          reject(response)
        }
      },
      error: (error,resolve,reject) => {
        // 请求失败后
        return reject(error);
      }
    };
  }
  static getInstance() {
    if (!this.instance) {
      this.instance = new RequestCore();
    }
    return this.instance;
  }
}
let RequestInstance = RequestInstance.getInstance();
export default RequestInstance;