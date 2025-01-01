const app = Vue.createApp({
  data() {
    return {
      isBoxASelected: false,
      isBoxBSelected: false,
      isBoxCSelected: false,
      isBoxDSelected: false,
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
      } else if (box == "D") {
        this.isBoxDSelected = !this.isBoxDSelected;
      }
    },
  },
});

app.mount("#styling");
