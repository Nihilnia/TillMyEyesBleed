import { createApp } from 'vue';

import App from './App.vue';

import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';

const daApp = createApp(App);

daApp.component('base-card', BaseCard);
daApp.component('base-button', BaseButton);

daApp.mount('#app');
