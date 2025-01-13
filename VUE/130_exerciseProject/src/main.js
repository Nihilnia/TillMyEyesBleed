import { createApp } from 'vue';

import App from './App.vue';

import BaseCard from './components/UI/BaseCard.vue';

const daApp = createApp(App);

daApp.component('base-card', BaseCard);

daApp.mount('#app');
