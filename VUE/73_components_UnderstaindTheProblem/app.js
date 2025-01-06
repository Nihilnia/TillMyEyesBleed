const app = Vue.createApp({
  data() {
    return {
      friends: [
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
    toggleDetails(ID) {
      this.friends.forEach((friend) => {
        if (friend.id == ID) {
          friend.isShown = !friend.isShown;
        }
      });
    },
  },
});

app.component("friend-card-component", {
  template: `
  <li :key="friend.id">
          <h2>{{friend.name}}</h2>
          <button @click="toggleDetails">Show Details</button>
          <ul v-if="isShown">
            <li><strong>Phone:</strong>{{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.eMail}}</li>
          </ul>
        </li>
  `,
  data() {
    return {
      isShown: false,
      friend: {
        id: "Gloria",
        name: "Gloria AI",
        phone: "01234 5678 991",
        eMail: "Gloria@ai.com",
        isShown: false,
      },
    };
  },
  methods: {
    toggleDetails() {
      this.isShown = !this.isShown;
    },
  },
});

app.mount("#app");
