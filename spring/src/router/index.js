import Vue from 'vue'
import Router from 'vue-router'
import login from '@/page/login/login'
import index from '@/page/index/index'
import detail from '@/page/tableData/detail'

Vue.use(Router)

const router= new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,  
    },{
      path: '/index',
      name: 'index',
      component: index,
      meta:{
        auth:true,//添加字段判断该页面是否需要登录
        keepAlive: true,
      }
    },{
      path: '/detail',
      name: 'detail',
      component: detail,
      meta:{
          auth:true,//添加字段判断该页面是否需要登录
          keepAlive: false,
      }
    }
  ]
})
router.beforeEach((to,from,next)=>{
  // to要跳转到的路径
  // from从哪个路径来
  // next往下执行的回调
  // 在localStorage中获取token
  let token=localStorage.getItem('userToken')
  // 判断该页面是否需要登录
  if(to.meta.auth){
      // 如果token存在直接跳转
      if(token){
          next()
      }else{
          // 否则跳转到login登录页面
          next({
              path:'/',
              // 跳转时传递参数到登录页面，以便登录后可以跳转到对应页面
              query:{
                  redirect:to.fullPath
              }
          })
      }
  }else{
      // 如果不需要登录，则直接跳转到对应页面
      next()
  }
})
export default router