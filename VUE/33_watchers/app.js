const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lName: "",
      lengthOfName: 0,
      lengthOfLName: 0,
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
      this.lName = "";
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
      if (this.name != "" && this.lName != "") {
        return this.name + " " + this.lName;
      }
    },
    computeLength() {
      if (this.name.length != 0) {
        return { a: this.name.length, b: this.lName.length };
      }
    },
  },
  watch: {
    name(newVal) {
      this.lengthOfName = newVal.length;
    },
    lName(newval) {
      this.lengthOfLName = newval.length;
    },
    counter(newValue) {
      if (newValue > 50) {
        let inter = setInterval(() => {
          if (this.counter > 0) {
            this.counter -= 10;
          } else {
            clearInterval(inter);
          }
        }, 1000);
      } else if (newValue <= 0) {
        this.counter = 0;
      }
    },
  },
});

app.mount("#events");
