const app = Vue.createApp({
  data() {
    return {
      isBoxASelected: false,
      isBoxBSelected: false,
      isBoxCSelected: false,
    };
  },
  methods: {
    handleClick(box) {
      if (box == "A") {
        this.isBoxASelected = !this.isBoxASelected;
      } else if (box == "B") {
        this.isBoxBSelected = !this.isBoxBSelected;
      } else if (box == "C") {
        this.isBoxCSelected = !this.isBoxCSelected;
      }
    },
  },
});

app.mount("#styling");
