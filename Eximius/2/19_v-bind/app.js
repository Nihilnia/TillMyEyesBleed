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
      if (Math.random() > 0.5) {
        this.randomLetter = "N";
      } else {
        this.randomLetter = "L";
      }
    },
  },
  mounted() {
    this.selectRandomLetter();
  },
});

app.mount("#user-goal");
