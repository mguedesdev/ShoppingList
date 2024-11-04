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
      <li :class="{ active: currentTab === 'ShareItens' }" @click="selectTab('ShareItens')">
        <font-awesome-icon icon="paper-plane" />
        Compartilhar
      </li>
    </ul>
    <div class="logout">
      <font-awesome-icon icon="door-open" />
      <span>Sair</span>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavigationBar',
  data() {
    return {
      currentTab: 'AddItens'
    };
  },
  methods: {
    selectTab(tab) {
      this.currentTab = tab;
    }
  }
}
</script>

<style scoped>
.navigation-bar {
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

.logout {
  cursor: pointer;
  transition: color 0.3s;
  color: var(--primary);
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.logout:hover {
  color: var(--secondary);
}
</style>
