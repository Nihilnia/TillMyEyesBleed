<template>
  <section>
    <h2>Manage Goals</h2>
    <input type="text" @keyup.enter="clearInput" ref="userInput" />
    <button @click="addNewGoal">Add</button>
    <teleport to="body">
      <alert-message v-if="isUserInput">
        <h2>Something went wrong.</h2>
        <p>Input cannot be empty.</p>
        <button @click="closeMessage">Okay</button>
      </alert-message>
    </teleport>
  </section>
</template>

<script>
import AlertMessage from "./AlertMessage.vue";

export default {
  components: {
    AlertMessage,
  },
  data() {
    return {
      isUserInput: false,
    };
  },
  methods: {
    clearInput(e) {
      e.target.value = " ";
    },
    addNewGoal() {
      let userInput = this.$refs.userInput.value;
      if (userInput === "") this.isUserInput = true;
    },
    closeMessage() {
      this.isUserInput = false;
    },
  },
};
</script>
