<template>
  <div class="shopping-list-page">
    <SideBar />
    <div class="content">
      <NavigationBar />
      <div class="main-content">
        <div class="main-container">
          <SelectItens v-if="currentTab === 'AddItens'" />
          <CustomItens v-if="currentTab === 'CustomItens'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBar from '@/components/ShoppingPage/NavigationBar.vue';
import SelectItens from '@/components/ShoppingPage/SelectItens.vue';
import SideBar from '@/components/ShoppingPage/SideBar.vue';
import { mapActions, mapState, } from 'vuex';

export default {
  name: 'ShoppingList',
  components: {
    SideBar,
    NavigationBar,
    SelectItens
  },
  computed: {
    ...mapState('shoppingList', ['currentTab', 'activeCategory']),
  },
  methods: {
    ...mapActions('shoppingList', ['fetchSubcategories',]),

  },
  mounted() {
    this.fetchSubcategories(this.activeCategory.id);
  },
  watch: {
    activeCategory() {
      this.fetchSubcategories(this.activeCategory.id);
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
