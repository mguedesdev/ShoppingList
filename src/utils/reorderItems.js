import { categories } from '@/constants/categories';

export const reorderSelectedItems = (selectedItems) => {
  const order = categories
    .filter(category => selectedItems.some(item => item.categoryName === category.name))
    .map(category => selectedItems.find(item => item.categoryName === category.name));
  console.log("order", order)

return order;
}