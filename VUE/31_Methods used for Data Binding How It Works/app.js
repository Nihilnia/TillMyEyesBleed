const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    handleReset() {
      this.name = "";
    },
    handleInput() {
      alert(`asdasd`);
    },
    showFullName() {
      console.log("setFullName function running..");
      if (this.name != "") {
        return this.name + " " + "ABC";
      }
    },
  },
});

app.mount("#events");
