<script setup lang="ts">
import { ref, reactive, computed, watch } from "vue";
import ProductCard from "@/components/ProductCard.vue";
import type { ProductProps } from "@/types/interfaces";
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
