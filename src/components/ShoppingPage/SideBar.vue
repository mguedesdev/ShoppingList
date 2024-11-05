<template>
  <div class="sidebar">
    <div class="sidebar-title">
      <h3>Categorias</h3>
    </div>
    <ul class="category-list">
      <li v-for="category in categories" :key="category.name" :class="{ active: activeCategory === category.name }"
        @click="selectCategory(category.name)">
        <font-awesome-icon :icon="category.icon" />
        <span :title="category.name">{{ category.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import normalizeWord from '@/utils/normalizeWord';

export default {
  name: 'SideBar',
  data() {
    return {
      activeCategory: 'Alimentos Básicos',
      categories: [
        { name: 'Alimentos Básicos', icon: 'bowl-food' },
        { name: 'Laticínios e Ovos', icon: 'egg' },
        { name: 'Proteínas', icon: 'cow' },
        { name: 'Pães e Produtos de Panificação', icon: 'bread-slice' },
        { name: 'Grãos e Cereais', icon: 'wheat-awn' },
        { name: 'Frutas, Verduras e Legumes', icon: 'apple-alt' },
        { name: 'Congelados', icon: 'snowflake' },
        { name: 'Bebidas', icon: 'wine-bottle' },
        { name: 'Higiene Pessoal', icon: 'soap' },
        { name: 'Produtos de Limpeza', icon: 'pump-soap' },
        { name: 'Higiene da Casa', icon: 'broom' },
        { name: 'Snacks e Petiscos', icon: 'cookie-bite' },
        { name: 'Condimentos e Molhos', icon: 'pepper-hot' },
        { name: 'Utensílios Descartáveis', icon: 'utensils' },
      ]
    };
  },
  methods: {
    selectCategory(category) {
      this.activeCategory = category;
      this.$emit('select-category', normalizeWord(category));
    }
  },
  mounted() {
    this.selectCategory('Alimentos Básicos');
  }
}
</script>

<style scoped>
.sidebar {
  width: 280px;
  max-width: 280px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 4px 0 10px rgba(0, 0, 0, 0.1);
}

.sidebar-title {
  margin-bottom: 20px;
  border-bottom: 2px solid var(--primary);
}

.sidebar-title h3 {
  font-size: 18px;
  font-weight: bold;
  color: var(--primary);
  margin-bottom: 10px;
}

.category-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.category-list li {
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

}

.category-list li.active {
  background-color: var(--primary);
  color: var(--white);
  border-radius: 5px;
}

.category-list li:hover {
  background-color: var(--primary-hover);
  border-radius: 5px;
  color: var(--white);
}

.category-list li span {
  margin-left: 10px;
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.category-list li svg {
  font-size: 18px;
}
</style>
