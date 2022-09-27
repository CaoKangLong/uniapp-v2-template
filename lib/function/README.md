## titleCase 字符串首字母大写
#### titleCase(str,isAll)

>注: 该函数必须传入第一个参数，第二个参数是可选的，函数返回一个转换好的字符串

- `str` <*String*> 需要被操作的字符串
- `isAll` <*Boolean*> 可选，是否把完整的句子中所有字符的首字母大写，默认`false`

``` js
console.log(titleCase('test case')); // 仅首字符大写
// 结果为："Test case"
console.log(titleCase('test case')); // 所有字符的首字母大写
// 结果为："Test Case"
```
## timeFormat 格式化时间
#### timeFormat(time,format = "yyyy-mm-dd")

>注:该函数必须传入第一个参数，第二个参数是可选的，函数返回一个格式化好的时间。

- `time` <*String|Number*> 任何合法的时间格式、`秒`或`毫秒`的时间戳
- `format` <*Boolean*> 时间格式，可选。默认为`yyyy-mm-dd`，年为"yyyy"，月为"mm"，日为"dd"，时为"hh"，分为"MM"，秒为"ss"，格式可以自由搭配，如： `yyyy:mm:dd`，`yyyy-mm-dd`，`yyyy年mm月dd日`，`yyyy年mm月dd日 hh时MM分ss秒`，`yyyy/mm/dd/`，`MM:ss`等组合

```js
console.log(timeFormat('1664263971')) // 默认格式化
// 结果为：'2022-09-27'
console.log(timeFormat('1664263971000','yyyy-mm-dd hh:MM:ss')) // 自定义时间格式
// 结果为：'2022-09-27 15:32:51'
console.log(timeFormat(new Date(),'yyyy-mm-dd')) // 支持合法的时间格式
// 结果为：'2022-09-27'
```

## timeFrom 时间戳转为多久之前
#### timeFrom(timestamp)

>无论什么时间，都返回多久以前的格式

- `timestamp` <*String|Number*> `秒`或`毫秒`的时间戳

```js
console.log(timeFrom('1664263971')) // 秒时间戳转换
// 结果为：'1小时前'
console.log(timeFrom('1664263971000')) // 毫秒时间戳转换
// 结果为：'1小时前'
```
## trim 去除空格
#### trim(str,pos)

>该方法可以去除空格，分别可以去除所有空格，两端空格，左边空格，右边空格，默认为去除两端空格

- `str` <*String*> `秒`或`毫秒`的时间戳
- `pos` <*String*> 去除那些位置的空格，可选为：`both`-默认值，去除两端空格，`left`-去除左边空格，`right`-去除右边空格，`all`-去除包括中间和两端的所有空格

```js
console.log(trim(' test case ', 'all')); // 去除所有空格
// 结果为：'testcase'
console.log(trim(' test case '));	// 去除两端空格
// 结果为：'test case'
```
## typeOf 类型检测
#### typeOf(o)

>该方法支持任何类型，与原生typeOf返回值一致，返回字符串：string、number、object、array、date、boolean、function、null、undefined、regExp.

- `o` <*> 传入的参数，参数可以为任何类型

```js
console.log(typeOf('a') === 'string'); // 判断是否字符串
// 结果为：true
console.log(typeOf(1) === 'number'); // 判断是否数字
// 结果为：true
console.log(typeOf({}) === 'object'); // 判断是否对象
// 结果为：true
console.log(typeOf([]) === 'array'); // 判断是否数组
// 结果为：true
console.log(typeOf(new Date()) === 'date'); // 判断是否时间
// 结果为：true
console.log(typeOf(false) === 'boolean'); // 判断是否boolean
// 结果为：true
console.log(typeOf(()=>{}) === 'function'); // 判断是否function
// 结果为：true
console.log(typeOf(null) === 'null'); // 判断是否null
// 结果为：true
console.log(typeOf(undefined) === 'undefined'); // 判断是否undefined
// 结果为：true
console.log(typeOf(/^\s*/) === 'regExp'); // 判断是否正则表达式
// 结果为：true
```
## priceFormat 数字格式化
#### priceFormat(number,decimals,decimalPoint,separator)

- `number` <*Number|String*> 要格式化的数字
- `decimals` <*Number*> 保留几位小数，可选。默认为[`0`]
- `decimalPoint` <*String*> 小数点符号，可选。 默认为[`.`]
- `separator` <*String*> 千分位符号，可选。默认为[`,`]

```js
console.log(priceFormat(10000)); // 格式化数字
// 结果为：'10,000'
console.log(priceFormat(10000,3)); // 保留三位小数
// 结果为：'10,000.000'
console.log(priceFormat(10000,2,'*')); // 保留两位小数并将小数点符号替换成*
// 结果为：'10,000*00'
```
## queryParams 对象转url参数
