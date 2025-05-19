<script setup lang="ts">
import { ref, reactive, computed, watch } from "vue";
import ProductCard from "@/components/ProductCard.vue";
import type { ProductProps } from "@/types/propsTypes";
import { getProducts } from "@/queries/queries";

const props = defineProps<{
  currentCategoryId: number;
  currentPage: number;
}>();

const productsData: ProductProps[] = reactive([]);

watch(
  () => props.currentCategoryId,
  async (newCategoryId) => {
    productsData.length = 0;
    getProducts({ offset: 0, limit: 20, categoryId: newCategoryId }).then(
      (data) => data.forEach((obj) => productsData.push(obj))
    );
  },
  { immediate: true }
);

watch(
  () => props.currentPage,
  async (newPageId) => {
    productsData.length = 0;
    getProducts({
      offset: (newPageId - 1) * 20,
      limit: 20,
      categoryId: props.currentCategoryId,
    }).then((data) => data.forEach((obj) => productsData.push(obj)));
  }
);
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
