<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { Props } from '@/types/interfaces';
import ProductCard from './ProductCard.vue'

const productsData: Array<Props> = reactive([])
fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=20')
	.then(response => response.json())
	.then(data => data.forEach(
		(obj: Props) => productsData.push(Object.assign({}, obj))
	));

</script>

<template>
	<div class=" flex gap-[5px] px-[15px] flex-wrap flex-[0_0_85%] ">
		<ProductCard
			v-for="product in productsData"
			:title="product.title"
			:price="product.price"
			>
		</ProductCard>
	</div>
</template>

<style scoped>

</style>