import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/page/index/'
import index from '@/views/system/index'
const _import = require('./_import');

const view = {
  template: '<router-view></router-view>'
};
Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: '主页',
    //   component: index
    // },
    {
      path: '/',
      name: 'HelloWorld',
      component: Layout,
      children:[
        {
          path: '/',
          name: '首页',
          component: _import('system/index','views')
        }
      ]
    },
    {
      path: '/system',
      component: Layout,
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
