<script setup lang="ts">
import { RouterLink } from "vue-router";
import NavLink from "@/components/NavLink.vue";
</script>

<template>
  <header class="px-[5px] border-b">
    <div class="flex gap-[10px] justify-between items-center">
      <RouterLink to="/" class="text-[15px] font-[500] p-[5px] hover:bg-gray">
        TeaART
      </RouterLink>
      <nav class="flex gap-[10px] items-center">
        <NavLink name="About" link="/about" />
        <NavLink name="Cart" link="/cart" />
      </nav>
    </div>
  </header>
</template>

<style scoped></style>
