<template>
  <form @submit.prevent="getUserInput">
    <h4>Search for your own</h4>
    <div>
      <label for="city">City:</label>
      <input type="text" name="city" id="city" v-model="userCity" />
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      userCity: null,
    };
  },
  methods: {
    getUserInput() {
      this.$emit("emit-user-input", this.userCity);
      this.userCity = ``;
    },
  },
};
</script>

<style scoped>
form {
  color: #fff;
  text-align: center;
  font-family: "Nunito", serif;
}

h4 {
  margin-bottom: 5px;
}

label {
  margin-right: 10px;
  font-weight: 600;
}
</style>
