<template>
  <nav class="navigation-bar" :class="{ 'isMobileMenuOpen': isMobileMenuOpen }">
    <button class="close-menu-mobile">
      <font-awesome-icon icon="xmark" @click="closeMenuMobile" />
    </button>
    <ul class="nav-links">
      <li :class="{ active: currentTab === 'AddItens' }" @click="selectTab('AddItens')">
        <font-awesome-icon icon="plus" />
        Adicionar itens
      </li>
      <li :class="{ active: currentTab === 'CustomItens' }" @click="selectTab('CustomItens')">
        <font-awesome-icon icon="pen-to-square" />
        Customizar itens
      </li>
    </ul>
    <ul class="end-options">
      <li @click="preview" :class="{ active: isOpenPreview }" class="preview-button">
        <font-awesome-icon icon="eye" />
        <span>Visualizar Lista</span>
      </li>
      <li @click="openModal" class="logout-button">
        <font-awesome-icon icon="door-open" />
        <span>Sair</span>
      </li>
    </ul>
  </nav>
  <ModalConfirmation v-if="modalOpen" message="Deseja realmente sair ?" @confirm="logoutUser" @cancel="closeModal"
    icon="door-open" />

</template>
<script>
import { mapState, mapActions } from 'vuex';
import ModalConfirmation from '../Modals/ModalConfirmation.vue';
import { handleCustomItensTab } from '@/utils/navigationUtils';


export default {
  name: 'NavigationBar',
  components: {
    ModalConfirmation,
  },
  data() {
    return {
      modalOpen: false,
    }
  },
  props: {
    isMobileMenuOpen: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState('shoppingList', ['currentTab', 'isOpenPreview', 'selectedItems']),
  },
  methods: {
    ...mapActions('shoppingList', ['setCurrentTab', 'setActiveCategory', 'setOpenPreview', 'setOrderedSelectedItems']),
    ...mapActions('auth', ['logoutUser']),

    selectTab(tab) {
      this.setCurrentTab(tab);
      if (tab === 'CustomItens') {
        handleCustomItensTab(this.selectedItems, this.setOrderedSelectedItems, this.setActiveCategory);
      }
      this.closeMenuMobile();

    },
    preview() {
      this.setOpenPreview();
      this.closeMenuMobile();

    },
    openModal() {
      this.modalOpen = true;
    },
    closeModal() {
      this.modalOpen = false;
    },
    closeMenuMobile() {
      this.$emit('closeMenuMobile');
    },

  },
};
</script>

<style scoped>
.navigation-bar {
  padding: 0px 25px;
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 25px;

  @media (max-width: 768px) {
    height: 100%;
    width: 100%;
    background-color: var(--white);
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 20px;
    padding: 20px;
    z-index: 1;
    transition: all 0.3s ease;
    margin: 0;
    position: fixed;
    top: 0;
    left: 100%;
    transition: all 0.3s ease;
  }
}

.navigation-bar.isMobileMenuOpen {
  @media (max-width: 768px) {
    left: 0;
  }
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 30px;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    width: 100%;
    align-items: end;
  }
}

.nav-links li {
  cursor: pointer;
  transition: all 0.3s ease;
  color: var(--primary);
  font-weight: 600;
  font-size: 16px;
  position: relative;


}

.nav-links li.active {
  font-size: 20px;
  color: var(--secondary);

}

.nav-links li::before {
  content: "";
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--primary);
  border-radius: 1px;
  position: absolute;
  bottom: -3px;
  left: 0;
  z-index: -1;
  transition: all 0.2s ease;
  opacity: 0;
  transform: scaleX(0);
  transform-origin: center;
}

.nav-links li.active::before {
  content: "";
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--secondary);
  border-radius: 1px;
  position: absolute;
  bottom: -3px;
  left: 0;
  z-index: -1;
  transition: all 0.2s ease;
  opacity: 1;
  transform: scaleX(1);
  transform-origin: center;
}

.nav-links li:hover {
  color: var(--secondary);

}

.end-options {
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  gap: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    width: 100%;
    justify-content: start;
    align-items: end;
    height: 100%;
  }
}

.end-options li {
  cursor: pointer;
  color: var(--primary);
  font-weight: 600;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: all 0.3s ease;
}

.end-options li:hover {
  color: var(--secondary);
}

.preview-button.active {
  color: var(--success);
  font-size: 18px;

}

.logout-button {
  @media (max-width: 768px) {
    margin-top: auto;
  }
}

.close-menu-mobile {
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 1;
    cursor: pointer;
    color: var(--primary);
    font-size: 20px;
    border: none;
    background-color: transparent;
  }
}
</style>
