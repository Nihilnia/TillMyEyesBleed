<template>
  <section>
    <ul v-for="resource in resources" :key="resource.id">
      <learning-resource
        :id="resource.id"
        :title="resource.title"
        :description="resource.description"
        :link="resource.link"
      ></learning-resource>
    </ul>
  </section>
</template>

<script>
import LearningResource from './LearningResource.vue';

export default {
  props: ['resources'],
  components: {
    LearningResource,
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
