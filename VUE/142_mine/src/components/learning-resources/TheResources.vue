<template>
  <the-header :title="compPageTitle">
    <template> </template>
  </the-header>
  <base-card>
    <base-button @click="handleSelectedTab('stored-resources')">
      <template #default> All Resources </template></base-button
    >
    <base-button @click="handleSelectedTab('add-resource')">
      <template #default> Add Resource </template></base-button
    >
  </base-card>
  <div>
    <component :is="selectedTab"></component>
  </div>
</template>

<script>
import StoredResources from "./StoredResources.vue";
import AddResource from "./AddResource.vue";
import TheHeader from "../layouts/TheHeader.vue";

export default {
  components: {
    StoredResources,
    AddResource,
    TheHeader,
  },
  provide() {
    return {
      handleNewRes: this.handleNewRes,
      allResources: this.allResources,
      handleSelectedTab: this.handleSelectedTab,
    };
  },
  data() {
    return {
      selectedTab: "stored-resources",
      allResources: [],
    };
  },
  methods: {
    handleSelectedTab(tab) {
      this.selectedTab =
        tab === "stored-resources" ? "stored-resources" : "add-resource";
    },
    handleNewRes(rTitle, rDesc, rLink) {
      this.allResources.unshift({
        id: new Date().toISOString(),
        title: rTitle,
        description: rDesc,
        link: rLink,
      });

      console.log("New res added.");
    },
  },
  computed: {
    compPageTitle() {
      return this.selectedTab === "stored-resources"
        ? "All Resources"
        : "Add New Resource";
    },
  },
};
</script>
