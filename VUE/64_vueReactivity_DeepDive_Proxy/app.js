const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount("#app");

// let message = "Gloria";

// let longMessage = "Hello " + message;
// console.log(longMessage);

// message = "Hiiiii ";

// console.log(longMessage);

const data = {
  message: "old message",
  longMessage: "this is long message",
};

const handler = {
  set(target, key, value) {
    if (key === "message") {
      target.longMessage = value + "_" + "Something";
    }

    console.log(target);
    console.log(key);
    console.log(value);
  },
};

const proxy = new Proxy(data, handler);

proxy.message = "new message";
console.log("###");
console.log(proxy.longMessage);
