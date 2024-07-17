const app = Vue.createApp({
  data() {
    return {
      goalFirstWord: "<h1>Learn</h1>",
      goalLastWord: "<h1>ASAP</h1>",
      names: ["V", "U", "E"],
      randomLetter: "",
      tryDaObj: {
        name: "Nihil",
        occupation: "Developer",
      },
      vueLink: "https://vuejs.org/",
      linkTarget: "_blank",
    };
  },
  methods: {
    selectRandomLetter() {
      console.log("selectRandomLetter");

      if (Math.random() > 0.5) {
        console.log("First Word");
        return this.goalFirstWord;
      } else {
        console.log("Last Word");
        return this.goalLastWord;
      }
    },
  },
  mounted() {
    this.selectRandomLetter();
  },
});

app.mount("#user-goal");
