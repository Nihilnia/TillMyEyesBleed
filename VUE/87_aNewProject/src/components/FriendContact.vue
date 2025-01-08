<template>
  <section>
    <li>
      <h2>{{ friend.name }}</h2>
      <button @click="toggleVisibility">
        {{ isDetailsVisible ? "hide details" : "show details" }}
      </button>
      <ul v-if="isDetailsVisible">
        <li>{{ friend.phone }}</li>
        <li>{{ friend.eMail }}</li>
      </ul>
    </li>
  </section>
</template>

<script>
export default {
  props: {
    name: String,
  },
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
  watch: {
    name(val) {
      return val == "Gloria"
        ? (this.friend.eMail = "Gloria@AI.com")
        : (this.friend.eMail = "Alt@RogueAI.com");
    },
  },
};
</script>

<style></style>
