const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    handleAdd() {
      this.counter++;
    },
    handleRemove() {
      this.counter--;
    },
    handleReset() {
      this.counter = 0;
    },
  },
});

app.mount("#events");
