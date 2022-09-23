/**
 * 将单一字符串的首字母大写 
 */
export function titleCase(str,isAll) {
  if(!isAll) return str.charAt(0).toUpperCase() + str.slice(1);
  let newStr = str.split(" ");
  const length = newStr.length;
  for(let index = 0; index < length; index++){
    let item = newStr[index];
    newStr[index] = item.charAt(0).toUpperCase() + item.slice(1);
  }
  return newStr.join(" ")
}

//将秒转化为时分秒
export function formateSeconds(endTime) {
  let secondTime = parseInt(endTime); //将传入的秒的值转化为Number
  let min = 0; // 初始化分
  let h = 0; // 初始化小时
  let result = "";
  if (secondTime > 60) {
    //如果秒数大于60，将秒数转换成整数
    min = parseInt(secondTime / 60); //获取分钟，除以60取整数，得到整数分钟
    secondTime = parseInt(secondTime % 60); //获取秒数，秒数取佘，得到整数秒数
    if (min > 60) {
      //如果分钟大于60，将分钟转换成小时
      h = parseInt(min / 60); //获取小时，获取分钟除以60，得到整数小时
      min = parseInt(min % 60); //获取小时后取佘的分，获取分钟除以60取佘的分
    }
  }
  result = `${h.toString().padStart(2, "0")}:${min
    .toString()
    .padStart(2, "0")}:${secondTime.toString().padStart(2, "0")}`;
  return result;
}

/**
 *
 * 时分秒
 */
