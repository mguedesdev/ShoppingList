import { normalizeWord } from '@/utils/normalizeWord';
import notyf from './notyf';

export const handleCustomItensTab = (selectedItems, setOrderedSelectedItems, setActiveCategory) => {
  if (selectedItems.length > 0) {
    setOrderedSelectedItems();

    const firstCategory = selectedItems[0];
    setActiveCategory({
      id: normalizeWord(firstCategory.categoryName),
      name: firstCategory.categoryName,
    });
  } else {
    notyf.error('Nenhuma categoria selecionada.');
  }
}
