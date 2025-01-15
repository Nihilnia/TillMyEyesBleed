<template>
  <section>
    <ul v-for="resource in resources" :key="resource.id">
      <learning-resources
        :id="resource.id"
        :title="resource.title"
        :description="resource.description"
        :link="resource.link"
      ></learning-resources>
    </ul>
  </section>
</template>

<script>
import LearningResources from './LearningResources.vue';

export default {
  inject: ['resources'],
  components: {
    LearningResources,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
