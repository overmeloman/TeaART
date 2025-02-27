<script setup lang="ts">
import { reactive, ref } from "vue";
import type { ProductProps } from "@/types/interfaces";
import CartItem from "./CartItem.vue";

const productsData: Array<ProductProps> = reactive([]);

fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=5")
  .then((response) => response.json())
  .then((data) =>
    data.forEach((obj: ProductProps) =>
      productsData.push(Object.assign({}, obj))
    )
  );

// const AddedToCartIDs: Array<number> = reactive([17, 18, 19, 20]);
// // синхронность?????
// AddedToCartIDs.forEach((id: number) => {
// 	fetch('https://api.escuelajs.co/api/v1/products/' + id)
// 		.then(response => response.json())
// 		.then((data: ProductProps) => productsData.push(Object.assign({}, data))
// 	);
// });
</script>

<template>
  <div class="flex flex-col gap-[5px] px-[15px] flex-[0_0_70%] border-r">
    <CartItem
      v-for="product in productsData"
      :title="product.title"
      :price="product.price"
      :id="product.id"
    >
    </CartItem>
  </div>
</template>

<style scoped></style>
