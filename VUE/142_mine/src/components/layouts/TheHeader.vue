<template>
  <section>
    <header>
      <slot name="headTitle">
        <h2>{{ compTitle }}</h2>
      </slot>
    </header>
  </section>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {};
  },
  computed: {
    compTitle() {
      return this.title.toUpperCase();
    },
  },
};
</script>

<style scoped>
section > header {
  padding: 2rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 20px;
  text-align: center;
  background-color: #42b883;
}
</style>
