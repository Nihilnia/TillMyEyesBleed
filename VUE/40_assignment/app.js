const daApp = Vue.createApp({
  data() {
    return {
      userInputClass: "",
      isPVisible: true,
      userInline: "",
    };
  },
  methods: {
    handleToggle() {
      this.isPVisible = !this.isPVisible;
    },
  },
  computed: {
    pClasses() {
      return {
        user1: this.userInputClass === "user1",
        user2: this.userInputClass === "user2",
        visible: this.isPVisible,
        hidden: !this.isPVisible,
      };
    },
  },
});

daApp.mount("#assignment");
