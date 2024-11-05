<template>
  <div class="shopping-list-page">
    <SideBar @select-category="fetchSubcategories" />
    <div class="content">
      <NavigationBar />
      <div class="main-content">
        <div class="main-container">
          <SelectItens :items="subcategories" @addItem="addItem" @removeItem="removeItem" @saveItems="saveList"
            :isLoading="isLoading" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBar from '@/components/ShoppingPage/NavigationBar.vue';
import SelectItens from '@/components/ShoppingPage/SelectItens.vue';
import SideBar from '@/components/ShoppingPage/SideBar.vue';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/firebase/firebase';

export default {
  name: 'ShoppingList',
  components: {
    SideBar,
    NavigationBar,
    SelectItens
  },
  data() {
    return {
      subcategories: [],
      selectedItems: [],
      isLoading: false,
    };
  },
  methods: {
    async fetchSubcategories(categoryName) {
      this.isLoading = true;
      try {
        const categoryDocRef = doc(db, 'categories', categoryName);
        console.log('Categoria:', categoryName);
        const categoryDoc = await getDoc(categoryDocRef);

        if (categoryDoc.exists()) {
          const categoryData = categoryDoc.data();
          this.subcategories = categoryData.subcategories;
        } else {
          console.error('Categoria não encontrada');
        }
        this.isLoading = false;
      }
      catch (error) {
        console.error('Erro ao buscar subcategorias:', error);
      }
    },
    addItem(item) {
      this.selectedItems.push(item);
    },
    removeItem(item) {
      const index = this.selectedItems.indexOf(item);
      if (index !== -1) {
        this.selectedItems.splice(index, 1);
      }
    },
    saveList() {
      // Lógica para salvar a lista de compras
      console.log('Lista de compras salva:', this.selectedItems);
    },
  },
};
</script>

<style scoped>
.shopping-list-page {
  display: flex;
  height: 100vh;
}

.content {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.main-content {
  padding: 25px 20px;
  height: 100%;
  overflow-y: auto;
}

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}

h1 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}
</style>
