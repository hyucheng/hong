import {setStore, getStore, removeStore} from '@/util/store'
import {validatenull} from '@/util/validate'
import {getDic,getRemoteDic} from '@/api/admin'
import {baseUrl} from '@/config/env';
import { baseRules, GetRules } from './rules';
import website from '@/const/website';
import { conditions } from './conditions';
const common = {

  state: {
    isCollapse: false,
    isFullScren: false,
    isLock: getStore({
      name: 'isLock'
    }) || false,
    theme: getStore({
      name: 'theme'
    }) || '#409EFF',
    lockPasswd: getStore({
      name: 'lockPasswd'
    }) || '',
    website: website,
    rules: baseRules,
    imgpath: 'http://192.168.203.214/',
    serviceUrl : '',
    location: getStore({ name: 'location' }),
    queryconditions: {}
  },
  actions: {
    //获取字典公用类
    GetDic({commit, state, dispatch}, dic) {
      return new Promise((resolve, reject) => {
        if (dic instanceof Array) {
          Promise.all(dic.map(ele => getDic(ele))).then(data => {
            let result = {};
            dic.forEach((ele, index) => {
              result[ele] = data[index].data;
            })
            resolve(result)
          })
        }
      })
    },
    //动态获取公用类
    GetRemoteDic({commit, state, dispatch}, remoteDic){
      return new Promise((resolve, reject) => {
        if (remoteDic instanceof Array) {
          Promise.all(remoteDic.map(ele => getRemoteDic(ele))).then(data => {
            let result = {};
            remoteDic.forEach((item, index) => {
              const value = data[index].data;
              value && (result[item.name] = value);
            });
            resolve(result);
          });
        }
      });
    },
    formatRules: GetRules,
    //获取定位数据
    GetLocationData({commit, state, dispatch}, data){
      return new Promise((resolve,reject) =>{
        commit('SET_LOCATION', data);
        resolve(data);
      })
    }
  },
  mutations: {
    SET_IMGPATH: (state, active) => active && (state.imgpath = active),
    SET_SERVICEPATH: (state, active) => active && (state.serviceUrl = active),
    SET_COLLAPSE: (state, action) => {
      state.isCollapse = !state.isCollapse;
    },
    SET_FULLSCREN: (state, action) => {
      state.isFullScren = !state.isFullScren;
    },
    SET_LOCK: (state, action) => {
      state.isLock = true;
      setStore({
        name: 'isLock',
        content: state.isLock,
        type: 'session'
      })
    },
    SET_THEME: (state, color) => {
      state.theme = color;
      setStore({
        name: 'theme',
        content: state.theme,
      })
    },
    SET_LOCK_PASSWD: (state, lockPasswd) => {
      state.lockPasswd = lockPasswd;
      setStore({
        name: 'lockPasswd',
        content: state.lockPasswd,
        type: 'session'
      })
    },
    CLEAR_LOCK: (state, action) => {
      state.isLock = false;
      state.lockPasswd = '';
      removeStore({
        name: 'lockPasswd'
      });
      removeStore({
        name: 'isLock'
      });
    },
    SET_LOCATION:(state,location) => {
      state.location.label = location.label;
      state.location.value = location.value;
    },
    ...conditions
  }
}
export default common
