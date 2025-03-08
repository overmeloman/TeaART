<script setup lang="ts">
import { ref, reactive, computed, watch } from "vue";
import ProductCard from "@/components/ProductCard.vue";
import type { ProductProps } from "@/types/interfaces";
import { getProducts } from "@/queries/queries";

const props = defineProps<{
  currentCategoryId: number;
  currentPage: number;
}>();

const productsData: Array<ProductProps> = reactive([]);

watch(
  () => props.currentCategoryId,
  async (newCategoryId) => {
    productsData.length = 0;
    getProducts(0, 20, newCategoryId).then((data: Array<ProductProps>) =>
      data.forEach((obj: ProductProps) => productsData.push(obj))
    );
  },
  { immediate: true }
);

watch(
  () => props.currentPage,
  async (newPageId) => {
    productsData.length = 0;
    getProducts((newPageId - 1) * 20, 20, props.currentCategoryId).then(
      (data: Array<ProductProps>) =>
        data.forEach((obj: ProductProps) => productsData.push(obj))
    );
  }
);
</script>

<template>
  <div class="grid grid-cols-4 gap-[5px]">
    <ProductCard
      v-for="product in productsData"
      :key="product.id"
      :title="product.title"
      :price="product.price"
      :id="product.id"
      :images="product.images"
    >
    </ProductCard>
  </div>
</template>

<style scoped></style>
