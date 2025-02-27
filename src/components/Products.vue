<script setup lang="ts">
import { reactive, ref, computed, inject, watch } from "vue";
import type { ProductProps } from "@/types/interfaces";
import ProductCard from "./ProductCard.vue";

const categoryID = defineModel();

const productsLink = computed(() => {
  if (categoryID.value > 0)
    return (
      "https://api.escuelajs.co/api/v1/products/?categoryId=" +
      categoryID.value +
      "&limit=20"
    );
  return "https://api.escuelajs.co/api/v1/products?offset=0&limit=20";
});

const productsData: Array<ProductProps> = reactive([]);
watch(
  productsLink,
  async (newLink) => {
    productsData.length = 0;
    fetch(newLink)
      .then((response) => response.json())
      .then((data) =>
        data.forEach((obj: ProductProps) =>
          productsData.push(Object.assign({}, obj))
        )
      );
  },
  { immediate: true }
);
</script>

<template>
  <div class="flex gap-[5px] pl-[15px] flex-wrap flex-[0_0_85%]">
    <ProductCard
      v-for="product in productsData"
      :title="product.title"
      :price="product.price"
      :id="product.id"
    >
    </ProductCard>
  </div>
</template>

<style scoped></style>
