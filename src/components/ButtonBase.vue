<template>
  <button :class="['base-button', size, color]" :disabled="isDisabled">
    <font-awesome-icon v-if="icon" :icon="icon" class="button-icon" />
    <span>{{ text }}</span>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    text: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: 'medium',
      validator: value => ['small', 'medium', 'large'].includes(value)
    },
    color: {
      type: String,
      default: 'primary',
      validator: value => ['primary', 'secondary', 'danger', 'success'].includes(value)
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
};
</script>

<style scoped>
.base-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 16px;
  background-color: var(--primary);
  color: var(--white);
}

.base-button:hover {
  background-color: var(--secondary);
}

.base-button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.button-icon {
  margin-right: 8px;
}

.small {
  padding: 5px 10px;
  font-size: 14px;
}

.medium {
  padding: 10px 20px;
  font-size: 16px;
}

.large {
  padding: 15px 30px;
  font-size: 18px;
}

.primary {
  background-color: var(--primary);
}

.success {
  background-color: var(--success);
}

.secondary {
  background-color: var(--secondary);
}

.danger {
  background-color: var(--danger);
}
</style>
