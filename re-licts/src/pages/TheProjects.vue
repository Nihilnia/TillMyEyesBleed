<template>
  <h2>Projects page</h2>
  <section>
    <h2>Here is some of my projects</h2>
  </section>
  <section id="container-main">
    <parallax-card
      title="Password Generator"
      description="percase and lowercase letters, numbers, and symbols."
      bgImage="spotify.svg"
    ></parallax-card>
    <parallax-card
      title="Spotify Api Project"
      description="percase and lowercase letters, numbers, and symbols."
      bgImage="spotify.svg"
    ></parallax-card>
    <parallax-card
      title="Todo App"
      description="percase and lowercase letters, numbers, and symbols."
      bgImage="spotify.svg"
    ></parallax-card>
    <parallax-card
      title="Mouse Tester"
      description="percase and lowercase letters, numbers, and symbols."
      bgImage="spotify.svg"
    ></parallax-card>
    <parallax-card
      title="Event Key Codes"
      description="percase and lowercase letters, numbers, and symbols."
      bgImage="spotify.svg"
    ></parallax-card>
  </section>
</template>

<script>
import ParallaxCard from "@/components/UI/ParallaxCard.vue";

export default {
  inject: ["setCurrentPage"],
  components: { ParallaxCard },
  mounted() {
    this.setCurrentPage(
      "Projects",
      "Project",
      "Here is the showcase of my projects"
    );
  },
};
</script>

<style scoped>
#container-main {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}
</style>
