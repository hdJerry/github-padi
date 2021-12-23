import { createApp } from "vue";
import App from "./App.vue";
// import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import AppInput from "@/components/UI/AppInput.vue";
import AppButton from "@/components/UI/AppButton.vue";
import Loader from "@/components/Loader.vue";

const app = createApp(App);
app
  .component("AppInput", AppInput)
  .component("AppButton", AppButton)
  .component("Loader", Loader)
  .use(store)
  .use(router)
  .mount("#app");
