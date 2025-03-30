<script setup lang="ts">
<<<<<<< HEAD
import { reactive } from "vue";
=======
import { ref, reactive, computed } from "vue";
>>>>>>> review-2
import CartItem from "@/components/CartItem.vue";
import CartOrder from "@/components/CartOrder.vue";
import type { ProductProps } from "@/types/interfaces";
import { getProducts } from "@/queries/queries";

const productsData: ProductProps[] = reactive([]);

getProducts({ offset: 0, limit: 5, categoryId: 0 }).then((data) =>
  data.forEach((obj) => productsData.push(obj))
);

const totalSum = computed(() => {
  return productsData.reduce((sum, product) => sum + product.price, 0);
});
</script>

<template>
  <div class="py-[15px] flex">
    <div class="flex flex-col gap-[5px] pr-[15px] flex-[2_0] border-r">
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
<<<<<<< HEAD
=======
    <CartOrder :products-number="productsData.length" :total-sum="totalSum" />
>>>>>>> review-2
  </div>
</template>

<style scoped></style>
