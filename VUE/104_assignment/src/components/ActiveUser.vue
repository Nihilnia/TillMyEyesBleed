<template>
  <section>
    <p>Name: {{ name }}</p>
    <p>Age: {{ age }}</p>
  </section>
</template>

<script>
export default {
  props: ["id", "name", "age"],
};
</script>

<style scoped>
section {
  margin-bottom: 10px;
}
</style>
