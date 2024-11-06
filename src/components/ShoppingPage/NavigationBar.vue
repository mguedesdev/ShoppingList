<template>
  <nav class="navigation-bar">
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
      <li @click="openModal">
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
    },
    preview() {
      this.setOpenPreview();
    },
    openModal() {
      this.modalOpen = true;
    },
    closeModal() {
      this.modalOpen = false;
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
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 30px;
  padding: 0;
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
</style>
