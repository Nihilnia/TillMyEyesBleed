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
  beforeCreate() {
    console.log("beforeCreate() worked.");
  },
  created() {
    console.log("created() worked.");
  },
  beforeMount() {
    console.log("beforeMount() worked.");
  },
  mounted() {
    console.log("mounted() worked.");
  },
  beforeUpdate() {
    console.log("beforeUpdate() worked.");
  },
  updated() {
    console.log("updated() worked.");
  },
  beforeUnmount() {
    console.log("beforeUnmount() worked.");
  },
  unmounted() {
    console.log("unmounted() worked.");
  },
});

app.mount("#app");

setTimeout(() => {
  app.unmount();
}, 20000);
