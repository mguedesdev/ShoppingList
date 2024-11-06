export default {
  filteredSubcategories: (state) => (searchQuery, items = state.subcategories) => {
    if (!searchQuery) {
      return items;
    }
  
    return items
      .map(subcategory => {
        const filteredItems = subcategory.items.filter(item => {
          const itemName = typeof item === 'object' && item.itemName ? item.itemName : item;
          return itemName.toLowerCase().includes(searchQuery.toLowerCase());
        });
        
        if (filteredItems.length > 0) {
          return {
            ...subcategory,
            items: filteredItems,
          };
        }
        return null;
      })
      .filter(subcategory => subcategory !== null);
  },
  

  selectedCategories: (state) => {
    return state.selectedItems.map(category => category.categoryName);
  },

  getSubCategories: (state) => {
    const selectedCategory = state.selectedItems.filter(category => {
      console.log("category.categoryName", category.categoryName)
      console.log("state.activeCategory.name", state.activeCategory.name)
      return category.categoryName === state.activeCategory.name
    }
    )[0].subcategories

    return selectedCategory;
  },
  
};
