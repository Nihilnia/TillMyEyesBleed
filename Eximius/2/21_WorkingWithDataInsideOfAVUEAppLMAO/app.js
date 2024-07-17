const app = Vue.createApp({
  data() {
    return {
      goalFirstWord: "Learn",
      goalLastWord: "Asap",
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
        this.randomLetter = this.goalFirstWord;
      } else {
        this.randomLetter = this.goalLastWord;
      }
    },
  },
  mounted() {
    setInterval(() => {
      this.selectRandomLetter();
    }, 500);
  },
});

app.mount("#user-goal");
