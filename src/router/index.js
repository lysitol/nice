import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    meta:{
      data:true
    },
    children:[
      {
        path: '/home/popup',
        name: 'popup',
        component: () => import(/* webpackChunkName: "popup" */ '../views/popup.vue'),


      }
    ]
  },
  {
    path: '/zhuanti',
    name: 'zhuanti',
    component: () => import(/* webpackChunkName: "zhuanti" */ '../views/zhuanti.vue'),
  },
  {
    path: '/fenlei',
    name: 'fenlei',
    component: () => import(/* webpackChunkName: "fenlei" */ '../views/fenlei.vue'),
    meta:{
      bool:true
    },
    children:[
      {
        path: '/fenlei/sosuo',
        name: 'fenleisou',
        component: () => import(/* webpackChunkName: "sousuo" */ '../views/popup.vue'),
      }
    ]
  },
  {
    path: '/gouwuche',
    name: 'gouwuche',
    component: () => import(/* webpackChunkName: "gouwuche" */ '../views/gouwuche.vue'),
  },
  {
    path: '/wode',
    name: 'wode',
    component: () => import(/* webpackChunkName: "wode" */ '../views/wode.vue'),
  },
  {
    path: '/xiangqing',
    name: 'xiangqing',
    component: () => import(/* webpackChunkName: "wode" */ '../components/popup/xiangqing.vue'),
  },
  {
    path: '/shouyexiangqing',
    name: 'ssxiangqing',
    component: () => import(/* webpackChunkName: "wode" */ '../components/popup/shouyexiangqing.vue'),
  },
  {
    path: '/pinpai',
    name: 'pinpai',
    component: () => import(/* webpackChunkName: "wode" */ '../components/pinpai.vue'),
  },
  {
    path: '/xinpin',
    name: 'xinpin',
    component: () => import(/* webpackChunkName: "wode" */ '../components/xinpin.vue'),
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//购物车路由守卫
router.beforeEach((to,form,next)=>{
  if(to.path=='/gouwuche'){
    let token=localStorage.getItem('token')
    if(token){
      next()
    }else{
      next('/wode')
    }
    return
  }
  next()
})

export default router
