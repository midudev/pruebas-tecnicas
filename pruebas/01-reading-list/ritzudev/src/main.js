import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);

// Habilitar Vue Devtools en producción
app.config.devtools = true;

app.mount("#app");
