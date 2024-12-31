const app = Vue.createApp({
  data() {
    return {
      result: 0,
      countDown: 5,
    };
  },
  methods: {
    addFive() {
      this.result += 5;
    },
    addOne() {
      this.result++;
    },
    minusOne() {
      this.result--;
    },
  },
  computed: {
    finalResult() {
      if (this.result < 37) {
        return "Not there yet";
      } else if (this.result > 37) {
        return "Too much!";
      } else {
        return this.result;
      }
    },
  },
  watch: {
    result() {
      console.log("Watcher is working..");
      setTimeout(() => {
        this.result = 0;
      }, 5000);
    },
  },
});

app.mount("#assignment");
