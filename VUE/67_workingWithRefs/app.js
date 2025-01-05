const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      console.log("Getting the element from refs");
      console.log(this.$refs.userInput);
      this.message = this.$refs.userInput.value;
    },
  },
});

app.mount("#app");
