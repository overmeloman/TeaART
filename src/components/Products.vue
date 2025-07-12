<script setup lang="ts">
import { computed } from "vue";
import ProductCard from "@/components/ProductCard.vue";
import { getProductsQuery } from "@/queries/queriesTanStack";

const props = defineProps<{
  currentCategoryId: number;
  currentPage: number;
}>();

const productsQueryParams = computed(() => {
  return {
    categoryId: props.currentCategoryId,
    offset: (props.currentPage - 1) * 20,
    limit: 20,
  };
});
const { data: productsData } = getProductsQuery(productsQueryParams);
</script>

<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[5px] h-full"
  >
    <TransitionGroup name="products">
      <ProductCard
        v-for="product in productsData"
        v-bind="product"
        :key="product.id"
      />
    </TransitionGroup>
  </div>
</template>

<style scoped>
.products-enter-from {
  opacity: 0;
  transform: translateX(15px);
}
.products-enter-active {
  transition: all 0.5s ease;
}
</style>
