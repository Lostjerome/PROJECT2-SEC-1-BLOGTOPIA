import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Blog from "../views/Blog.vue";
import OurTeam from "../views/OurTeam.vue";
import Topic from "../views/Topic.vue";
import Search from "../views/Search.vue";
import Write from "../views/Write.vue";
import NotFound from "../views/NotFound.vue";
export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/blog/:id",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/our-team",
    name: "Meet our team",
    component: OurTeam,
  },
  {
    path: "/topic/:id",
    name: "Topic",
    component: Topic,
  },
  {
    path: "/search/:searchTerm",
    name: "Search",
    component: Search,
  },
  {
    path: "/write/:id?",
    name: "Writing a blog",
    component: Write,
  },

  {
    path: "/:catchAll(.*)",
    name: "404",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
