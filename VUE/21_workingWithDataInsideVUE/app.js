const app = Vue.createApp({
  data() {
    return {
      goalA: "AAAA",
      goalB: "BBBB",
    };
  },
  methods: {
    showAGoal() {
      let randomNumb = Math.random();

      if (randomNumb < 0.5) {
        return this.goalA;
      } else {
        return this.goalB;
      }
    },
  },
});

app.mount("#user-goal");
