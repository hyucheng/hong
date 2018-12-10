import { getToken, setToken, removeToken } from '@/util/auth'
import { setStore, getStore, removeStore } from '@/util/store'
import { validatenull } from '@/util/validate'
import { encryption } from '@/util/util'
import { getArea } from '@/api/area'
// import md5 from 'md5'
const area = {
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
         * 获取区域信息.
         * @param commit
         * @param state
         * @param dispatch
         * @param areaId
         * @returns {Promise<any>}
         * @constructor
         */
        GetAreaById({ commit, state, dispatch }, areaId) {
            return new Promise((resolve, reject) => {
                getArea(areaId).then(res => {
                    const data = res.data;
                    resolve(data);
                })
            })
        }
    },
    mutations: {

    }

}
export default area
