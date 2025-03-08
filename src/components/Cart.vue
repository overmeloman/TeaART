<script setup lang="ts">
import { reactive } from "vue";
import CartItem from "@/components/CartItem.vue";
import type { ProductProps } from "@/types/interfaces";
import { getProducts } from "@/queries/queries";

const productsData: Array<ProductProps> = reactive([]);

getProducts(0, 5, 0).then((data: Array<ProductProps>) =>
  data.forEach((obj: ProductProps) => productsData.push(obj))
);
</script>

<template>
  <div class="py-[15px] flex">
    <div class="flex flex-col gap-[5px] pr-[15px] flex-[0_0_70%] border-r">
      <CartItem
        v-for="product in productsData"
        :key="product.id"
        :title="product.title"
        :price="product.price"
        :id="product.id"
        :images="product.images"
      >
      </CartItem>
    </div>
  </div>
</template>

<style scoped></style>
