import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
// import About from '@/components/About'
// import User from '@/components/User'
//路由懒加载
const Home = ()=> import('@/components/Home')
const About = ()=> import('@/components/About')
const User = ()=> import('@/components/User')

//通过vue.use(插件) 安装插件
Vue.use(Router)

//创建router对象
export default new Router({
  //hash模式(url里面会有#)  变成了 history模式
  mode:'history',
  // 改变默认class名 router-link-active
  // linkActiveClass:'active',
  routes: [
    {
      path: '',
      name: 'Home',
      redirect:'/home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },{
      path: '/user/:userId',
      name: 'User',
      component: User
    }
  ]
})
