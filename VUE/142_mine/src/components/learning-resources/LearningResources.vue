<template>
  <base-card class="Gloria">
    <h4>{{ title }}</h4>
    <h4>{{ description }}</h4>
    <h4>{{ link }}</h4></base-card
  >
</template>

<script>
export default {
  props: ["id", "title", "description", "link"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.Gloria {
  margin-top: 10px;
}
</style>
