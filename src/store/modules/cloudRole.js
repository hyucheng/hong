import { getToken, setToken, removeToken } from '@/util/auth'
import { setStore, getStore, removeStore } from '@/util/store'
import { validatenull } from '@/util/validate'
import { encryption } from '@/util/util'
import { getList, getAllMenu, updateRole, getRoleMenu } from '@/api/cloudRole'
// import md5 from 'md5'
const cloudRole = {
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
         * 获取角色列表.
         * @param commit
         * @param state
         * @param dispatch
         * @param queryParam
         * @returns {Promise<any>}
         * @constructor
         */
        GetRoleList({ commit, state, dispatch }, queryParam) {
            return new Promise((resolve, reject) => {
                getList(queryParam).then(res => {
                    const data = res.data;
                    resolve(data);
                })
            })
        },

        /**
         * 获取权限采单
         * @param commit
         * @param state
         * @param dispatch
         * @returns {Promise<any>}
         * @constructor
         */
        GetRoleMenuAll({commit, state,dispatch}) {
            return new Promise((resolve, reject) => {
                getAllMenu().then(res => {
                    const data = res.data;
                    resolve(data);
                })
            })
        },

        /**
         * 获取角色权限
         * @param commit
         * @param state
         * @param dispatch
         * @param role
         * @returns {Promise<any>}
         * @constructor
         */
        GetRoleMenu({commit, state,dispatch}, role) {
            return new Promise((resolve, reject) => {
                getRoleMenu(role).then(res => {
                    const data = res.data;
                    resolve(data);
                })
            })
        },

        /**
         * 修改角色信息.
         * @param commit
         * @param state
         * @param dispatch
         * @param role
         * @returns {Promise<any>}
         * @constructor
         */
        UpdateRoleInfo({commit, state,dispatch}, role) {
            return new Promise((resolve, reject) => {
                updateRole(role).then(res => {
                    const data = res.data;
                    resolve(data);
                })
            })
        }
    },
    mutations: {

    }

}
export default cloudRole
