<template>
  <h2>Lab page</h2>
</template>

<script>
export default {
  inject: ["setCurrentPage"],
  mounted() {
    this.setCurrentPage("Lab", "Laboratory", "Someo of my collections");
  },
};
</script>
