Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      if (this.enteredValue == "") {
        return;
      } else {
        if (this.goals.includes(this.enteredValue)) {
          alert("Goal already exists");
          this.enteredValue = "";
          return;
        }
      }

      this.goals.push(this.enteredValue);
      console.log("New goal added: ", this.enteredValue);
      this.enteredValue = "";
    },

    clear() {
      this.goals = [];
    },
  },
}).mount("#app");

console.log("Hello World");

// let button = document.querySelector("button");
// let input = document.querySelector("input");
// let ulElement = document.querySelector("ul");

// button.addEventListener("click", function () {
//   ulElement.appendChild(document.createElement("li")).textContent = input.value;
//   input.value = "";
// });
