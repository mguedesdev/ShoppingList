<template>
  <div class="shopping-list-page">
    <SideBar />
    <div class="content">
      <NavigationBar />
      <div class="main-content" :class="{ 'preview-active': !isOpenPreview }">
        <div class="main-container">
          <SelectItens v-if="currentTab === 'AddItens'" />
          <CustomizeItens v-if="currentTab === 'CustomItens'" />
        </div>
        <div class="preview-container" :class="{ active: isOpenPreview }">
          <PreviewList />
        </div>

      </div>
    </div>
  </div>

</template>

<script>
import CustomizeItens from '@/components/ShoppingPage/CustomizeItens.vue';
import NavigationBar from '@/components/ShoppingPage/NavigationBar.vue';
import PreviewList from '@/components/ShoppingPage/PreviewList.vue';
import SelectItens from '@/components/ShoppingPage/SelectItens.vue';
import SideBar from '@/components/ShoppingPage/SideBar.vue';
import { mapActions, mapState, } from 'vuex';

export default {
  name: 'ShoppingList',
  components: {
    SideBar,
    NavigationBar,
    SelectItens,
    CustomizeItens,
    PreviewList,
  },
  data() {
    return {
      previewOpen: false,
    };
  },
  computed: {
    ...mapState('shoppingList', ['currentTab', 'activeCategory', 'isOpenPreview']),
  },
  methods: {
    ...mapActions('shoppingList', ['fetchSubcategories',]),

  },
  mounted() {
    if (this.currentTab === 'AddItens') {
      this.fetchSubcategories(this.activeCategory.id);
    }
  },
  watch: {
    currentTab(newTab) {
      if (newTab === 'AddItens') {
        this.fetchSubcategories(this.activeCategory.id);
      }
    },
    activeCategory(newCategory) {
      if (this.currentTab === 'AddItens') {
        this.fetchSubcategories(newCategory.id);
      }
    },
  },
};
</script>


<style scoped>
.shopping-list-page {
  display: flex;
  height: 100vh;
  position: relative;
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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.main-content.preview-active {
  gap: 0;
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

.preview-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 0;
  overflow: hidden;
  transition: all 0.6s ease;
  background-color: #e5ddd5;
  border: 1px solid var(--placeholder);
  opacity: 0;

}

.preview-container.active {
  width: 35%;
  opacity: 1;
  transition: all 0.6s ease;
}
</style>
