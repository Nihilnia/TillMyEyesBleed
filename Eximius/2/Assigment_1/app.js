const App = Vue.createApp({
  data() {
    return {
      name: "Nihil",
      age: 30,
      randomNumb: Math.floor(Math.random() * 2),
      imgLink:
        "https://cdna.artstation.com/p/assets/images/images/042/124/394/large/arkadiy-demchenko-indisposed-all-0013.jpg?1633628553",
      imgTarget: "_blank",
      randomArray: [
        "Alice",
        "Bob",
        "Charlie",
        "David",
        "Eve",
        "Frank",
        "Grace",
        "Henry",
        "Ivy",
        "Jack",
      ],
    };
  },
  methods: {
    agePlusFive() {
      return this.age + 5;
    },
  },
});

App.mount("#assignment");
