<template>
  <h2>Lab page</h2>
</template>

<script>
export default {
  inject: ["setCurrentPage"],
  mounted() {
    this.setCurrentPage("About me", "About me", "Where to start?");
  },
};
</script>
