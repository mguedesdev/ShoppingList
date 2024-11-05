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
                  <BaseButton text="Adicionar" icon="plus" size="small" color="success" @click="addItem(item)" />
                </template>
              </ItemList>
            </ul>
          </AccordionCategory>
        </li>
      </template>
      <div class="loading-container" v-else>
        <LoadingSpinner />
      </div>
    </ul>

    <div class="footer-container">
      <BaseButton text="Salvar e customizar" icon="pen-to-square" @click="saveList" />
    </div>
  </div>
</template>

<script>
import AccordionCategory from '../AccordionCategory.vue';
import BaseButton from '../ButtonBase.vue';
import ItemList from '../ItemList.vue';
import LoadingSpinner from '../LoadingSpinner.vue';
import SearchInput from '../SearchInput.vue';

export default {
  name: 'SelectItens',
  components: {
    BaseButton,
    SearchInput,
    ItemList,
    AccordionCategory,
    LoadingSpinner,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    addItem(item) {
      this.$emit('addItem', item);
    },
    removeItem(item) {
      this.$emit('removeItem', item);
    },
    saveList() {
      this.$emit('saveItems');
    },
  },
  computed: {
    filteredSubcategories() {
      if (!this.searchQuery) {
        return this.items;
      }

      return this.items
        .map(subcategory => {
          const filteredItems = subcategory.items.filter(item =>
            item.toLowerCase().includes(this.searchQuery.toLowerCase())
          );
          console.log('filteredItems:', filteredItems);
          if (filteredItems.length > 0) {
            return {
              ...subcategory,
              items: filteredItems,
            };
          }
        })
        .filter(subcategory => subcategory);
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