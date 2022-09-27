import { round } from './digit.js'

/**
 * @description 字符串的首字母大写
 * @param {String} str
 * @param {Boolean} isAll
 * @return {string} 返回转换后的字符串
 */
export function titleCase(str, isAll) {
  if (!isAll) return str.charAt(0).toUpperCase() + str.slice(1);
  let newStr = str.split(" ");
  const length = newStr.length;
  for (let index = 0; index < length; index++) {
    let item = newStr[index];
    newStr[index] = item.charAt(0).toUpperCase() + item.slice(1);
  }
  return newStr.join(" ");
}

/**
 * @description 格式化时间
 * @param {String|Number} dateTime 需要格式化的时间戳
 * @param {String} formatStr 格式化规则 yyyy:mm:dd|yyyy:mm|yyyy年mm月dd日|yyyy年mm月dd日 hh时MM分等,可自定义组合 默认yyyy-mm-dd
 * @return {string} 返回格式化后的字符串
 */
export function timeFormat(dateTime = null, formatStr = "yyyy-mm-dd") {
  let date;
  // 若传入时间为假值，则取当前时间
  if (!dateTime) {
    date = new Date();
  }
  // 若用户传入字符串格式时间戳，new Date无法解析，需做兼容
  else if (
    (typeof dateTime === "string" || typeof dateTime === "number") &&
    /^\d+$/.test(dateTime.toString().trim())
  ) {
    // 若为unix秒时间戳，则转为毫秒时间戳
    timestamp = /^\d{10}$/.test(dateTime) ? dateTime * 1000 : dateTime;
    date = new Date(Number(timestamp));
  }
  // 其他都认为符合 RFC 2822 规范
  else {
    // 处理平台性差异，在Safari/Webkit中，new Date仅支持/作为分割符的字符串时间
    date = new Date(
      typeof dateTime === "string" ? dateTime.replace(/-/g, "/") : dateTime
    );
  }

  const timeSource = {
    y: date.getFullYear().toString(), // 年
    m: (date.getMonth() + 1).toString().padStart(2, "0"), // 月
    d: date.getDate().toString().padStart(2, "0"), // 日
    h: date.getHours().toString().padStart(2, "0"), // 时
    M: date.getMinutes().toString().padStart(2, "0"), // 分
    s: date.getSeconds().toString().padStart(2, "0"), // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };

  for (const key in timeSource) {
    const [ret] = new RegExp(`${key}+`).exec(formatStr) || [];
    if (ret) {
      // 年可能只需展示两位
      const beginIndex = key === "y" && ret.length === 2 ? 2 : 0;
      formatStr = formatStr.replace(ret, timeSource[key].slice(beginIndex));
    }
  }
  return formatStr;
}

/**
 * @description 时间戳转为多久之前
 * @param {String|Number} timestamp 时间戳
 * 无论什么时间，都返回多久以前的格式
 * @return {string} 格式后的内容
 */
 export function timeFrom(timestamp = null) {
  if (timestamp == null) timestamp = Number(new Date());
  if (!/^\d+$/.test(timestamp.toString().trim())) return 'Parameter is wrong';
  timestamp = parseInt(timestamp);
  // 判断用户输入的时间戳是秒还是毫秒,一般前端js获取的时间戳是毫秒(13位),后端传过来的为秒(10位)
  if (timestamp.toString().length == 10) timestamp *= 1000;
  let timer = new Date().getTime() - timestamp;
  timer = parseInt(timer / 1000);
  // 如果小于5分钟,则返回"刚刚",其他以此类推
  let tips = "";
  switch (true) {
    case timer < 300:
      tips = "刚刚";
      break;
    case timer >= 300 && timer < 3600:
      tips = `${parseInt(timer / 60)}分钟前`;
      break;
    case timer >= 3600 && timer < 86400:
      tips = `${parseInt(timer / 3600)}小时前`;
      break;
    case timer >= 86400 && timer < 2592000:
      tips = `${parseInt(timer / 86400)}天前`;
      break;
    case timer >= 2592000 && timer < 365 * 86400:
      tips = `${parseInt(timer / (86400 * 30))}个月前`;
      break;
    default:
      tips = `${parseInt(timer / (86400 * 365))}年前`;
  }
  return tips;
}

/**
 * @description 去除空格
 * @param {String} str 需要去除空格的字符串
 * @param {String} pos both(左右)|left|right|all 默认both
 * @return {string} 去除空格的字符串
 */
export function trim(str, pos = 'both') {
	str = String(str)
	if (pos == 'both') {
		return str.replace(/^\s+|\s+$/g, '')
	}
	if (pos == 'left') {
		return str.replace(/^\s*/, '')
	}
	if (pos == 'right') {
		return str.replace(/(\s*$)/g, '')
	}
	if (pos == 'all') {
		return str.replace(/\s+/g, '')
	}
	return str
}
/**
 * @description 类型检测
 * @export typeOf
 * @param {*} o 传入的参数，参数可以为任何类型。
 * @return {string} 类型
 */
export function typeOf(o) {
  // 返回类型
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
  return map[toString.call(o)];
  // return Object.prototype.toString.call(o).slice(8, -1);
}

/**
 * @description 数字格式化
 * @param {Number|String} number 要格式化的数字
 * @param {Number} decimals 保留几位小数
 * @param {String} decimalPoint 小数点符号
 * @param {String} thousandsSeparator 千分位符号
 * @return {string} 格式化后的数字
 */
export function priceFormat(number, decimals = 0, decimalPoint = '.', thousandsSeparator = ',') {
	number = (`${number}`).replace(/[^0-9+-Ee.]/g, '')
	const n = !isFinite(+number) ? 0 : +number
	const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals)
	const sep = (typeof thousandsSeparator === 'undefined') ? ',' : thousandsSeparator
	const dec = (typeof decimalPoint === 'undefined') ? '.' : decimalPoint
	let s = ''

	s = (prec ? round(n, prec) + '' : `${Math.round(n)}`).split('.')
	const re = /(-?\d+)(\d{3})/
	while (re.test(s[0])) {
		s[0] = s[0].replace(re, `$1${sep}$2`)
	}
	
	if ((s[1] || '').length < prec) {
		s[1] = s[1] || ''
		s[1] += new Array(prec - s[1].length + 1).join('0')
	}
	return s.join(dec)
}

