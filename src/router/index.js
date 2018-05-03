import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Catalog from '@/components/Catalog/Catalog'
import Cart from '@/components/Cart/Cart'
import User from '@/components/User/User'
import SearchAfter from '@/components/Searchafter/Searchafter'
import Register from '@/components/Register/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Catalog',
      name: 'Catalog',
      component: Catalog
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/User',
      name: 'User',
      component: User
    },
    {
      path: '/Search',
      name: 'SearchAfter',
      component: SearchAfter
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    }
  ]
})
