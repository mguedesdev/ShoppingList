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
      <ButtonBase text="Salvar e customizar" icon="pen-to-square" @click="saveList" />
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
    ...mapActions('shoppingList', ['addItem', 'removeItem', 'saveShoppingList', 'setCurrentTab', 'setActiveCategory']),

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
    },

    removeItemFromStore(item, subcategoryName, parentCategory) {
      this.removeItem({
        itemName: item,
        subcategoryName: subcategoryName,
        parentCategory: parentCategory,
      });
    },

    saveList() {
      this.saveShoppingList();
      this.setCurrentTab('CustomItens');
      this.setActiveCategory({
        id: 'alimentos_basicos',
        name: 'Alimentos Básicos',
      })
    },
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
}

.select-itens-container h1 {
  font-size: 16px;
  font-weight: bold;
  color: var(--secondary);
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
}

.main-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 10px;
  margin-top: 6px;
  overflow: auto;
  list-style: none;
}

.main-list>li {
  width: 100%;
}

.subcategory-title {
  font-size: 14px;
  font-weight: bold;
  color: var(--primary);
}

.itens-list {
  width: 100%;
  padding-left: 15px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}


.footer-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin-top: 16px;
  border-top: 1px solid var(--border-itens);
  padding-top: 10px;
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