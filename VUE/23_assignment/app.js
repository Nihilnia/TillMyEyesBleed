const app = Vue.createApp({
  data() {
    return {
      name: "Gloria",
      age: 7,
      imageUrl: "https://img.youtube.com/vi/8iaUfvd3LaI/maxresdefault.jpg",
    };
  },
  methods: {
    agePlus(numb) {
      return this.age + numb;
    },
    randomNumb(numb) {
      return Math.floor(Math.random() * numb);
    },
  },
});

app.mount("#assignment");
