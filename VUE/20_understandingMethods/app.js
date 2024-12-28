const app = Vue.createApp({
  data() {
    return {
      courseGoals: [
        {
          name: "A",
          link: "https:google.com",
        },
        {
          name: "B",
          link: "https:youtube.com",
        },
        {
          name: "C",
          link: "https:github.com",
        },
      ],
    };
  },
  methods: {
    showAGoal() {
      let randNumb = Math.floor(Math.random() * this.courseGoals.length);

      return this.courseGoals[randNumb];
    },
  },
});

//Spot the flaw: everytime running the function two times, so you are getting different names and links.
//Not going to deeper now. Lets move on. Clock is tickin.

app.mount("#user-goal");
