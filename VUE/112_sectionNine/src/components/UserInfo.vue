<template>
  <card-base>
    <section>
      <header>
        <h3>{{ fullName }}</h3>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </header>
      <p>{{ infoText }}</p>
    </section>
  </card-base>
</template>

<script>
import CardBase from "./CardBase.vue";

export default {
  components: {
    CardBase,
  },
  props: ["fullName", "infoText", "role"],
};
</script>

<style scoped>
section div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
