<template>
  <div class="select-itens-container">
    <div class="header-container">
      <h1>Selecione os itens</h1>
      <SearchInput icon="magnifying-glass" placeholder="Pesquisar itens" v-model="searchQuery" />
    </div>
    <ul class="main-list">
      <template v-if="!isLoading">
        <li v-for="subcategory in filteredSubcategories" :key="subcategory.category_id">
          <AccordionCategory :title="subcategory.name">
            <ul class="itens-list">
              <ItemList v-for="item in subcategory.items" :key="item.id" :name="item">
                <template v-slot:options>
                  <ButtonBase v-if="isItemAdded(item, subcategory.name, subcategory.parentCategory)" text="Remover"
                    icon="minus" size="small" color="danger"
                    @click="removeItemFromStore(item, subcategory.name, subcategory.parentCategory)" />

                  <ButtonBase v-else text="Adicionar" icon="plus" size="small" color="success"
                    @click="addItemToStore(item, subcategory.name, subcategory.parentCategory)" />
                </template>
              </ItemList>
            </ul>
          </AccordionCategory>
        </li>
      </template>
      <div v-else class="loading-container">
        <LoadingSpinner />
      </div>
    </ul>

    <div class="footer-container">
      <ButtonBase text="Customizar" icon="pen-to-square" @click="nextStep" />
    </div>
  </div>
</template>

<script>
import AccordionCategory from '../AccordionCategory.vue';
import ButtonBase from '../ButtonBase.vue';
import ItemList from '../ItemList.vue';
import LoadingSpinner from '../LoadingSpinner.vue';
import SearchInput from '../SearchInput.vue';
import { mapState, mapActions, mapGetters } from 'vuex';
import { handleCustomItensTab } from '@/utils/navigationUtils';

export default {
  name: 'SelectItens',
  components: {
    ButtonBase,
    SearchInput,
    ItemList,
    AccordionCategory,
    LoadingSpinner,
  },
  computed: {
    ...mapState('shoppingList', ['subcategories', 'isLoading', 'selectedItems']),
    ...mapGetters('shoppingList', ['filteredSubcategories']),
    filteredSubcategories() {
      return this.$store.getters['shoppingList/filteredSubcategories'](this.searchQuery);
    },
  },
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    ...mapActions('shoppingList', ['addItem', 'removeItem', 'setCurrentTab', 'setActiveCategory', 'setOrderedSelectedItems']),

    isItemAdded(item, subcategoryName, parentCategory) {
      const category = this.selectedItems.find(cat => cat.categoryName === parentCategory);
      if (!category) return false;

      const subcategory = category.subcategories.find(sub => sub.subcategoryName === subcategoryName);
      if (!subcategory) return false;

      return subcategory.items.some(selectedItem => selectedItem.itemName === item);
    },

    addItemToStore(item, subcategoryName, parentCategory) {
      this.addItem({
        itemName: item,
        subcategoryName: subcategoryName,
        parentCategory: parentCategory,
      });
      console.log(this.selectedItems);
    },

    removeItemFromStore(item, subcategoryName, parentCategory) {
      this.removeItem({
        itemName: item,
        subcategoryName: subcategoryName,
        parentCategory: parentCategory,
      });
    },

    nextStep() {
      this.setCurrentTab('CustomItens');
      handleCustomItensTab(this.selectedItems, this.setOrderedSelectedItems, this.setActiveCategory);
    }
  },
};
</script>

<style scoped>
.select-itens-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }

}

.select-itens-container h1 {
  font-size: 16px;
  font-weight: bold;
  color: var(--secondary);

  @media (max-width: 768px) {
    font-size: 14px;
  }
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    margin: 10px 0;
  }
}

.main-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 0px 10px;
  overflow: auto;
  list-style: none;

  @media (max-width: 768px) {
    padding: 0;
    margin-top: 0;
  }
}

.main-list>li {
  width: 100%;

}

.itens-list {
  width: 100%;
  padding-left: 15px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    padding-left: 0;
  }
}

.footer-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin-top: 16px;
  border-top: 1px solid var(--border-itens);
  padding-top: 10px;

  @media (max-width: 768px) {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: var(--white);
    padding: 10px;
    border-top: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  }
}

.loading-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>