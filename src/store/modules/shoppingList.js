import actions from '../actions/shoppingListActions';
import mutations from '../mutations/shoppingListMutations';
import getters from '../getters/shoppingListGetters';

const state = {
  subcategories: [],
  selectedItems: [],
  isLoading: false,
  activeCategory: {
    id: 'alimentos_basicos',
    name: 'Alimentos Básicos',
  },
  currentTab: 'AddItens'

};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
