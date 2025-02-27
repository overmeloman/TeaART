import { createRouter, createWebHistory } from "vue-router";
// TODO: add absolute path like: import AboutView from '@/views/AboutView.vue'
//TODO: import all components like HomeView, it's a good practice
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("../views/CartView.vue"),
    },
  ],
});

export default router;
