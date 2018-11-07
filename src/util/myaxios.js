import axios from "@/router/axios"

/**
 * 序列化表单
 * @param formMap
 * @returns {URLSearchParams}
 */
export const formSerial = formMap => {
  var paramsMap = new URLSearchParams();
  if (formMap) {
    for (var i in formMap) {
      paramsMap.append(i, formMap[i]);
    }
  }
  return paramsMap;
};

export const axiosPost = (url,params,is) => {
  if(!is){
    var data = new URLSearchParams();
    for(var key in params){
      data.append(key,params[key]);
    }
    return axios.post(url, data);
  }else{
    return axios.post(url, params);
  }
};

export const axiosGet = (url,params) => {
  let data = '?';
  for(var key in params){
    data = data +key+ '=' + params[key] + '&'
  }
  data = data.substring(0,data.length-1);
  url = url + data;
  return axios.get(url);
};

export const axiosPut = (url,params) => {
  let data = '?';
  for(var key in params){
    data = data +key+ '=' + params[key] + '&'
  }
  data = data.substring(0,data.length-1);
  url = url + data;
  return axios.put(url);
};

export const axiosDelete = (url,params) => {
  let data = '?';
  for(var key in params){
    data = data +key+ '=' + params[key] + '&'
  }
  data = data.substring(0,data.length-1);
  url = url + data;
  return axios.delete(url);
};
