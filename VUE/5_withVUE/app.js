Vue.createApp({
  data() {
    return {
      userInputs: [],
      givenInput: "",
    };
  },
  methods: {
    addGoal() {
      this.userInputs.push(this.givenInput);
      this.givenInput = "";
    },
  },
}).mount("#app");
