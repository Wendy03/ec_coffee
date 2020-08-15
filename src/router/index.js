import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('../views/Layout.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/frontend/Home.vue'),
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/frontend/About.vue'),
      },
      {
        path: 'products',
        name: 'products',
        component: () => import('../views/frontend/Products.vue'),
      },
      {
        path: 'product/:id',
        name: 'product',
        component: () => import('../views/frontend/Product.vue'),
      },
      {
        path: 'class',
        name: 'class',
        component: () => import('../views/frontend/Class.vue'),
      },
      {
        path: 'question',
        name: 'question',
        component: () => import('../views/frontend/Information.vue'),
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('../views/frontend/Cart.vue'),
      },
      {
        path: 'order',
        name: 'order',
        component: () => import('../views/frontend/Order.vue'),
      },
      {
        path: 'checkout/:orderId',
        name: 'checkout',
        component: () => import('../views/frontend/Checkout.vue'),
      },
    ],
  },
  {
    path: '/signin',
    component: () => import('../views/Signin.vue'),
  },
  {
    path: '/admin',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/backend/Products.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/backend/Orders.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/backend/Coupons.vue'),
      },
      {
        path: 'storages',
        component: () => import('../views/backend/Storages.vue'),
      },
    ],
  },
  {
    path: '*',
    name: 'not-found',
    component: () => import('../views/NotFound.vue'),
  },
];

const router = new VueRouter({
  linkExactActiveClass: 'active',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes,
});

export default router;
