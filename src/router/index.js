import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Index from '@/components/index'
import Login from '@/components/login'
import Register from '@/components/register'
import Playlist from '@/components/playlist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path:'/index',
      name:'Index',
      component:Index
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/login/register',
      name:'register',
      component:Register
    },
    {
      path:'/index/playlist',
      name:'playlist',
      component:Playlist
    }
  ]
})
