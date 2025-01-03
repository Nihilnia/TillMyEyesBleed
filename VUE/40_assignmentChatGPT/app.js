const daApp = Vue.createApp({
  data() {
    return {
      isPrimary: false,
      isDisabled: false,
    };
  },
  methods: {
    toggleClasses() {
      this.isPrimary = !this.isPrimary;
      this.isDisabled = !this.isDisabled;
    },
  },
  computed: {
    btnClasses() {
      return {
        "btn-primary": this.isPrimary,
        "btn-disabled": this.isDisabled,
      };
    },
  },
});

daApp.mount("#assignment");
