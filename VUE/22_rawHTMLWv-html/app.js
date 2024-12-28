const app = Vue.createApp({
  data() {
    return {
      goalA: "<h3 style='border: 1px solid red'>AAAA</h3>",
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
