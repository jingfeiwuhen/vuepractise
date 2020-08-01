import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/views/home/Home')
const Category = () => import('@/views/category/Category')
const Cart = () => import('@/views/cart/Cart')
const Profile = () => import('@/views/profile/Profile')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'Home',
      redirect: '/home',
      component: Home
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ]
})

export default router
