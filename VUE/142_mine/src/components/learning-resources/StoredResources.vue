<template>
  <base-card>
    <learning-resources
      v-for="res in allResources"
      :key="res.id"
      :id="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    ></learning-resources
  ></base-card>
</template>

<script>
import LearningResources from "./LearningResources.vue";

export default {
  inject: ["allResources"],
  components: {
    LearningResources,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
