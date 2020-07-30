import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
// import About from '@/components/About'
// import User from '@/components/User'
//路由懒加载
const Home = () => import('@/components/Home')
const About = () => import('@/components/About')
const User = () => import('@/components/User')
const HomeNews = () => import('@/components/HomeNews')
const HomeMessage = () => import('@/components/HomeMessage')
const Profile = () => import('@/components/Profile')

//通过vue.use(插件) 安装插件
Vue.use(Router)

//创建router对象
const router = new Router({
  //hash模式(url里面会有#)  变成了 history模式
  mode: 'history',
  // 改变默认class名 router-link-active
  // linkActiveClass:'active',
  routes: [
    {
      path: '',
      name: 'Home',
      redirect: '/home',
      component: Home,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {title: '首页'},
      //多级路由
      children: [
        {
          path: '',
          redirect: 'news',
          component: HomeNews
        },
        {
          path: 'news',
          component: HomeNews
        }, {
          path: 'message',
          component: HomeMessage
        }]
    },
    {
      path: '/about',
      name: 'About',
      meta: {title: '关于'},
      component: About
    }, {
      path: '/user/:userId',
      name: 'User',
      meta: {title: '用户'},
      component: User
    }, {
      path: '/profile',
      name: Profile,
      meta: {title: '档案'},
      component: Profile
    }
  ]
})
//前置守卫 跳转之前调用
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title;
  next();
})
//后置钩子 跳转之后调用
router.afterEach((to,from)=>{
  document.title = to.matched[0].meta.title+1;
})

export default router;
