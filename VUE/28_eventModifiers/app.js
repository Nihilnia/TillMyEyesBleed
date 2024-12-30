const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
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
    handleSubmit(event) {
      alert(
        `${this.name}, ${this.counter}, ${event.target.firstElementChild.value}`
      );
    },
    checkEnter() {
      this.confirmedName = this.name;
    },
    checkEnterNoMore() {
      this.confirmedName = "";
    },
  },
});

app.mount("#events");
