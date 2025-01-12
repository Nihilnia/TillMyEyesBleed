<template>
  <section>
    <button @click="makeActive('active-goals')">Active Goals</button>
    <button @click="makeActive('manage-goals')">Manage Goals</button>
    <keep-alive>
      <component :is="activeElement"></component>
    </keep-alive>
  </section>
</template>

<script>
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";

export default {
  name: "App",
  components: {
    ActiveGoals,
    ManageGoals,
  },
  data() {
    return {
      activeElement: "activeGoals",
    };
  },
  methods: {
    makeActive(arg) {
      this.activeElement = arg;
    },
  },
  computed: {
    calcActiveElement() {
      return this.activeElement == "activeGoals";
    },
  },
};
</script>
