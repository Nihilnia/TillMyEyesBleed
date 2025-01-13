<template>
  <section>
    <header><h2>RememberMe</h2></header>
    <card-template>
      <button @click="selectedOption('stored')">Stored</button>
      <button @click="selectedOption('new')">Add</button>
    </card-template>
    <card-template>
      <!-- I wanted to make with component but Idk how to send props with conditions -->
      <stored-resources
        v-for="item in allItems"
        :key="item.ID"
        :ID="item.ID"
        :title="item.title"
        :desc="item.desc"
        :link="item.link"
      ></stored-resources>
      <keep-alive>
        <new-resource
          v-if="userChoice == 'new-resource'"
          @emit-new-res="getNewRes"
        ></new-resource>
      </keep-alive>
    </card-template>
  </section>
</template>

<script>
import StoredResources from './components/StoredResources.vue';
import NewResource from './components/NewResource.vue';

import CardTemplate from './templates/CardTemplate.vue';

export default {
  components: {
    StoredResources,
    NewResource,
    CardTemplate,
  },
  data() {
    return {
      userChoice: 'stored-resources',
      allItems: [],
    };
  },
  methods: {
    selectedOption(arg) {
      arg === 'stored'
        ? (this.userChoice = 'stored-resources')
        : (this.userChoice = 'new-resource');
    },
    getNewRes(resID, resTitle, resDesc, reslink) {
      this.allItems.unshift({
        ID: resID,
        title: resTitle,
        desc: resDesc,
        link: reslink,
      });
      console.log('App got the new res details');
    },
  },
};
</script>

<style scoped>
header {
  background-color: #600b2c;
  color: #fff;
  text-align: center;
  padding: 10px;
}
</style>
