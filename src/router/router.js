import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import map from '@/views/map'
const _import = require('./_import');

const view = {
  template: '<router-view></router-view>'
};
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'map',
      component: map
    },
    {
      path: '/test',
      name: 'index',
      component: index
    },
    {
      path: '/system',
      // component: view,
      children:[
        {
          path: '/index',
          name: '系统管理首页',
          component: _import('system/index','views')
        }
      ]
    }
  ]
})
