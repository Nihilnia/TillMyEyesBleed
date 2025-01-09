<template>
  <form @submit.prevent="sendNewContact">
    <div>
      <div>
        <label for="">Name: </label>
        <input type="text" placeholder="Name" v-model="name" />
      </div>
      <div>
        <label for="">Phone: </label>
        <input type="tel" placeholder="Phone" v-model="phone" />
      </div>
      <div>
        <label for="">E=Mail: </label
        ><input type="email" placeholder="E-Mail" v-model="email" />
      </div>

      <div>
        <button type="submit">Add</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["emit-new-contact"],
  data() {
    return {
      name: "",
      phone: "",
      email: "",
    };
  },
  methods: {
    sendNewContact() {
      this.$emit("emit-new-contact", this.name, this.phone, this.email);
      this.name = "";
      this.phone = "";
      this.email = "";
    },
  },
};
</script>
