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
  methods: {},
});

app.mount("#user-goal");