/**
 * @description 对象转url参数
 * @param {object} data,对象
 * @param {Boolean} isPrefix,是否自动加上"?"
 * @param {string} arrayFormat 规则 indices|brackets|repeat|comma
 */
export function queryParams(data = {}, isPrefix = true, arrayFormat = 'brackets') {
	const prefix = isPrefix ? '?' : ''
	const _result = []
	if (['indices', 'brackets', 'repeat', 'comma'].indexOf(arrayFormat) == -1) arrayFormat = 'brackets'
	for (const key in data) {
		const value = data[key]
		// 去掉为空的参数
		if (['', undefined, null].indexOf(value) >= 0) {
			continue
		}
		// 如果值为数组，另行处理
		if (value.constructor === Array) {
			// e.g. {ids: [1, 2, 3]}
			switch (arrayFormat) {
				case 'indices':
					// 结果: ids[0]=1&ids[1]=2&ids[2]=3
					for (let i = 0; i < value.length; i++) {
						_result.push(`${key}[${i}]=${value[i]}`)
					}
					break
				case 'brackets':
					// 结果: ids[]=1&ids[]=2&ids[]=3
					value.forEach((_value) => {
						_result.push(`${key}[]=${_value}`)
					})
					break
				case 'repeat':
					// 结果: ids=1&ids=2&ids=3
					value.forEach((_value) => {
						_result.push(`${key}=${_value}`)
					})
					break
				case 'comma':
					// 结果: ids=1,2,3
					let commaStr = ''
					value.forEach((_value) => {
						commaStr += (commaStr ? ',' : '') + _value
					})
					_result.push(`${key}=${commaStr}`)
					break
				default:
					value.forEach((_value) => {
						_result.push(`${key}[]=${_value}`)
					})
			}
		} else {
			_result.push(`${key}=${value}`)
		}
	}
	return _result.length ? prefix + _result.join('&') : ''
}


/**
 * @description 是否为true md中未描述
 * @param {*} o
 * @return {boolean} 
 */
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
/**
 * @description 是否为false md中未描述
 * @param {*} o
 * @return {boolean} 
 */
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

export default {
  titleCase,
  timeFormat,
  timeFrom,
  trim,
  typeOf,
  priceFormat,
  isTrue,
  isFalse
};
