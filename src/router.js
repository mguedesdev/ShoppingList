import { createRouter, createWebHistory } from 'vue-router';
import Login from './pages/LoginPage.vue';
import ShoppingList from './pages/ShoppingList.vue';

const routes = [
  { path: '/', component: Login },
  { path: '/shoppingList', component: ShoppingList },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
