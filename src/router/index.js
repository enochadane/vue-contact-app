import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ContactDetail from '../views/ContactDetail.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
// import { from } from 'core-js/fn/array'

Vue.use(VueRouter)

const routes = [
  {
    path: '/contacts',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Register',
    component: Register
  },
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/contacts/:id',
    name: 'Details',
    component: ContactDetail
  }
  
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // let token = localStorage.getItem('jwt');
    // console.log(token);
    if (localStorage.getItem('jwt') == null) {
      next({
        path: '/'
      });
    } else {
      next();
    }
  } else {
    next();
  }
})

export default router
