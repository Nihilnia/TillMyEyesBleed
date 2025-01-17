<template>
  <h2>HomePage</h2>
</template>
<script>
export default {
  inject: ["setCurrentPage"],
  mounted() {
    this.setCurrentPage("Home", "Welcome", "Let' s see around", "main.png");
  },
};
</script>
