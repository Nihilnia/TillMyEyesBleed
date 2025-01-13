<template>
  <section>
    <h2>Stored Res</h2>
    <card-template>
      <h2>ID: {{ ID }}</h2>
      <h2>Title: {{ title }}</h2>
      <h2>Desc: {{ desc }}</h2>
      <h2>Link: {{ link }}</h2>
    </card-template>
  </section>
</template>

<script>
import CardTemplate from '../templates/CardTemplate.vue';

export default {
  components: {
    CardTemplate,
  },
  props: ['ID', 'title', 'desc', 'link'],
  data() {
    return {};
  },
  watch: {
    newItem() {
      console.log('asdasd');
    },
  },
};
</script>

<style scoped></style>

<!-- I wanted to keep all the resources here but I couldnt figure it out how to trigger an event to add new incoming resource to a list so I can use v-for -->
<!-- Lets watch the videos -->
