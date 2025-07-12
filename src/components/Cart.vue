<script setup lang="ts">
import { ref, computed } from "vue";
import CartItem from "@/components/CartItem.vue";
import CartOrder from "@/components/CartOrder.vue";
import { getProductsQuery } from "@/queries/queriesTanStack";

const { data: productsData } = getProductsQuery(
  ref({ categoryId: 0, offset: 0, limit: 5 })
);

const totalSum = computed(() => {
  if (productsData.value != undefined)
    return productsData.value.reduce((sum, product) => sum + product.price, 0);
  return 0;
});
</script>

<template>
  <div class="py-[15px] max-lg:px-[20px] flex flex-col lg:flex-row">
    <div
      class="flex flex-col gap-[5px] max-lg:pb-[15px] lg:pr-[15px] flex-[2_0] max-lg:border-b-[2px] lg:border-r-[2px]"
    >
      <CartItem
        v-for="product in productsData"
        v-bind="product"
        :key="product.id"
      />
    </div>
    <CartOrder
      v-if="productsData != undefined"
      :products-number="productsData.length"
      :total-sum="totalSum"
    />
  </div>
</template>

<style scoped></style>
