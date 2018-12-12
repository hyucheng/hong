/**
 * Created by Hong on 2018/12/10.
 */
export const AWebJsData = [
  {
    aId:'1544457600',
    content:"1、typeof(a) === 'string' 2、typeof a === 'string' 3、a.constructor === String"
  },
  {
    aId:'1544457601',
    content:
    '方法一：'+
    ' 去除所有空格: str = str.replace(/\s*/," ")' +
    ' ，  去除两头空格: str = str.replace(/^\s*|\s*$/g," ") ' +
    ' ， 去除左空格： str = str.replace( /^\s*/, " ") ' +
    ' ， 去除右空格： str = str.replace(/(\s*$)/g, " ")'+
    '&#10;方法二：'+
    'str= str.trim() / str.trimLeft() / str.trimRight()'+
    '方法三：'+
    'split() 去空，在for语句判断遍历取到'+
    '方法四：'+
      '$.trim 去空'

  },
  {
    aId:'1544457602',
    content:'function getParmas(a){\n' +
    '        var url = window.location.search;\n' +
    '        url = url.substring(1,url.length);\n' +
    '        url = url.split(\'&\')\n' +
    '        for(let i in url){\n' +
    '            debugger;\n' +
    '            let b = url[i].split(\'=\')[0];\n' +
    '            if(a == b){\n' +
    '                return url[i].split(\'=\')[1];\n' +
    '            }else{\n' +
    '                // alert(\'无此参数\');\n' +
    '            }\n' +
    '        }\n' +
    '    }'
  },
  {
    aId:'1544457603',
    content:'concat  可以合并字符串或数组，其中，两个数组如果合并成一个字符串，后一个数组的下标0的值会拼接上前一个数组最有一个下标的值.而且数组的逗号也会拼接上' +
    '此情况，可以讲其哪一个数组最后一位元素添加为“undefined”，“null”，“ ”'
  },
  {
    aId:'1544457604',
    content:"indexOf() – 返回字符串中一个子串第一处出现的索引。如果没有匹配项，返回 -1 。\n" +
    "\n" +
    "charAt() – 返回指定位置的字符。\n" +
    "\n" +
    "lastIndexOf() – 返回字符串中一个子串最后一处出现的索引，如果没有匹配项，返回 -1 。\n" +
    "\n" +
    "match() – 检查一个字符串是否匹配一个正则表达式。\n" +
    "\n" +
    "substr() 函数 -- 返回从string的startPos位置，长度为length的字符串\n" +
    "\n" +
    "substring() – 返回字符串的一个子串。传入参数是起始位置和结束位置。\n" +
    "\n" +
    "slice() – 提取字符串的一部分，并返回一个新字符串。\n" +
    "\n" +
    "replace() – 用来查找匹配一个正则表达式的字符串，然后使用新字符串代替匹配的字符串。\n" +
    "\n" +
    "search() – 执行一个正则表达式匹配查找。如果查找成功，返回字符串中匹配的索引值。否则返回 -1 。\n" +
    "\n" +
    "split() – 通过将字符串划分成子串，将一个字符串做成一个字符串数组。\n" +
    "\n" +
    "length – 返回字符串的长度，所谓字符串的长度是指其包含的字符的个数。\n" +
    "\n" +
    "toLowerCase() – 将整个字符串转成小写字母。\n" +
    "\n" +
    "toUpperCase() – 将整个字符串转成大写字母。\n"

  }
]






