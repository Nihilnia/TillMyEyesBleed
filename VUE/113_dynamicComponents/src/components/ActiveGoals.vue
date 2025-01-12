<template>
  <section>
    <h2 v-for="goal in goals" :key="goal">{{ goal }}</h2>
  </section>
</template>

<script>
export default {
  data() {
    return {
      goals: ["goalZero", "goalOne", "goalTwo"],
    };
  },
};
</script>
