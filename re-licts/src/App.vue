<template>
  <main-layout
    :page-title="currentPage"
    :top-title="topTitle"
    :top-subtitle="topSubtitle"
    :bg-image="bgImage"
  >
    <template #mainContent>
      <router-view />
    </template>
  </main-layout>
</template>

<script>
import MainLayout from "./layouts/MainLayout.vue";

export default {
  provide() {
    return {
      setCurrentPage: this.setCurrentPage,
    };
  },
  components: {
    MainLayout,
  },
  data() {
    return {
      currentPage: null,
      topTitle: null,
      topSubtitle: null,
      bgImage: "a.jpg",
    };
  },
  methods: {
    setCurrentPage(page, topT, subTT, bgImage) {
      this.currentPage = page;
      this.topTitle = topT;
      this.topSubtitle = subTT;
      this.bgImage = bgImage === undefined ? "a.jpg" : bgImage;
    },
  },
};
</script>

<style>
body {
  font-family: "Jersey 15", serif;
  height: calc(100vh - 1px);
  overflow: hidden;
  background-image: url(./assets/pics/main.png);
  background-blend-mode: overlay;
  background-color: rgba(0, 0, 0, 0.65);
  background-repeat: no-repeat;
  background-size: cover;
}

@media all and (max-width: 1200px) {
  body {
    height: auto;
  }
}
</style>
