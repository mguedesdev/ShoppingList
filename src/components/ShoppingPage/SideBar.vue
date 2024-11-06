<template>
  <div class="sidebar" :class="{ 'isMobileMenuOpen': isMobileMenuOpen }">
    <button class="close-categories-mobile">
      <font-awesome-icon icon="xmark" @click="closeMenuMobile" />
    </button>
    <div class="sidebar-title">
      <h3>Categorias</h3>
    </div>
    <ul class="category-list">
      <li v-for="category in filteredCategories" :key="category.name"
        :class="[{ active: activeCategory.name === category.name }]" @click="selectCategory(category.name)">
        <font-awesome-icon :icon="category.icon" />
        <span :title="category.name">{{ category.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { normalizeWord } from '@/utils/normalizeWord';
import { mapState, mapActions, mapGetters } from 'vuex';
import { categories } from '@/constants/categories';

export default {
  name: 'SideBar',
  props: {
    isMobileMenuOpen: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState('shoppingList', ['activeCategory', 'currentTab']),
    ...mapGetters('shoppingList', ['selectedCategories']),

    filteredCategories() {
      if (this.currentTab === 'CustomItens') {
        return categories.filter(category => this.selectedCategories.includes(category.name));
      } else {
        return categories;
      }
    }

  },
  methods: {
    ...mapActions('shoppingList', ['setActiveCategory']),
    selectCategory(category) {
      this.setActiveCategory({
        name: category,
        id: normalizeWord(category),
      });
      this.closeMenuMobile();
    },
    closeMenuMobile() {
      this.$emit('closeCategoriesMobile');
    },
  },
};
</script>


<style scoped>
.sidebar {
  width: 280px;
  max-width: 280px;
  min-width: 280px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 4px 0 10px rgba(0, 0, 0, 0.1);
  background-color: var(--white);

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    padding: 10px;
    position: fixed;
    top: 0;
    left: -100%;
    z-index: 1;
    transition: all 0.3s ease;
    height: 100%;
  }
}

.sidebar.isMobileMenuOpen {
  @media (max-width: 768px) {
    left: 0;
  }
}

.sidebar-title {
  margin-bottom: 20px;
  border-bottom: 2px solid var(--primary);

  @media (max-width: 768px) {
    margin-top: 10px;
  }

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
  overflow: auto;

}

.category-list li {
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 5px;

}

.category-list li.active {
  background-color: var(--primary);
  color: var(--white);
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

.category-list li.disabled {
  background-color: var(--placeholder);
  cursor: default;
  color: var(--white);
}

.close-categories-mobile {
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 1;
    cursor: pointer;
    color: var(--primary);
    font-size: 20px;
    border: none;
    background-color: transparent;
  }
}
</style>
