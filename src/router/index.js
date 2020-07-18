import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'


const Home = () => import('../pages/home/Home.vue')
const Profile = ()=>import('../pages/profile/Profile.vue')
const Cart = ()=>import('../pages/cart/Cart.vue')
const Category = ()=>import('../pages/category/Category.vue')

Vue.use(VueRouter)

// const originalPush = VueRouter.prototype.push
//    VueRouter.prototype.push = function push(location) {
//    return originalPush.call(this, location).catch(err => err)
// }

  const routes = [
    {
      path: '',
      redirect:'/home'
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/profile',
      component:Profile
    },
    {
      path:'/cart',
      component:Cart
    },
    {
      path:'/category',
      component:Category
    } 
  ]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
