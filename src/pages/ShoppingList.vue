<template>
  <div class="shopping-list-page">
    <SideBar />
    <div class="content">
      <NavigationBar />
      <div class="main-content">
        <div class="main-container">
          <SelectItens />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBar from '@/components/ShoppingPage/NavigationBar.vue';
import SelectItens from '@/components/ShoppingPage/SelectItens.vue';
import SideBar from '@/components/ShoppingPage/SideBar.vue';



export default {
  name: 'ShoppingList',
  components: {
    SideBar,
    NavigationBar,
    SelectItens
  }
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
  padding: 20px;
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
