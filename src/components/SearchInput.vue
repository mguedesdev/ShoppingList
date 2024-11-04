<template>
  <div class="search-input">
    <font-awesome-icon v-if="icon" :icon="icon" class="search-icon" />
    <input class="input" type="text" :placeholder="placeholder" v-model="searchValue" @input="onInput" />
  </div>
</template>

<script>
export default {
  name: "SearchInput",
  props: {
    icon: {
      type: String,
    },
    placeholder: {
      type: String,
      default: "Pesquisar",
    },
    modelValue: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      searchValue: this.modelValue,
    };
  },
  watch: {
    modelValue(newVal) {
      this.searchValue = newVal;
    },
  },
  methods: {
    onInput() {
      this.$emit("update:modelValue", this.searchValue);
    },
  },
};
</script>

<style scoped>
.search-input {
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  padding: 5px 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

}

.search-icon {
  margin-right: 10px;
  color: var(--primary);
}

.input {
  border: none;
  outline: none;
  font-size: 16px;
  transition: all 0.6s ease;
  width: 100%;
}

.input::placeholder {
  color: var(--placeholder);
}

.input:focus {
  border: none;
  outline: none;
  width: 500px;
}
</style>
