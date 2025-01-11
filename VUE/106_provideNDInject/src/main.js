import { createApp } from "vue";
import App from "./App.vue";
import "@/style/global.css";

import ActiveElement from "./components/ActiveElement.vue";
import ElementBase from "./components/ElementBase.vue";
import NewElement from "./components/NewElement.vue";

const app = createApp(App);

app.component("active-element", ActiveElement);
app.component("element-base", ElementBase);
app.component("new-element", NewElement);

app.mount("#app");
