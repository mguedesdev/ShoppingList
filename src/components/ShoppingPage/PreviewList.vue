<template>
  <div class="chat-container">

    <div class="message received">
      <p>Olá, espero que esteja bem!</p>
      <span class="timestamp">11:00 AM</span>
    </div>

    <div class="message received">
      <p>Essa é a sua lista de compras:</p>
      <span class="timestamp">11:01 AM</span>
    </div>

    <div class="message sent">
      <p>Lista de compras:</p>

      <div v-for="category in selectedItems" :key="category.categoryName" class="category">
        <p>{{ category.categoryName }}</p>

        <div v-for="subcategory in category.subcategories" :key="subcategory.subcategoryName" class="subcategory">
          <p>- {{ subcategory.subcategoryName }}</p>

          <div v-for="item in subcategory.items" :key="item.itemName" class="item">
            <p>- {{ item.itemName }}<span v-if="item.quantity" class="quantity"> ({{ item.quantity }})</span></p>
          </div>
        </div>
      </div>

      <span class="timestamp">11:05 AM</span>
    </div>


  </div>
  <div class="chat-send">
    <button class="button-send" @click="sendMessage">
      <font-awesome-icon icon="paper-plane" />
      <span>Enviar</span>
    </button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'PreviewList',
  components: {
  },
  computed: {
    ...mapState('shoppingList', ['selectedItems']),
  },
  methods: {
    ...mapActions('shoppingList', ['setCurrentTab']),
    sendMessage() {
      this.setCurrentTab('ShareItens');
    },
  },
};
</script>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  width: 100%;
  background-color: #e5ddd5;
  height: 100%;
  overflow-y: auto;
  border-radius: 10px;
  border: 1px solid #ccc;
}

.message {
  max-width: 80%;
  padding: 10px;
  border-radius: 10px;
  position: relative;
  margin-bottom: 10px;
}

.message.sent {
  align-self: flex-end;
  background-color: #DCF8C6;
  color: #000;
}

.message.received {
  align-self: flex-start;
  background-color: #fff;
  color: #000;
  border: 1px solid #ccc;
}

.timestamp {
  font-size: 10px;
  color: #999;
  position: absolute;
  bottom: -15px;
  right: 10px;
}

.message p {
  margin: 0;
  font-size: 14px;

}

.message.sent .timestamp {
  right: 10px;
}

.message.received .timestamp {
  left: 10px;
}

.chat-send {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  margin-top: auto;
}

.button-send {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 20px;
  width: 100%;
  background-color: var(--success);
  color: var(--white);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 16px;
  font-weight: 600;
}

.category {
  font-weight: bold;
  margin-top: 10px;
}

.subcategory {
  margin-left: 10px;
}

.item {
  margin-left: 20px;
  font-weight: 500;
}

.quantity {
  font-size: 12px;
}
</style>
