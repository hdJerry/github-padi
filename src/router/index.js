import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import { requiresData } from "./utils";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/result",
    name: "Result Page",
    beforeEnter:
      requiresData /** Can't get into this route without searched data */,
    component: () => import("../views/ResultPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
