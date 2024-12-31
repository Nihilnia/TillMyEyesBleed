const app = Vue.createApp({
  data() {
    return {
      firstOutput: "",
      secondOutput: "",
    };
  },
  methods: {
    showAlert() {
      alert("Me and U - swelavin");
    },
    handleKeydown(e) {
      this.firstOutput = e.target.value;
    },
    handleEnter(e) {
      this.secondOutput = this.firstOutput;
    },
  },
});

app.mount("#assignment");
