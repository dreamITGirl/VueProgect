import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/table',
      name: 'tableCom',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Table.vue')
    },
    {
      path:'/baseUse',
      name:'baseUse',
      component: () => import(/* webpackChunkName: "about" */ './components/visComponent/Baseuse.vue')
    },
    {
      path:'/baseUseTwo',
      name:'baseUseTwo',
      component: () => import(/* webpackChunkName: "about" */ './components/visComponent/BaseuseTwo.vue')
    },
    {
      path:'/simple',
      name:'simple',
      component: () => import(/* webpackChunkName: "about" */ './components/Drag/Simple.vue')
    },
    {
      path:'/room',
      name:'roomInfo',
      component: () => import(/* webpackChunkName: "about" */ './components/Drag/Room.vue')
    },
    {
      path:'/UE',
      name:'UE',
      component: () => import('./components/editor/Ueditor.vue')
    },
    {
      path:'/ckeditor',
      name:'ckeditor',
      component: () => import('./components/editor/CKEditor.vue')
    },
    {
      path:'/ridingLantern',
      name:'ridingLantern',
      component: () => import('./components/RidingLatern/Rading.vue')
    },
    {
      path:'/rideLanternTwo',
      name:'rideLanternTwo',
      component: () => import('./components/RidingLatern/RideLanternTwo.vue')
    },
    {
      path:'/handleTime',
      name:'handleTime',
      component: () => import('./components/HandleTime/Dayjs.vue')
    }
  ]
})
