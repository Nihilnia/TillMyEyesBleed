<template>
  <base-card>
    <base-button
      @click="setSelectedTab('stored-resources')"
      :mode="compStoredBtnMode"
      >Resources</base-button
    >
    <base-button @click="setSelectedTab('add-resource')" :mode="compNewBtnMode"
      >New Resource</base-button
    >
    <keep-alive>
      <component :is="selectedTab"></component>
    </keep-alive>
  </base-card>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    StoredResources,
    AddResource,
  },
  provide() {
    return {
      resources: this.storedResources,
      addNewResource: this.addNewResource,
      removeResource: this.removeResource,
    };
  },
  inject: ['resID'],
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official VueJS website',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to use google',
          link: 'https://google.com',
        },
      ],
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addNewResource(title, description, link) {
      const newRes = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: link,
      };

      this.storedResources.unshift(newRes);
      this.selectedTab = 'stored-resources';
    },
    removeResource(resID) {
      let resIndex = this.storedResources.findIndex((res) => res.id === resID);
      this.storedResources.splice(resIndex, 1);
    },
  },
  computed: {
    compStoredBtnMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    compNewBtnMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
};
</script>
