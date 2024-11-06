<template>
  <div class="left-side">
    <IllustrationLogin class="illustration" />
    <div class="text-container">
      <h2>Bem-vindo ao seu organizador de compras!</h2>
      <p>Simplifique sua rotina e nunca mais esqueça nada na hora de fazer suas compras.</p>
      <p> Cadastre-se ou entre para começar a organizar sua lista!</p>
    </div>
  </div>
</template>

<script>
import IllustrationLogin from '../svg/IllustrationLogin.vue';

export default {
  name: 'LeftSide',
  components: {
    IllustrationLogin
  },
}
</script>

<style scoped>
.left-side {
  flex: 3;
  background-color: var(--background-login);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;

  @media (max-width: 768px) {
    /* flex: 0;
    padding: 30px 10px; */
    display: none;
  }

}

.text-container h2 {
  font-weight: bold;
  color: var(--secondary);
  font-size: 28px;

  @media (max-width: 768px) {
    /* font-size: 18px; */
  }
}

.text-container p {
  font-size: 18px;
  font-weight: 500;
  width: 80%;

  @media (max-width: 768px) {
    /* font-size: 14px;
    width: 100%; */
  }
}

.text-container {
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}

.illustration {
  width: 100%;

  @media (max-width: 768px) {
    /* margin-top: -30px; */
  }
}
</style>