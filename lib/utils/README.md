### titleCase 字符串首字母大写
将单一字符串的首字母大写
#### titleCase(string,isAll)
- `string` <String> 需要被操作的字符串
- `isAll` <Boolean> 是否把完整的句子的首字符全部大写，默认`false`

``` js
let str = 'test';
titleCase(str);
// 输出  "Test"

// isAll = true
let str = "i,m happy today. How about you?"
titleCase(str,true)
// 输出  "I'm Happy Today. How About You?"
```
