import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "",
    component: "",
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
