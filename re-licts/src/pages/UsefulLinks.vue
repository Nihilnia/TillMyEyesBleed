<template>
  <h2>HomePage</h2>
</template>
<script>
export default {
  inject: ["setCurrentPage"],
  mounted() {
    this.setCurrentPage(
      "Useful Links",
      "Useful Stuff",
      "Right tools for right choices"
    );
  },
};
</script>
