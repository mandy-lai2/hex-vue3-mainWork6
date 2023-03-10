import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/front/HomeView.vue')
      },
      {
        path: 'about',
        component: () => import('../views/front/AboutView.vue')
      },
      {
        path: 'products',
        component: () => import('../views/front/ProductsView.vue')
      },
      {
        path: 'product/:id',
        component: () => import('../views/front/ProductView.vue')
      },
      {
        path: 'carts',
        component: () => import('../views/front/CartsView.vue')
      },
      {
        path: 'login',
        component: () => import('../views/front/LoginAdmin.vue')
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('../views/AdminLayout.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/admin/AdminProducts.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/admin/AdminOrders.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*', // 重新導向
    redirect: {
      name: 'home'
    }
  }

]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
