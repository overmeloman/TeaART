<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <!-- TODO: add layout with header footer and <slot/> inside -->
  <div class="w-[1160px] mx-auto">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped></style>
