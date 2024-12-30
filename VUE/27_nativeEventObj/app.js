const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
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
    getName(event, arg) {
      console.log(event);
      this.name = `${arg} ${event.target.value}`;
    },
  },
});

app.mount("#events");
