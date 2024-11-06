<template>
  <OverlayForModal @close="cancel">
    <div class="modal">
      <div class="icon-container">
        <font-awesome-icon v-if="icon" :icon="icon" class="icon" />
      </div>
      <p>{{ message }}</p>
      <div class="buttons">
        <ButtonBase @click="cancel" color="danger" :text="cancelText" />
        <ButtonBase @click="confirm" color="success" :text="confirmText" />
      </div>
    </div>
  </OverlayForModal>
</template>

<script>
import ButtonBase from "../ButtonBase.vue";
import OverlayForModal from "../OverlayForModal.vue";

export default {
  name: "ModalConfirmation",
  components: {
    OverlayForModal,
    ButtonBase
  },
  props: {
    message: {
      type: String,
      default: ""
    },
    confirmText: {
      type: String,
      default: "Confirmar"
    },
    cancelText: {
      type: String,
      default: "Cancelar"
    },
    icon: {
      type: String, default: ""
    }
  },
  methods: {
    confirm() {
      this.$emit("confirm");
    },
    cancel() {
      this.$emit("cancel");
    },
  },
};
</script>

<style scoped>
.modal {
  background: var(--white1);
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  position: relative;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.55);
}

.modal p {
  padding: 10px;
  width: 100%;
  margin: 20px 0;
  color: var(--secondary);
}

.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.icon-container {
  width: 70px;
  height: 70px;
  background-color: var(--white1);
  border-radius: 50%;
  position: absolute;
  top: 00%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon {
  width: 60%;
  height: 60%;
}
</style>
