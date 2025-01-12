<template>
  <div>
    <the-header></the-header>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";
export default {
  components: {
    TheHeader,
    ActiveGoals,
    ManageGoals,
  },
  data() {
    return {
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    changeRoleType() {
      this.activeUser.role =
        this.activeUser.role === "admin" ? "author" : "admin";
    },
  },
};
</script>
