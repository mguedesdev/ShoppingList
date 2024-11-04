<template>
  <div class="select-itens-container">
    <div class="header-container">
      <h1>Selecione os itens</h1>
      <SearchInput icon="magnifying-glass" placeholder="Pesquisar itens" />
    </div>
    <ul class="main-list">
      <li v-for="subcategory in items" :key="subcategory.category_id">
        <AccordionCategory :title="subcategory.name">
          <ul class="itens-list">
            <ItemList v-for="item in subcategory.items" :key="item.id" :name="item.name">
              <template v-slot:options>
                <BaseButton text="Adicionar" icon="plus" size="small" color="success" />
              </template>
            </ItemList>
          </ul>
        </AccordionCategory>
      </li>
    </ul>

    <div class="footer-container">
      <BaseButton text="Customizar Itens" icon="pen-to-square" />
    </div>
  </div>
</template>

<script>
import AccordionCategory from '../AccordionCategory.vue';
import BaseButton from '../ButtonBase.vue';
import ItemList from '../ItemList.vue';
import SearchInput from '../SearchInput.vue';
import Subcategory from '@/mock/SelectItems';

export default {
  name: 'SelectItens',
  components: {
    BaseButton,
    SearchInput,
    ItemList,
    AccordionCategory
  },
  data() {
    return {
      items: Subcategory,
    };
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
  gap: 20px;
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
  margin-top: 16px;
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
</style>