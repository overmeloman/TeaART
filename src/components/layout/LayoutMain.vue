<script setup lang="ts">
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
</script>

<template>
  <div class="w-[1160px] mx-auto">
    <Header />
    <slot></slot>
    <Footer />
  </div>
</template>

<style scoped></style>
