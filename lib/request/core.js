/**
 * 通用uni-app网络请求
 * 基于Promise对象使用请求的更简单方法
 * 支持请求和响应拦截、
 * 
 * 不建议直接修改当前页面
 * 
 */

export class RequestCore {
  constructor() {
    // 请求配置
    this.config = {
      baseUrl: '', // url = base url + request url
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
    this.interceptor = null;
  }

  request(options) {
    // 配置请求数据
    options.baseUrl = options.baseUrl || this.config.baseUrl;
    options.url = options.baseUrl + options.url;
    options.header = options.header || this.config.header;
    options.data = options.data || this.config.data;
    options.method = options.method || this.config.method;
    options.dataType = options.dataType || this.config.dataType;

    return new Promise((resolve, reject) => {
      // 内置请求成功处理
      options.success = (response) => {
        // 请求成功进入拦截器
        if (this.interceptor.success) {
          this.interceptor.success(response, resolve, reject)
        }
        // 防止无返回
        resolve(response)
      }
      // 内置请求失败处理
      options.fail = (error) => {
        // 请求失败进入拦截器
        if (this.interceptor.error) {
          this.interceptor.error(error, resolve, reject)
        }
        // 防止无返回
        reject(error)
      }
      // 合并请求配置
      let _config = null;
      _config = Object.assign({}, this.config, options);
      // 请求前进入拦截器
      if (this.interceptor.before) {
        let newConfig = this.interceptor.before(_config);
        if (newConfig) {
          _config = newConfig;
        }
      }
      // 发起请求
      uni.request(_config);
    });
  }
  get(url, data = {}, options = {}) {
    options.url = url
    options.data = data
    options.method = "GET"
    return this.request(options)
  }
  post(url, data = {}, options = {}) {
    options.url = url
    options.data = data
    options.method = "POST"
    return this.request(options)
  }
  // delete请求
  del (url, data = {}, options = {}) {
    options.url = url
    options.data = data
    options.method = 'DELETE'
    return this.request(options)
  }
  // options请求
  options (url, data = {}, options = {}) {
    options.url = url
    options.data = data
    options.method = 'options'
    return this.request(options)
  }
  // put请求
  put (url, data = {}, options = {}) {
    options.url = url
    options.data = data
    options.method = 'put'
    return this.request(options)
  }
  // head请求
  head (url, data = {}, options = {}) {
    options.url = url
    options.data = data
    options.method = 'head'
    return this.request(options)
  }
  // trace请求
  trace (url, data = {}, options = {}) {
    options.url = url
    options.data = data
    options.method = 'trace'
    return this.request(options)
  }
  // connect请求
  connect (url, data = {}, options = {}) {
    options.url = url
    options.data = data
    options.method = 'connect'
    return this.request(options)
  }
}
