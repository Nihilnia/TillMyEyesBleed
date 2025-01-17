<template>
  <h2>HomePage</h2>
</template>
<script>
export default {
  inject: ["setCurrentPage"],
  mounted() {
    this.setCurrentPage("Portfolio", "Portfolio", "Why this kind of design?");
  },
};
</script>
