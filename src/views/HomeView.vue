<script setup lang="ts">
import Catalog from "@/components/Catalog.vue";
import Products from "@/components/Products.vue";
</script>

<template>
  <div>
    <Catalog v-slot="{ currentCategoryId }">
      <Products :currentCategoryId="currentCategoryId" />
    </Catalog>
  </div>
</template>

<style scoped></style>
