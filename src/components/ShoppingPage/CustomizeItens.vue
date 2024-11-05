<template>
  <div class="select-itens-container">
    <div v-if="selectedCategories.length <= 0" class="placeholder">
      <h1>Primeiro adicione algum item.</h1>
    </div>

    <template v-else>
      <div class="header-container">
        <h1>Customize os itens</h1>
        <SearchInput icon="magnifying-glass" placeholder="Pesquisar itens" v-model="searchQuery" />
      </div>
      <ul class="main-list">
        <li v-for="subcategory in filteredSubcategories" :key="subcategory.subcategoryName">
          <AccordionCategory :title="subcategory.subcategoryName">
            <ul class="itens-list">
              <ItemList v-for="item in subcategory.items" :key="item.itemName" :name="item.itemName">
                <template v-slot:options>
                  <div class="quantity-control">

                    <button class="button-minus"
                      @click="decrementQuantity(item, subcategory.subcategoryName, activeCategory.name)">
                      <font-awesome-icon icon="minus" />
                    </button>

                    <span class="quantity">{{ item.quantity }}</span>

                    <button class="button-plus"
                      @click="incrementQuantity(item, subcategory.subcategoryName, activeCategory.name)">
                      <font-awesome-icon icon="plus" />
                    </button>

                  </div>
                </template>
              </ItemList>
            </ul>
          </AccordionCategory>
        </li>
      </ul>
      <div class="footer-container">
        <ButtonBase text="Salvar e compartilhar" icon="pen-to-square" @click="saveList" />
      </div>
    </template>
  </div>
</template>

<script>
import AccordionCategory from '../AccordionCategory.vue';
import ButtonBase from '../ButtonBase.vue';
import ItemList from '../ItemList.vue';
import SearchInput from '../SearchInput.vue';
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  name: 'CustomizeItens',
  components: {
    SearchInput,
    ItemList,
    AccordionCategory,
    ButtonBase,
  },
  data() {
    return {
      searchQuery: '',
    };
  },
  computed: {
    ...mapGetters('shoppingList', ['selectedCategories']),
    ...mapState('shoppingList', ['activeCategory']),

    filteredSubcategories() {
      return this.$store.getters['shoppingList/filteredSubcategories'](this.searchQuery, this.$store.getters['shoppingList/getSubCategories']);
    },
  },
  methods: {
    ...mapActions('shoppingList', ['setCurrentTab', 'removeItem',]),

    addItemToStore(item, subcategoryName, parentCategory) {
      this.$store.dispatch('shoppingList/addItem', {
        itemName: item.itemName,
        subcategoryName,
        parentCategory
      });
    },
    saveList() {
      this.setCurrentTab('ShareItens');
    },
    decrementQuantity(item, subcategoryName, parentCategory) {
      if (item.quantity > 0) {
        item.quantity--;
      }
      if (item.quantity === 0) {
        this.$store.dispatch('shoppingList/removeItem', {
          itemName: item.itemName,
          subcategoryName,
          parentCategory
        });
      }
    },
    incrementQuantity(item, subcategoryName, parentCategory) {
      this.addItemToStore(item, subcategoryName, parentCategory);
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

.placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.placeholder h1 {
  font-size: 22px;
  color: var(--placeholder)
}

.quantity-control {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.button-plus,
.button-minus {
  background-color: var(--primary);
  color: var(--white);
  border: none;
  border-radius: 5px;
  width: 25px;
  height: 25px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.button-plus:hover,
.button-minus:hover {
  background-color: var(--secondary);
}
</style>