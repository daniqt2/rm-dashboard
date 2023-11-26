// Vuetify
import "./mainStyles.scss";
import "./style.css";
import "@mdi/font/css/materialdesignicons.css";

import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import App from "./App.vue";
import { createApp } from "vue";
import { createVuetify } from "vuetify";
import router from "./router/router";

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(vuetify).use(router).mount("#app");
