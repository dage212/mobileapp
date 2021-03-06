import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from './views/Index.vue'
import Me from './views/Me.vue'
import Music from './views/Music.vue'
import Upload from './views/Upload.vue'
import Login from './views/Login'
import Register from './views/Register'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/register',
      name:'Register',
      component:Register
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        {
          path:'me',
          name:'Me',
          component:Me
        },
        {
          path:'music',
          name:'Music',
          component:Music
        },
        {
          path:'upload',
          name:'Upload',
          component:Upload
        },
        {
          path:'index',
          name:'Index',
          component:Index
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
