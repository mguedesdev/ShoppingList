import { createRouter, createWebHistory } from 'vue-router';
import Login from './pages/LoginPage.vue';
import ShoppingList from './pages/ShoppingList.vue';
import FinalizeList from './pages/FinalizeList.vue';

const routes = [
  { path: '/', component: Login },
  { path: '/shoppingList', component: ShoppingList },
  { path: '/finalize', component: FinalizeList },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
