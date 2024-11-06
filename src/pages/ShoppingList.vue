<template>
  <div class="shopping-list-page">
    <SideBar :isMobileMenuOpen="openCategoriesMobile" @closeCategoriesMobile="toggleCategoriesMobile" />
    <div class="content">
      <NavigationBar :isMobileMenuOpen="openMenuMobile" @closeMenuMobile="toggleMenuMobile" />
      <div class="top-bar-mobile">
        <button class="button-categories-mobile" @click="toggleCategoriesMobile">
          Selecionar categoria
        </button>
        <button class="button-menu-mobile" @click="toggleMenuMobile">
          <font-awesome-icon icon="bars" />
        </button>
      </div>
      <div class="main-content" :class="{ 'preview-active': isOpenPreview }">
        <div class="main-container">
          <SelectItens v-if="currentTab === 'AddItens'" />
          <CustomizeItens v-if="currentTab === 'CustomItens'" />
        </div>
        <div class="preview-container" :class="{ active: isOpenPreview }">
          <PreviewList @closeView="togglePreview" />
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
      openCategoriesMobile: false,
      openMenuMobile: false,
    };
  },
  computed: {
    ...mapState('shoppingList', ['currentTab', 'activeCategory', 'isOpenPreview']),
  },
  methods: {
    ...mapActions('shoppingList', ['fetchSubcategories', 'setOpenPreview']),

    togglePreview() {
      this.setOpenPreview();
    },
    toggleCategoriesMobile() {
      this.openCategoriesMobile = !this.openCategoriesMobile;
    },
    toggleMenuMobile() {
      this.openMenuMobile = !this.openMenuMobile;
    },

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

  @media (max-width: 768px) {
    flex-direction: column;
    overflow-x: hidden;
  }
}

.content {
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 768px) {
    position: relative;
    margin-top: 50px;
    height: 88%;
    justify-content: flex-start;
  }
}

.main-content {
  padding: 25px 20px;
  height: 100%;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0;

  @media (max-width: 768px) {
    padding: 0;
  }
}

.main-content.preview-active {
  gap: 20px;

  @media (max-width: 768px) {
    gap: 0;
  }
}

.main-content.preview-active .main-container {
  @media (max-width: 768px) {
    width: 0;
    overflow: hidden;
  }

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

  @media (max-width: 768px) {
    box-shadow: none;
    border-radius: 0;
  }
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
  background-color: var(--background-whatsapp);
  border: 1px solid var(--placeholder);
  opacity: 0;

  @media (max-width: 768px) {
    box-shadow: none;
    border-radius: 0;
    position: fixed;
    top: 0;
  }
}

.preview-container.active {
  width: 35%;
  opacity: 1;
  transition: all 0.6s ease;

  @media (max-width: 1440px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
}

.sidebar.isMobileMenuOpen {
  @media (max-width: 768px) {
    left: 0;
  }
}

.top-bar-mobile {
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10px;
    background-color: var(--white1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
}

.button-categories-mobile,
.button-menu-mobile {
  background-color: var(--secondary);
  border: none;
  color: var(--white1);
  font-size: 16px;
  font-weight: 500;
  padding: 10px;
  border-radius: 5px;
}
</style>
