<script setup lang="ts">
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
</script>

<template>
  <div class="max-w-[1160px] w-full mx-auto min-h-[100vh] flex flex-col">
    <Header />
    <main class="h-full flex-grow">
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>

<style scoped></style>
