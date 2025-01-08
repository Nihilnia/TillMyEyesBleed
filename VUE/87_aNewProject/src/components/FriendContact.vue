<template>
  <section>
    <li>
      <h2>{{ name }} ({{ isFriendFavorite === "1" ? "favorite" : "" }})</h2>
      <button @click="toggleFav">Toggle Favorite</button>
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
  props: ["name", "phoneNumber", "emailAddress", "isFavorite"],
  data() {
    return {
      isDetailsVisible: false,
      friend: {
        id: 0,
        name: this.name,
        phone: "123 456",
        eMail: `${this.name}@AI.com`,
      },
      isFriendFavorite: this.isFavorite,
    };
  },
  methods: {
    toggleVisibility() {
      this.isDetailsVisible = !this.isDetailsVisible;
    },
    toggleFav() {
      if (this.isFriendFavorite == "1") {
        this.isFriendFavorite = "0";
      } else {
        this.isFriendFavorite = "1";
      }
    },
  },
};
</script>

<style></style>
