import { createApp } from "vue";

import App from "./App.vue";
import FriendContact from "./components/FriendContact.vue";
import ContactForm from "./components/ContactForm.vue";

const app = createApp(App);

app.component("friend-contact", FriendContact);
app.component("contact-form", ContactForm);

app.mount("#app");
