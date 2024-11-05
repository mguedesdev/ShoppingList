export default {
  filteredSubcategories: (state) => (searchQuery) => {
    if (!searchQuery) {
      return state.subcategories;
    }
    
    return state.subcategories
      .map(subcategory => {
        const filteredItems = subcategory.items.filter(item =>
          item.toLowerCase().includes(searchQuery.toLowerCase())
        );
        if (filteredItems.length > 0) {
          return {
            ...subcategory,
            items: filteredItems,
          };
        }
      })
      .filter(subcategory => subcategory);
  },

  selectedCategories: (state) => {
    return state.selectedItems.map(category => category.categoryName);
  },
  
  
  
};
