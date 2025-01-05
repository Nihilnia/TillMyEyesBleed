const app = Vue.createApp({
  data() {
    return {
      welcomeMessage: "Welcome Gloria",
      aboutProject: "Build by Nihil",
      task: "",
      tasks: [],
    };
  },
  methods: {
    addTask() {
      this.tasks.push({
        ID: this.tasks.length + 1,
        name: this.task,
        situation: "pending",
      });
      this.task = "";
    },
    resetTasks() {
      this.tasks = [];
    },
    handleRemoveTask(givenID) {
      this.tasks = this.tasks.filter((task) => task.ID != givenID);
    },
    handleCompleteTask(givenID) {
      this.tasks.forEach((task) => {
        if (task.ID == givenID) {
          task.situation = "completed";
        }
      });
    },
    handleHover() {
      console.log("asdasd");
    },
  },
  computed: {
    filterCompleted() {
      return this.tasks.filter((task) => task.situation == "completed");
    },
    filterPending() {
      return this.tasks.filter((task) => task.situation == "pending");
    },
  },
});

app.mount("#app");
