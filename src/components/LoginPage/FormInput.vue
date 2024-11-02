<template>
  <div class="input-container">
    <label :class="{ focused: isFocused }" :for="name">{{ label }}</label>
    <div class="input-wrapper">
      <font-awesome-icon v-if="type === 'email' || type === 'password'" :icon="type === 'email' ? 'envelope' : 'lock'"
        :class="{ focused: isFocused }" class="input-icon" />
      <input :type="isPasswordVisible ? 'text' : type" :id="name" :name="name" :placeholder="placeholder"
        v-model="inputValue" @focus="isFocused = true" @blur="isFocused = false"
        @input="$emit('update:modelValue', inputValue)" required />
      <font-awesome-icon v-if="type === 'password'" :icon="isPasswordVisible ? 'eye' : 'eye-slash'"
        class="toggle-password-icon" @click="togglePasswordVisibility" />
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: 'FormInput',
  components: {
    FontAwesomeIcon,
  },
  props: {
    label: String,
    type: {
      type: String,
      default: 'text'
    },
    name: String,
    placeholder: String,
    modelValue: String,
  },
  data() {
    return {
      inputValue: this.modelValue,
      isFocused: false,
      isPasswordVisible: false,
    };
  },
  watch: {
    modelValue(newVal) {
      this.inputValue = newVal;
    }
  },
  methods: {
    togglePasswordVisibility() {
      this.isPasswordVisible = !this.isPasswordVisible;
    }
  }
};
</script>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
}

label {
  color: var(--secondary);
  padding-left: 5px;
  font-weight: 500;
  transition: color 0.3s ease;
}

label.focused {
  color: var(--primary);
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: 10px;
  color: var(--secondary);
  font-size: 18px;
  transition: color 0.3s ease;
}

.input-icon.focused {
  color: var(--primary);
}

input {
  padding: 10px 10px 10px 35px;
  border: 1px solid #CFCFCF;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  width: 100%;
}

input::placeholder {
  color: var(--placeholder);
}

input:focus {
  outline: none;
  border-color: var(--primary);
  /* box-shadow: 0 0 5px var(--primary); */
}

.toggle-password-icon {
  position: absolute;
  right: 10px;
  cursor: pointer;
  color: var(--secondary);
}
</style>
