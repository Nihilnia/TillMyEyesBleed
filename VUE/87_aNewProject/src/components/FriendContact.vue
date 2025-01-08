<template>
  <section>
    <li>
      <h2>{{ name }}</h2>
      <button @click="toggleVisibility">
        {{ isDetailsVisible ? "hide details" : "show details" }}
      </button>
      <ul v-if="isDetailsVisible">
        <li>{{ phoneNumber }}</li>
        <li>{{ emailAddress }}</li>
      </ul>
    </li>
  </section>
</template>

<script>
export default {
  props: ["name", "phoneNumber", "emailAddress"],
  data() {
    return {
      isDetailsVisible: false,
      friend: {
        id: 0,
        name: this.name,
        phone: "123 456",
        eMail: `${this.name}@AI.com`,
      },
    };
  },
  methods: {
    toggleVisibility() {
      this.isDetailsVisible = !this.isDetailsVisible;
    },
  },
};
</script>

<style></style>
