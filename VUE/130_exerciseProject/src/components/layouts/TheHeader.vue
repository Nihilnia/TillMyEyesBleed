<template>
  <header>
    <h1>{{ compTitle }}</h1>
  </header>
</template>

<script>
export default {
  props: ['title'],
  computed: {
    compTitle() {
      return this.title.toUpperCase();
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #640032;
  display: flex;
  justify-content: center;
  align-items: center;
}

header h1 {
  color: white;
  margin: 0;
}
</style>
