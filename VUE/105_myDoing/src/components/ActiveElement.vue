<template>
  <section>
    <h2>{{ name }}</h2>
    <h2>{{ description }}</h2>
  </section>
</template>

<script>
export default {
  props: ["id", "name", "description"],
  data() {
    return {};
  },
  methods: {},
};
</script>
