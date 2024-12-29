const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    handleAdd(numb) {
      this.counter += numb;
    },
    handleRemove(numb) {
      this.counter -= numb;
    },
    handleReset() {
      this.counter = 0;
    },
  },
});

app.mount("#events");
