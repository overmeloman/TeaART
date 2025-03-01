<script setup lang="ts">
import { RouterLink } from "vue-router";
import NavLink from "@/components/NavLink.vue";
</script>

<template>
  <header class="py-[12px] px-[5px] border-b">
    <div class="flex gap-[10px] justify-between">
      <RouterLink to="/" class="  "> TeaART </RouterLink>
      <nav class="flex gap-[10px]">
        <NavLink name="About" link="/about" />
        <NavLink name="Cart" link="/cart" />
      </nav>
    </div>
  </header>
</template>

<style scoped></style>
