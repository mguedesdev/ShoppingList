<template>
  <div class="login-page">
    <LeftSide />
    <RightSide />
  </div>
</template>

<script>
import LeftSide from '@/components/LoginPage/LeftSide.vue';
import RightSide from '@/components/LoginPage/RightSide.vue';


export default {
  name: 'LoginPage',
  components: {
    LeftSide,
    RightSide
  },
};
</script>

<style scoped>
.login-page {
  display: flex;
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: flex-start;
    overflow-y: scroll;
  }
}
</style>
