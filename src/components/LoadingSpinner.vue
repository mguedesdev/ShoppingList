<template>
  <div class="loading-spinner" :class="size"></div>
</template>

<script>
export default {
  name: "LoadingSpinner",
  props: {
    size: {
      type: String,
      default: "medium"
    }
  }
};
</script>

<style scoped>
.loading-spinner {
  width: 50px;
  height: 50px;
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-top-color: var(--primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.loading-spinner.small {
  width: 20px;
  height: 20px;
  border-width: 3px;
}

.loading-spinner.medium {
  width: 30px;
  height: 30px;
  border-width: 4px;
}

.loading-spinner.large {
  width: 40px;
  height: 40px;
  border-width: 5px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
