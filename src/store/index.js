import { createStore } from 'vuex';
import shoppingList from './modules/shoppingList';
import auth from './modules/auth';

export default createStore({
  modules: {
    shoppingList,
    auth
  }
});
