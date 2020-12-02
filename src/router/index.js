import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'SignIn',
    component: () => import('../views/SignIn.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('../views/MainView.vue'),
    children:[
      {
        path: 'page1',
        component: () => import('../views/page/MyPage1.vue')
      },
      {
        path: 'page2',
        component: () => import('../views/page/MyPage2.vue')
      },
      {
        path: 'page3',
        component: () => import('../views/page/MyPage3.vue')
      },
      {
        path: 'page4',
        component: () => import('../views/page/MyPage4.vue')
      },
      {
        path: 'page5',
        component: () => import('../views/page/MyPage5.vue')
      },
      {
        path: 'page6',
        component: () => import('../views/page/MyPage6.vue')
      },      
      {
        path: 'page7',
        component: () => import('../views/page/MyPage7.vue')
      },                  
      {
        path: 'page8',
        component: () => import('../views/page/MyPage8.vue')
      },                        
      {
        path: 'page9',
        component: () => import('../views/page/MyPage9.vue')
      },                              
      {
        path: 'page10',
        component: () => import('../views/page/MyPage10.vue')
      },                                    
    ] 
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  }]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
