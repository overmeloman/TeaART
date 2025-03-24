<script setup lang="ts">
import { ref, reactive, computed, watch } from "vue";
import type { ProductProps } from "@/types/interfaces";
import { getProduct } from "@/queries/queries";

const props = defineProps<{
  id: number;
}>();

// let productData: ProductProps;
const productsData: ProductProps[] = reactive([]);
getProduct({
  productId: props.id,
}).then((data) => productsData.push(data));
</script>

<template>
  <div class="py-[15px]">product: {{ props.id }}</div>
  <div class="text-25-700 py-[15px]">{{ productsData[0].title }}</div>
</template>

<style scoped></style>
