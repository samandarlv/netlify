import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import icon from "./assets/icon/icon.vue";

createApp(App).component("icon", icon).use(store).use(router).mount("#app");
