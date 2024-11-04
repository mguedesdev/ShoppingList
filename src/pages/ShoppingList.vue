<template>
  <div class="shopping-list-page">
    <SideBar />
    <div class="content">
      <NavigationBar />
      <div class="main-content">
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBar from '@/components/ShoppingPage/NavigationBar.vue';
import SideBar from '@/components/ShoppingPage/SideBar.vue';



export default {
  name: 'ShoppingList',
  components: {
    SideBar,
    NavigationBar
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

h1 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}
</style>
