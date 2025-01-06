const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "Gloria",
          name: "Gloria AI",
          phone: "01234 5678 991",
          eMail: "Gloria@ai.com",
          isShown: false,
        },
        {
          id: "Alt",
          name: "Alt Cunningham",
          phone: "0333134 991",
          eMail: "Alt@ai.com",
          isShown: false,
        },
      ],
    };
  },
  methods: {
    showDetails(ID) {
      this.friends.forEach((friend) => {
        if (friend.id == ID) {
          friend.isShown = !friend.isShown;
        }
      });
    },
  },
});

app.mount("#app");
