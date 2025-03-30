<script setup lang="ts">
import { RouterLink } from "vue-router";
import NavLink from "@/components/base/NavLink.vue";
</script>

<template>
  <header class="px-[5px] border-b">
    <div class="flex gap-[10px] justify-between items-center">
      <RouterLink to="/" class="text-15-500 p-[5px] hover:bg-gray">
        TeaART
      </RouterLink>
      <nav class="flex gap-[10px] items-center">
        <NavLink name="About" link="/about" />
        <NavLink name="Cart" link="/cart" />
        <NavLink name="Profile" link="/profile" />
      </nav>
    </div>
  </header>
</template>

<style scoped></style>
