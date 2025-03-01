<script setup lang="ts">
import { reactive, computed, watch } from "vue";
import ProductCard from "@/components/ProductCard.vue";
import type { ProductProps } from "@/types/interfaces";
import { getProducts } from "@/queries/queries";

const props = defineProps<{
  currentCategoryId: number;
}>();

const productsData: Array<ProductProps> = reactive([]);

watch(
  () => props.currentCategoryId,
  async (newId) => {
    productsData.length = 0;
    getProducts(0, 20, newId).then((data: Array<ProductProps>) =>
      data.forEach((obj: ProductProps) => productsData.push(obj))
    );
  },
  { immediate: true }
);
</script>

<template>
  <div class="grid grid-cols-4 gap-[5px] px-[15px] flex-[0_0_85%]">
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
