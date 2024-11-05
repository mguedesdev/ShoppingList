import { SET_SUBCATEGORIES, SET_LOADING, ADD_ITEM, REMOVE_ITEM, SET_ACTIVE_CATEGORY, SET_CURRENT_TAB } from '../types/mutationTypes';

export default {
  [SET_SUBCATEGORIES](state, subcategories) {
    state.subcategories = subcategories;
  },
  [SET_LOADING](state, isLoading) {
    state.isLoading = isLoading;
  },
  [ADD_ITEM](state, item) {
    const itemExists = state.selectedItems.some(selectedItem => 
      selectedItem.itemName === item.itemName &&
      selectedItem.subcategoryName === item.subcategoryName &&
      selectedItem.parentCategory === item.parentCategory
    );
    if (!itemExists) {
      state.selectedItems.push({ ...item, quantity: 1 });
    }
  },
  [REMOVE_ITEM](state, item) {
    const index = state.selectedItems.findIndex(
      selectedItem => selectedItem.itemName === item.itemName &&
        selectedItem.subcategoryName === item.subcategoryName &&
        selectedItem.parentCategory === item.parentCategory
    );
    if (index !== -1) {
      state.selectedItems.splice(index, 1);
    }
  },
  [SET_ACTIVE_CATEGORY](state, category) {
    state.activeCategory = category;
  },
  [SET_CURRENT_TAB](state, tab) {
    state.currentTab = tab;
  }
};
