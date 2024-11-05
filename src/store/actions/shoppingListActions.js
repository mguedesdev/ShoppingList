import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/firebase/firebase';
import { SET_SUBCATEGORIES, SET_LOADING, SET_CURRENT_TAB, SET_ACTIVE_CATEGORY, ADD_ITEM, REMOVE_ITEM } from '../types/mutationTypes';

export default {
  async fetchSubcategories({ commit }, categoryName) {
    commit(SET_LOADING, true);
    try {
      const categoryDocRef = doc(db, 'categories', categoryName);
      const categoryDoc = await getDoc(categoryDocRef);
      if (categoryDoc.exists()) {
        const categoryData = categoryDoc.data();
        commit(SET_SUBCATEGORIES, categoryData.subcategories.map(subcat => ({
          ...subcat,
        })));
      }
    } catch (error) {
      console.error('Erro ao buscar subcategorias:', error);
    } finally {
      commit(SET_LOADING, false);
    }
  },

  setCurrentTab({ commit }, tab) {
    commit(SET_CURRENT_TAB, tab);
  },

  setActiveCategory ({ commit }, category) {
    commit(SET_ACTIVE_CATEGORY, category);
  },

  addItem({ commit }, item) {
    commit(ADD_ITEM, item)
  },

  removeItem ({ commit }, item) {
    commit(REMOVE_ITEM, item)
  }
  
};