export function SecondToDate(msd) {
  var time = msd;
  if (null != time && "" != time) {
    if (time > 60 && time < 60 * 60) {
      time =
        parseInt(time / 60.0) +
        ":" +
        parseInt((parseFloat(time / 60.0) - parseInt(time / 60.0)) * 60);
    } else if (time >= 60 * 60 && time < 60 * 60 * 24) {
      time =
        parseInt(time / 3600.0) +
        ":" +
        parseInt((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60) +
        ":" +
        parseInt(
          (parseFloat(
            (parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60
          ) -
            parseInt(
              (parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60
            )) *
            60
        );
    } else if (time >= 60 * 60 * 24) {
      time =
        parseInt(time / 3600.0 / 24) +
        ":" +
        parseInt(
          (parseFloat(time / 3600.0 / 24) - parseInt(time / 3600.0 / 24)) * 24
        ) +
        ":" +
        parseInt((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60) +
        ":" +
        parseInt(
          (parseFloat(
            (parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60
          ) -
            parseInt(
              (parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60
            )) *
            60
        );
    } else {
      time = parseInt(time);
    }
  }
  return time;
}
/**
 *
 * @desccrition: 对String类型去除空格的拓展
 * @dir : 被去除空格所在的位置
 * @test: ie6-9 chrome firefox
 */
export function trim(str, dir) {
  switch (dir) {
  case 0: // 去左边的空格
    return str.replace(/(^\s*)/g, "");
  case 1: // 去右边的空格
    return str.replace(/(\s*$)/g, "");
  case 2: // 去掉所有的空格
    return str.replace(/(\s*)/g, "");
  default:
    // 去掉两边的空格
    return str.replace(/(^\s*)|(\s*$)/g, "");
  }
}

/**
 * 判断是否字符串
 * @param->o   : 传入的参数，参数可以为任何类型。
 * @return:   true表示为字符串，false为非字符串
 */
export function isString(o) {
  // 是否字符串
  return Object.prototype.toString.call(o).slice(8, -1) === "String";
}

/**
 *
 * @descrition : 该函数的功能是判断转入的参数是否为数字类型。
 * @param->o   : 传入的参数，参数可以为任何类型。
 * @return:   true表示为数字，false为非数字
 *
 */
export function isNumber(o) {
  // 是否数字
  return Object.prototype.toString.call(o).slice(8, -1) === "Number";
}

export function isObject(o) {
  // 是否对象
  return Object.prototype.toString.call(o).slice(8, -1) === "Object";
}

export function isArray(o) {
  // 是否数组
  return Object.prototype.toString.call(o).slice(8, -1) === "Array";
}

export function isDate(o) {
  // 是否时间
  return Object.prototype.toString.call(o).slice(8, -1) === "Date";
}

export function isBoolean(o) {
  // 是否boolean
  return Object.prototype.toString.call(o).slice(8, -1) === "Boolean";
}

export function isFunction(o) {
  // 是否函数
  return Object.prototype.toString.call(o).slice(8, -1) === "Function";
}

export function isNull(o) {
  // 是否为null
  return Object.prototype.toString.call(o).slice(8, -1) === "Null";
}

export function isUndefined(o) {
  // 是否undefined
  return Object.prototype.toString.call(o).slice(8, -1) === "Undefined";
}

export function isFalse(o) {
  if (
    o === "" ||
    o === undefined ||
    o === null ||
    o === "null" ||
    o === "undefined" ||
    o === 0 ||
    o === false ||
    isNaN(o)
  ) {
    return true;
  }
  return false;
}

export function isTrue(o) {
  if (
    o === "" ||
    o === undefined ||
    o === null ||
    o === "null" ||
    o === "undefined" ||
    o === 0 ||
    o === false ||
    isNaN(o)
  ) {
    return false;
  }
  return true;
}

export function browserType() {
  var userAgent = navigator.userAgent; // 取得浏览器的userAgent字符串
  var isOpera = userAgent.indexOf("Opera") > -1; // 判断是否Opera浏览器
  var isIE =
    userAgent.indexOf("compatible") > -1 &&
    userAgent.indexOf("MSIE") > -1 &&
    !isOpera; // 判断是否IE浏览器
  var isEdge = userAgent.indexOf("Edge") > -1; // 判断是否IE的Edge浏览器
  var isFF = userAgent.indexOf("Firefox") > -1; // 判断是否Firefox浏览器
  var isSafari =
    userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") === -1; // 判断是否Safari浏览器
  var isChrome =
    userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; // 判断Chrome浏览器
  if (isIE) {
    var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
    reIE.test(userAgent);
    var fIEVersion = parseFloat(RegExp["$1"]);
    if (fIEVersion === 7) return "IE7";
    else if (fIEVersion === 8) return "IE8";
    else if (fIEVersion === 9) return "IE9";
    else if (fIEVersion === 10) return "IE10";
    else if (fIEVersion === 11) return "IE11";
    else return "IE7以下"; // IE版本过低
  }

  if (isFF) return "FF";
  if (isOpera) return "Opera";
  if (isEdge) return "Edge";
  if (isSafari) return "Safari";
  if (isChrome) return "Chrome";
}

export function typeOf(obj) {
  const toString = Object.prototype.toString;
  const map = {
    "[object Boolean]": "boolean",
    "[object Number]": "number",
    "[object String]": "string",
    "[object Function]": "function",
    "[object Array]": "array",
    "[object Date]": "date",
    "[object RegExp]": "regExp",
    "[object Undefined]": "undefined",
    "[object Null]": "null",
    "[object Object]": "object",
  };
  return map[toString.call(obj)];
}

/**
 * 数组去重的方法
 * @param {*} arr 执行去重的数据
 * @returns {array} 返回去重结束的数组
 */
export function arrayUnique(someArray) {
  let tempArray = someArray.slice(0); // 复制数组到临时数组
  for (var i = 0; i < tempArray.length; i++) {
    for (var j = i + 1; j < tempArray.length; ) {
      if (tempArray[j] === tempArray[i]) {
        // 后面的元素若和待比较的相同，则删除并计数；
        // 删除后，后面的元素会自动提前，所以指针j不移动
        tempArray.splice(j, 1);
      } else {
        j++;
      } // 不同，则指针移动
    }
  }
  return tempArray;
}

/**
 * 小于10补0
 * @param {*} n
 */
export function formatDigit(n) {
  return n.toString().replace(/^(\d)$/, "0$1");
}

/**
 * 千分位显示，常用于价格的显示
 * @param {*} num
 */
export function toThousands(num) {
  return parseFloat(num)
    .toFixed(2)
    .replace(/(\d{1,3})(?=(\d{3})+(?:\.))/g, "$1,");
}

/**
 * 浮点数的加法
 * @param {*} arg1
 * @param {*} arg2
 */
export function floatAdd(arg1, arg2) {
  var r1, r2, m;
  try {
    r1 = arg1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  return (parseFloat(arg1) * m + parseFloat(arg2) * m) / m;
}

/**
 * 浮点数的乘法
 * @param {*} arg1
 * @param {*} arg2
 */
export function floatMul(arg1, arg2) {
  var m = 0;
  var s1 = arg1.toString();
  var s2 = arg2.toString();
  try {
    m += s1.split(".")[1].length;
  } catch (e) {}
  try {
    m += s2.split(".")[1].length;
  } catch (e) {}
  return (
    (Number(s1.replace(".", "")) * Number(s2.replace(".", ""))) /
    Math.pow(10, m)
  );
}
/*
 * 银行卡每四位空格
 */
export function formatCardNo(cardNo) {
  cardNo += "";
  return cardNo
    .replace(/\s/g, "")
    .replace(/[^\d]/g, "")
    .replace(/(\d{4})(?=\d)/g, "$1 ");
}

const formatTime = (date) => {
  /*  console.log(time)
    let date = new Date(time);*/
  // console.log(date)
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return (
    [year, month, day].map(formatNumber).join("/") +
    " " +
    [hour, minute, second].map(formatNumber).join(":")
  );
};

const format_time = (date) => {
  /*  console.log(time)
      let date = new Date(time);*/
  // console.log(date)
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return (
    [year, month, day].map(formatNumber).join("-") +
    " " +
    [hour, minute].map(formatNumber).join(":")
  );
};

export function getTime(timestamp) {
  var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  return [hour, minute].map(formatNumber).join(":");
}

export function timestampToTime(timestamp) {
  var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var Y = date.getFullYear();
  var M =
    date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1;
  var D = date.getDate();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  // return Y+M+D+' '+h+m+s;
  return [Y, M, D].map(formatNumber).join("-");
  /*        + ' ' + [h, m, s].map(formatNumber).join(':')*/
}
export function timestampToHSM(timestamp) {
  var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var Y = date.getFullYear();
  var M =
    date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1;
  var D = date.getDate();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  // return Y+M+D+' '+h+m+s;
  return (
    [Y, M, D].map(formatNumber).join("-") +
    " " +
    [h, m].map(formatNumber).join(":")
  );
}

const formatNumber = (n) => {
  n = n.toString();
  return n[1] ? n : "0" + n;
};

/**
 * 时间戳转为格式化时间字符串
 * @param    {date}   timestamp [时间戳]
 * @param    {string}   formats   [时间格式] 1. Y-M-D/2. Y-M-D h:m:s/3. Y年M月D日/4. Y年M月D日 h时m分/5. Y年M月D日 h时m分s秒
 */
export function formatDate(timestamp, formats) {
  /*
  formats格式包括
  1. Y-M-D
  2. Y-M-D h:m:s
  3. Y年M月D日
  4. Y年M月D日 h时m分
  5. Y年M月D日 h时m分s秒
  示例：console.log(formatDate(1500305226034, 'Y年M月D日 h:m:s')) ==> 2017年07月17日 23:27:06
   */
  formats = formats || "Y-M-D";

  var myDate = timestamp ? new Date(timestamp) : new Date();

  var year = myDate.getFullYear();
  var month = formatDigit(myDate.getMonth() + 1);
  var day = formatDigit(myDate.getDate());

  var hour = formatDigit(myDate.getHours());
  var minute = formatDigit(myDate.getMinutes());
  var second = formatDigit(myDate.getSeconds());

  var ddd = {
    Y: year,
    M: month,
    D: day,
    h: hour,
    m: minute,
    s: second,
  };
  return formats.replace(/Y|M|D|h|m|s/g, function (matches) {
    return ddd[matches];
  });
  // 小于10补0
  function formatDigit(n) {
    return n.toString().replace(/^(\d)$/, "0$1");
  }
}
/*
 * obj 转 params字符串参数
 * 例子：{a:1,b:2} => a=1&b=2
 */
export function objParseParam(obj) {
  let paramsStr = "";
  if (obj instanceof Array) return paramsStr;
  if (!(obj instanceof Object)) return paramsStr;
  for (let key in obj) {
    paramsStr += `${key}=${obj[key]}&`;
  }
  return paramsStr.substring(0, paramsStr.length - 1);
}

/*
 * obj 转 路由地址带参数
 * 例子：{a:1,b:2} => /pages/tabbar/home?a=1&b=2
 */
export function objParseUrlAndParam(path, obj) {
  let url = path || "/";
  let paramsStr = "";
  if (obj instanceof Array) return url;
  if (!(obj instanceof Object)) return url;
  if (obj instanceof Array) {
    paramsStr = "";
  }
  if (!(obj instanceof Object)) {
    paramsStr = "";
  }
  for (let key in obj) {
    paramsStr += `${key}=${obj[key]}&`;
    paramsStr = paramsStr.substring(0, paramsStr.length - 1);
  }
  if (paramsStr) {
    if (url.indexOf("?") === -1) {
      url = `${url}?${paramsStr}`;
    } else {
      url = url.replace("?", `?${paramsStr}&`);
    }
  }
  return url;
}

/*
 * 获取url字符串参数
 */
export function getRequestParameters(locationhref) {
  let href = locationhref || "";
  let theRequest = new Object();
  let str = href.split("?")[1];
  if (str != undefined) {
    let strs = str.split("&");
    for (let i = 0; i < strs.length; i++) {
      theRequest[strs[i].split("=")[0]] = strs[i].split("=")[1];
    }
  }
  return theRequest;
}

/**
 * 获取应用使用平台标识
 */
export function getPlatformType() {
  // #ifdef APP-PLUS
  return "app";
  // #endif
  // #ifdef MP-WEIXIN
  return "wxapp";
  // #endif
  // #ifdef H5
  return "h5";
  // #endif
  return "h5";
}

/**
 * 获取区分h5平台的具体环境
 */
export function getPlatform() {
  let user_platform = getPlatformType();
  if (user_platform == "h5") {
    let ua = navigator.userAgent.toLowerCase();
    let isWeixin = ua.indexOf("micromessenger") != -1;
    if (isWeixin) {
      user_platform = "wx";
    }
  }

  return user_platform;
}

/**
 * 增加参数到地址
 * */
export function addParams(url, params) {
  let new_url;
  if (url.indexOf("?") === -1) {
    new_url = `${url}?${params}`;
  } else {
    new_url = url.replace("?", `?${params}&`);
  }
  return new_url;
}

export function friendlyDate(timestamp) {
  var formats = {
    year: "%n% 年前",
    month: "%n% 月前",
    day: "%n% 天前",
    hour: "%n% 小时前",
    minute: "%n% 分钟前",
    second: "%n% 秒前",
  };

  var now = Date.now();
  var seconds = Math.floor((now - timestamp) / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  var days = Math.floor(hours / 24);
  var months = Math.floor(days / 30);
  var years = Math.floor(months / 12);

  var diffType = "";
  var diffValue = 0;
  if (years > 0) {
    diffType = "year";
    diffValue = years;
  } else {
    if (months > 0) {
      diffType = "month";
      diffValue = months;
    } else {
      if (days > 0) {
        diffType = "day";
        diffValue = days;
      } else {
        if (hours > 0) {
          diffType = "hour";
          diffValue = hours;
        } else {
          if (minutes > 0) {
            diffType = "minute";
            diffValue = minutes;
          } else {
            diffType = "second";
            diffValue = seconds === 0 ? (seconds = 1) : seconds;
          }
        }
      }
    }
  }
  return formats[diffType].replace("%n%", diffValue);
}

export default {
  formatDate,
  formatTime: formatTime,
  timestampToTime: timestampToTime,
  getTime: getTime,
  format_time: format_time,
  timestampToHSM: timestampToHSM,
  // 将单个字符串的首字母大写
  fistLetterUpper,
  //将秒转化为时分秒
  formateSeconds,
  // 时分秒
  SecondToDate,
  // 该函数的功能是判断转入的参数是否为数字类型。
  isNumber,
  // 该函数的功能是判断转入的参数是否为字符串类型。
  isString,
  // 该函数的功能是判断转入的参数是否为对象类型。
  isObject,
  // 该函数的功能是判断转入的参数是否为数组类型。
  isArray,
  // 该函数的功能是判断转入的参数是否为日期类型。
  isDate,
  // 该函数的功能是判断转入的参数是否为布尔类型。
  isBoolean,
  // 该函数的功能是判断转入的参数是否为函数类型。
  isFunction,
  // 该函数的功能是判断转入的参数是否为null类型。
  isNull,
  // 该函数的功能是判断转入的参数是否为underfined类型。
  isUndefined,
  // 该函数的功能是判断转入的参数是否为false。（0，false，undefined，null，'', ' ', NaN）都属于false
  isFalse,
  // 该函数的功能是判断转入的参数是否为true。
  isTrue,
  // 去除空格 type = 默认去除左右空格 0 左边空格 1 右边空格 2 所有空格
  trim,
  // 判断浏览器类型
  browserType,
  // 判断类型
  typeOf,
  // 数组去重
  arrayUnique,
  // 变成两位小数
  toThousands,
  // 浮点数的加法
  floatAdd,
  // 浮点数的乘法
  floatMul,
  // 时间戳转为格式化时间字符串
  formatDate,
  // 小于10补0
  formatDigit,
  // 银行卡每4位空格
  formatCardNo,
  // {a:1,b:2} => a=1&b=2
  objParseParam,
  // ('/pages/tabbar/home', {a:1,b:2}) => /pages/tabbar/home?a=1&b=2
  objParseUrlAndParam,
  // 获取url字符串参数
  getRequestParameters,
  // 获取应用使用平台标识
  getPlatformType,
  // 获取区分h5平台的具体环境
  getPlatform,
  addParams,
  friendlyDate,
};
