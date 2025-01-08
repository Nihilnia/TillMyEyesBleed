<template>
  <section>
    <li>
      <h2>{{ name }} {{ isFavorite ? "(favorite)" : "" }}</h2>
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
    id: {
      type: Number,
      required: true,
    },
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
    };
  },
  methods: {
    toggleVisibility() {
      this.isDetailsVisible = !this.isDetailsVisible;
    },
    toggleFav() {
      this.$emit("emit-favorite", this.id);
    },
  },
};
</script>

<style></style>
