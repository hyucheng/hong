import { getToken, setToken, removeToken } from '@/util/auth'
import { setStore, getStore, removeStore } from '@/util/store'
import { validatenull } from '@/util/validate'
import { encryption } from '@/util/util'
import { gtTableData, saveUserManager } from '@/api/cloudUser'
// import md5 from 'md5'
const cloudUser = {
    state: {
        userInfo: {},
        permission: {},
        roles: [],
        menu: [],
        menuAll: [],
        token: getStore({ name: 'token' }) || '',
    },
    actions: {
        /**
         * 获取用户列表.
         * @param commit
         * @param state
         * @param dispatch
         * @param queryParam
         * @returns {Promise<any>}
         * @constructor
         */
        GetCloudUserData({ commit, state, dispatch }, queryParam) {
            return new Promise((resolve, reject) => {
                gtTableData(queryParam).then(res => {
                    const data = res.data;
                    resolve(data);
                })
            })
        },

        /**
         * 保存用户.
         * @param commit
         * @param state
         * @param dispatch
         * @param data
         * @returns {Promise<any>}
         * @constructor
         */
        SaveManager({ commit, state, dispatch }, data) {
            return new Promise((resolve, reject) => {
                saveUserManager(data).then(res => {
                    const data = res.data;
                    resolve(data);
                })
            })
        },
    },
    mutations: {

    }

}
export default cloudUser
