const appOne = Vue.createApp({
  data() {
    return {
      goalFirstWord: "Finish",
      names: ["v", "u", "e"],
      goalLastWord: "ASAP",
      tryDaObj: {
        name: "Nihil",
        occupy: "Developer",
      },
    };
  },
});

appOne.mount("#user-goal");

const appTwo = Vue.createApp({
  data() {
    return {
      headerTitle: "Vue Course Goals!",
    };
  },
});

appTwo.mount("header");
