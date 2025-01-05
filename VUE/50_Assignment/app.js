const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      allTasks: [],
      isListVisible: true,
    };
  },
  methods: {
    addTask() {
      this.allTasks.push(this.userInput);
      this.userInput = "";
    },
    removeTask(idx) {
      this.allTasks.splice(idx, 1);
    },
    toggleList() {
      this.isListVisible = !this.isListVisible;
    },
  },
  computed: {
    dynamicResult() {
      return this.isListVisible ? "hide" : "show";
    },
  },
});

app.mount("#assignment");
