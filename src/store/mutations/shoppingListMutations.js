import { SET_SUBCATEGORIES, SET_LOADING, ADD_ITEM, REMOVE_ITEM, SET_ACTIVE_CATEGORY, SET_CURRENT_TAB, SET_OPEN_PREVIEW, SET_ORDERED_SELECTED_ITEMS } from '../types/mutationTypes';

export default {
  [SET_SUBCATEGORIES](state, subcategories) {
    state.subcategories = subcategories;
  },
  [SET_ORDERED_SELECTED_ITEMS](state, orderedItems) {
    state.selectedItems = orderedItems;
  },
  [SET_LOADING](state, isLoading) {
    state.isLoading = isLoading;
  },
  [ADD_ITEM](state, item) {
    const { itemName, subcategoryName, parentCategory } = item;
  
    let category = state.selectedItems.find(cat => cat.categoryName === parentCategory);
  
    if (!category) {
      category = {
        categoryName: parentCategory,
        subcategories: []
      };
      state.selectedItems.push(category);
    }
  
    let subcategory = category.subcategories.find(subcat => subcat.subcategoryName === subcategoryName);
  
    if (!subcategory) {
      subcategory = {
        subcategoryName: subcategoryName,
        items: []
      };
      category.subcategories.push(subcategory);
    }
  
    const existingItem = subcategory.items.find(existing => existing.itemName === itemName);
  
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      subcategory.items.push({
        itemName,
        quantity: 1,
      });
    }
  },
  
  [REMOVE_ITEM](state, item) {
    const { itemName, subcategoryName, parentCategory } = item;
  
    const category = state.selectedItems.find(cat => cat.categoryName === parentCategory);
    if (!category) return;
  
    const subcategory = category.subcategories.find(subcat => subcat.subcategoryName === subcategoryName);
    if (!subcategory) return; 
  
    const itemIndex = subcategory.items.findIndex(existing => existing.itemName === itemName);
    if (itemIndex === -1) return;
  
    subcategory.items.splice(itemIndex, 1);
  
    if (subcategory.items.length === 0) {
      const subcategoryIndex = category.subcategories.findIndex(subcat => subcat.subcategoryName === subcategoryName);
      category.subcategories.splice(subcategoryIndex, 1);
    }
  
    if (category.subcategories.length === 0) {
      const categoryIndex = state.selectedItems.findIndex(cat => cat.categoryName === parentCategory);
      state.selectedItems.splice(categoryIndex, 1);
    }
  },
  
  [SET_ACTIVE_CATEGORY](state, category) {
    console.log('Updating activeCategory:', category);
    state.activeCategory = category;
  },
  [SET_CURRENT_TAB](state, tab) {
    state.currentTab = tab;
  },
  [SET_OPEN_PREVIEW](state) {
    state.isOpenPreview = !state.isOpenPreview;
  }
    
};
