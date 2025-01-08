<template>
  <section>
    <li>
      <h2>{{ name }} {{ isFriendFavorite ? "(favorite)" : "" }}</h2>
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
  //   props: ["name", "phoneNumber", "emailAddress", "isFavorite"],
  props: {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      required: true,
      type: String,
    },
    isFavorite: {
      type: Boolean,
      required: false, //unneccesary, props' default required value is false
      default: false,
      // validator: function (val) {
      //   return val;
      //   // return ["0", "1"].includes(val); Alternative and I liked it, Bc its better.
      // },
    },
  },
  data() {
    return {
      isDetailsVisible: false,
      isFriendFavorite: this.isFavorite,
    };
  },
  methods: {
    toggleVisibility() {
      this.isDetailsVisible = !this.isDetailsVisible;
    },
    toggleFav() {
      return (this.isFriendFavorite = !this.isFriendFavorite);
    },
  },
};
</script>

<style></style>
