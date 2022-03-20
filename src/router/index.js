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
    path: "/products",
    name: 'Products',
    component: () => import('../views/Products'),
    children: [
      {
        path: '/products',
        name: 'Enclosures',
        component: () => import('../views/products/enclosures'),
        meta: {
          title: 'Products - Enclosures'
        }
      },
      {
        path: '/products/power-protection-and-distribution',
        name: 'Power Protection & Distribution',
        component: () => import('../views/products/power-protection-and-distribution'),
        meta: {
          title: 'Products - Power Protection & Distribution'
        }
      },
      {
        path: '/products/cable-management',
        name: 'Cable management and support system',
        component: () => import('../views/products/cable-management-and-support'),
        meta: {
          title: 'Products - Cable Management'
        }
      },
      {
        path: '/products/warehouse',
        name: 'Warehouse Storage System',
        component: () => import('../views/products/warehouse'),
        meta: {
          title: 'Products - Cable Management'
        }
      },
      {
        path: '/products/gaskets',
        name: 'Gaskets',
        component: () => import('../views/products/gaskets'),
        meta: {
          title: 'Products - Gaskets'
        }
      },
      {
        path: '/products/power-generation',
        name: 'Power Generation',
        component: () => import('../views/products/power-generation'),
        meta: {
          title: 'Products - Power Generation'
        }
      },
      {
        path: '/products/lights',
        name: 'Lights & Wiring Devices',
        component: () => import('../views/products/lights'),
        meta: {
          title: 'Products - Lights and Wiring Devices'
        }
      },
    ],
    meta: {
      title: 'Tranos - Products'
    }
  },
  {
    path: '/products/enclosures/encase-electrical/customized',
    name: 'Customized Enclosures',
    component: () => import('../views/products/enclosures/encase-electrical/customized-enclosures'),
    meta: {
      title: 'Products - Customized Enclosures'
    }
  },
  {
    path: '/products/enclosures/encase-electrical/standard',
    name: 'Standard Enclosures',
    component: () => import('../views/products/enclosures/encase-electrical/standard-enclosures'),
    meta: {
      title: 'Products - Standard Enclosures'
    }
  },
  {
    path: '/products/enclosures/encase-mechanical',
    name: 'Encase Mechanical',
    component: () => import('../views/products/enclosures/mechanical'),
    meta: {
      title: 'Products - Encase Mechanical'
    }
  },
  {
    path: '/products/enclosures/encase-it',
    name: 'Encase Mechanical',
    component: () => import('../views/products/enclosures/encase-it'),
    meta: {
      title: 'Products - Encase I.T'
    }
  },
  {
    path: '/products/enclosures/encase-it/customized',
    name: 'Customized Enclosures',
    component: () => import('../views/products/enclosures/encase-it/customized'),
    meta: {
      title: 'Products - Customized Enclosures'
    }
  },
  {
    path: '/products/enclosures/encase-it/standard',
    name: 'Standard Enclosures',
    component: () => import('../views/products/enclosures/encase-it/standard'),
    meta: {
      title: 'Products - Standard Enclosures'
    }
  },
  {
    path: '/products/power-protection-and-distribution/sockets',
    name: 'Sockets and Switches',
    component: () => import('../views/products/power-protection/sockets'),
    meta: {
      title: 'Products - Socket and Switches'
    }
  },
  {
    path: '/products/power-protection-and-distribution/isolators',
    name: 'Isolators and Changeover',
    component: () => import('../views/products/power-protection/isolators'),
    meta: {
      title: 'Products - Socket and Switches'
    }
  },
  {
    path: '/products/power-protection-and-distribution/electrical-panels',
    name: 'Electrical Panel',
    component: () => import('../views/products/power-protection/electrical-panel'),
    meta: {
      title: 'Products - Socket and Switches'
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
