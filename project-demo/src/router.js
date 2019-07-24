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
    }
  ]
})
