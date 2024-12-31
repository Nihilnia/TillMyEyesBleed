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
      console.log("Handle reset is working..");
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
  computed: {
    fullName() {
      console.log("fullName function running..");
      if (this.name != "") {
        return this.name + " " + "ABC";
      }
    },
  },
});

app.mount("#events");
