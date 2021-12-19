import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import AppInput from "@/components/UI/AppInput.vue";
import AppButton from "@/components/UI/AppButton.vue";

const app = createApp(App);
app
  .component("AppInput", AppInput)
  .component("AppButton", AppButton)
  .use(store)
  .use(router)
  .mount("#app");
