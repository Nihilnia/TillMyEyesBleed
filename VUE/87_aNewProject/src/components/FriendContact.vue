<template>
  <section>
    <li>
      <h2>{{ name }} {{ isFavorite ? "(favorite)" : "" }}</h2>
      <button @click="toggleFav">
        {{ isFavorite ? "Unfavorite" : "Make favorite" }}
      </button>
      &nbsp;
      <button @click="toggleVisibility">
        {{ isDetailsVisible ? "hide details" : "show details" }}
      </button>
      <ul v-if="isDetailsVisible">
        <li>{{ phoneNumber }}</li>
        <li>{{ emailAddress }}</li>
      </ul>
      &nbsp;
      <button @click="$emit('emit-remove', id)">Remove {{ name }}</button>
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
  emits: ["emit-favorite", "emit-remove"],
  // emits: {
  //   "emit-favorite": function (id) {
  //     if (id !== undefined && id !== null) {
  //       // Allow `0` but disallow `undefined` or `null`
  //       return true;
  //     } else {
  //       console.warn("Hey, emitted function did not pass ID");
  //       return false;
  //     }
  //   },
  // },
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
