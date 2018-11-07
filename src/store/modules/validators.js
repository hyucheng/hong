export const max3 = (rule, value, callback) => {
  callback(new Error('不要挣扎了，你怎么填都是报错，hhh'));
};

export const checkInt = (rule,value , callback) => {
  let regex = /^[1-9][0-9]*$/;
  if(!value){
    return callback()
  }
  if(!regex.test(value)){
    callback(new Error('只允许输入数字'))
  }else{
    callback();
  }
};

//移动电话号码验证
export const checkPhone = (rule, value, callback) => {
  var codeRules=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;
  if (value === '') {
    callback(new Error('电话号码不能为空'));
  }
  else if (!codeRules.test(value)) {
    callback(new Error('电话号码格式不正确!'));
  }else{
    callback();
  }
};

//IP地址验证
export const checkIP = (rule, value, callback) => {
  var codeRules=/^(1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|[1-9])\.(1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|\d)\.(1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|\d)\.(1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|\d)$/;
  if (value === '') {
    callback(new Error('IP地址不能为空'));
  }
  else if (!codeRules.test(value)) {
    callback(new Error('IP地址格式不正确!'));
  }else{
    callback();
  }
};

//邮箱验证（名称允许汉字、字母、数字，域名只允许英文域名）
export const checkEmail = (rule, value, callback) => {
  var codeRules=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
  if(value === ''){
    callback(new Error('邮箱不能为空'));
  }
  else if(!codeRules.test(value)){
    callback(new Error('邮箱格式不正确！'));
  }else{
    callback();
  }
};

//栏目编码验证（名称允许字母）
export const checkCode = (rule, value, callback) => {
  var codeRules=/^[a-zA-Z]+$/;
  if(value === ''){
    callback(new Error('栏目编码不能为空'));
  }
  else if(!codeRules.test(value)){
    callback(new Error('栏目编码格式不正确,只允许字母!'));
  }else{
    callback();
  }
};

/**
 * 检查语义化版本号Semantic Version
 * 格式 X.Y.Z
 */
export const checkSemVer = (rule, value, callback) =>{
    let regex = /^[0-9]{1,8}\.[0-9]{1,8}\.[0-9]{1,8}$/;
    if (value && !regex.test(value)){
      callback(new Error("版本号格式不正确，请输入X.Y.Z格式的版本号，如1.0.0"));
    } else{
      callback();
    }
};

const addressUrlRegex = /^(?:http|ftp|https):\/\/(?:(?:\S+(?:\.\S+)+)|(?:\d{1,3}(?:\.\d{1,3}){3}(?::\d{1,4})?))(?:\/[^:\s]*)*$/i;
export const addressUrl = (rule, value, callback) => {
  if(addressUrlRegex.test(value)){
    callback();
  } else{
    callback(new Error('请输入有效的地址'));
  }
};

export function formatDateTime (date) {
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? ('0' + m) : m;
  var d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  var h = date.getHours();
  h=h < 10 ? ('0' + h) : h;
  var minute = date.getMinutes();
  minute = minute < 10 ? ('0' + minute) : minute;
  var second=date.getSeconds();
  second=second < 10 ? ('0' + second) : second;
  return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;
};
