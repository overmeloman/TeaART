<script setup lang="ts">
//TODO: can add this links right in header
import NavItem from "./NavItem.vue";
</script>

<template>
  <nav class="flex gap-[10px]">
    <NavItem name="About" link="/about" />

    <NavItem name="Cart" link="/cart" />
  </nav>
</template>

<style scoped></style>
