import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        name: 'All Projects',
        component: () => import('../views/projects/all-projects'),
        meta: {
          title: 'Tranos - Home'
        }
      },
      {
        path: "/power-and-energy",
        name: 'Power And Energy',
        component: () => import('../views/projects/power-and-energy'),
        meta: {
          title: 'Projects - Power And Energy'
        }
      }
    ],
    meta: {
      title: 'Tranos - Home'
    }
  },
  {
    path: "/about",
    name: 'About',
    component: () => import('../views/About'),
    meta: {
      title: 'Tranos - About'
    }
  },
  {
    path: "/projects",
    name: 'Projects',
    component: () => import('../views/Projects'),
    meta: {
      title: 'Projects - Recent Projects'
    }
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`
  next()
})

export default router
