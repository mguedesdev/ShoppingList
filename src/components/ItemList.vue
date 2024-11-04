<template>
  <li class="item-list">
    <span class="item-name">{{ name }}</span>
    <div class="options" v-if="$slots.options">
      <slot name="options"></slot>
    </div>
  </li>
</template>

<script>
export default {
  name: 'ItemList',
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.item-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  /* box-shadow: 0 0px 10px rgba(0, 0, 0, 0.25); */
  border: solid 1px var(--border-itens);
}
</style>
