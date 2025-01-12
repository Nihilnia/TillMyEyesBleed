<template>
  <section>
    <header v-if="$slots.slotHeader">
      <slot name="slotHeader"></slot>
    </header>
    <slot>
      <h2>This is default content of the slot</h2>
    </slot>
  </section>
</template>

<script>
export default {
  mounted() {
    console.log(`slotHeader slot`);
    console.log(this.$slots.slotHeader);

    console.log(`Default slot`);
    console.log(this.$slots.default);

    console.log(`All slots`);
    console.log(this.$slots);
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
