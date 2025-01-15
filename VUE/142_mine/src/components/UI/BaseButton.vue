<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
button {
  padding: 4px 10px;
  background-color: #345623;
  color: #fff;
  border: none;
}
</style>
