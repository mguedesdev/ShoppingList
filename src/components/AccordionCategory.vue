<template>
  <div class="accordion-category">
    <div class="header" @click="toggle">
      <span class="subcategory-title">{{ title }}</span>
      <font-awesome-icon :icon="isOpen ? 'chevron-up' : 'chevron-down'" />
    </div>
    <transition name="accordion">
      <div ref="content" :style="contentStyle" class="content">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AccordionCategory',
  props: {
    title: {
      type: String,
      required: true,
    },
    initiallyOpen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isOpen: this.initiallyOpen,
      contentHeight: '0px',
    };
  },
  computed: {
    contentStyle() {
      return {
        maxHeight: this.isOpen ? this.contentHeight : '0px',
      };
    },
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
      this.$nextTick(() => {
        this.contentHeight = this.isOpen
          ? `${this.$refs.content.scrollHeight}px`
          : '0px';
      });
    },
  },
};
</script>

<style scoped>
.accordion-category {
  width: 100%;
  border-bottom: 1px solid var(--border-itens);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 10px 0;
}

.subcategory-title {
  font-size: 16px;
  padding: 8px 0;
  font-weight: 500;
  color: var(--primary);
  width: 100%;
}

.header:hover .subcategory-title {
  color: var(--secondary);
}

.content {
  overflow: hidden;
  transition: max-height 0.5s ease;
}
</style>
