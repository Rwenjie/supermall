import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () => import('../views/home/Home')
const Profile = () => import('../views/profile/Profile')
const ShopCart = () => import('../views/shopcart/ShopCart')
const Category = () => import('../views/category/Categpory')

//1.安装插件
Vue.use(VueRouter)

//2.创建router
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shopcart',
    component: ShopCart
  }
]
const router = new VueRouter({
  routes,
})

export default router
