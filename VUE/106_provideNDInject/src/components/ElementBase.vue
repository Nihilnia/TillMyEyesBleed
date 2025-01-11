<template>
  <section>
    <ul v-for="element in elements" :key="element.id">
      <li>{{ element.name }}</li>
      <li>{{ element.description }}</li>
      <button @click="selectElement(element.id)">Select</button>
    </ul>
  </section>
</template>

<script>
export default {
  emits: ["emit-select-element"],
  inject: ["elements"],
  methods: {
    selectElement(ID) {
      console.log("asdjasd");
      this.$emit("emit-select-element", ID);
    },
  },
};
</script>
