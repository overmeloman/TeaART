import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import CartView from "@/views/CartView.vue";
import ProductView from "@/views/ProductView.vue";
import ProfileView from "@/views/ProfileView.vue";

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
      component: AboutView,
    },
    {
      path: "/cart",
      name: "cart",
      component: CartView,
    },
    {
      path: "/products/:id",
      name: "products",
      component: ProductView,
      props: true,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
      props: true,
    },
  ],
});

export default router;
