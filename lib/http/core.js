/**
 * Universal UNI-APP network request
 * A simpler way to use requests based on Promise objects
 * With support for request and response interception
 * 
 * It is not recommended to modify the current page yourself
 * 
 */

export class HttpCore {
  constructor() {
    // request config
    this.config = {
      baseUrl: config.api, // url = base url + request url
      header: {
        // 'Content-Type': 'application/json;charset=UTF-8',
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: {},
      method: "GET",
      // dataType: 'json' /* If set to JSON, the returned data will be processed once JSON.parse */,
      // responseType: 'text',
      success() {},
      fail() {},
      complete() {},
    };
    // request interceptor
    this.interceptor = {
      before: (_config) => {
        // do something before request is sent
        return _config;
      },
      success: (response,resolve,reject) => {
        /**
         * do something with request success
         * resolve and reject are provided for returning data
         * resolve() or reject()
         */
        if (result.statusCode === 200) {
          return resolve(response);
        }else {
          return reject(response)
        }
      },
      error: (error,resolve,reject) => {
        // do something with request error
        return reject(error);
      }
    };
  }

  request(options) {

    options.baseUrl = options.baseUrl || this.config.baseUrl;
    options.url = options.baseUrl + options.url;
    options.header = options.header || this.config.header;
    options.data = options.data || this.config.data;
    options.method = options.method || this.config.method;
    options.dataType = options.dataType || this.config.dataType;

    return new Promise((resolve, reject) => {
      options.success = (response) => {
        if (this.interceptor.success) {
          this.interceptor.success(response,resolve,reject)
        }
        resolve(response)
      }
      options.fail = (error) => {
        if (this.interceptor.error) {
          this.interceptor.error(error)
        }
        reject(error)
      }
      let _config = null;
      _config = Object.assign({}, this.config, options);
      
      if (this.interceptor.before) {
        let newConfig = this.interceptor.before(_config);
        if (newConfig) {
          _config = newConfig;
        }
      }

      uni.request(_config);
    });
  }
  get(options) {
    if (!options) {
      options = {};
    }
    options.method = "GET";
    return this.request(options);
  }
  post(options) {
    if (!options) {
      options = {};
    }
    options.method = "POST";
    return this.request(options);
  }
  /**
   * 统一的响应日志记录
   * @param {*} req
   */
  _reqlog(req) {
    if (process.env.NODE_ENV === "development") {

    }
  }
  /**
   * 统一的请求日志记录
   * @param {*} res
   */
  _reslog(res) {
    if (process.env.NODE_ENV === "development") {

    }
  }
}
