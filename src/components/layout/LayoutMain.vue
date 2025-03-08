<script setup lang="ts">
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
</script>

<template>
  <!-- Max-width(flexible) -->
  <div class="w-[1160px] mx-auto">
    <Header />
    <!-- checkme -->
    <!-- dynamic height, min-height = viewport-header-footer -->
    <div class="min-h-[calc(100vh-110px)]">
      <slot></slot>
    </div>
    <Footer />
  </div>
</template>

<style scoped></style>
