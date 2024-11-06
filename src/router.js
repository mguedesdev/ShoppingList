import { createRouter, createWebHistory } from 'vue-router';
import Login from './pages/LoginPage.vue';
import ShoppingList from './pages/ShoppingList.vue';
import store from './store';

const routes = [
  { path: '/', component: Login },
  { 
    path: '/shoppingList', 
    component: ShoppingList,
    meta: { requiresAuth: true }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = store.getters['auth/isAuthenticated'];

  if (requiresAuth && !isAuthenticated) {
    next('/'); 
  } else {
    next();
  }
});

export default router;
