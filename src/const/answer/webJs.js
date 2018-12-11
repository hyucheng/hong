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
    'split() 去空，在for语句判断遍历取到'

  }
]






