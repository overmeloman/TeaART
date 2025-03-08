<script setup lang="ts">
import Catalog from "@/components/Catalog.vue";
import Products from "@/components/Products.vue";
</script>

<template>
  <Catalog v-slot="{ currentCategoryId, currentPage }">
    <Products
      :currentCategoryId="currentCategoryId"
      :currentPage="currentPage"
    />
  </Catalog>
</template>

<style scoped></style>
