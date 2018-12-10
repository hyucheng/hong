import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import common from './modules/common'
import tags from './modules/tags'
import admin from './modules/admin'
import errLog from './modules/errLog'
import getters from './getters'
import cloudUser from './modules/cloudUser'
import cloudRole from './modules/cloudRole'
import area from './modules/area'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    user,
    common,
    errLog,
    admin,
    tags,
    cloudUser,
    cloudRole,
    area
  },
  getters,
})

export default store
