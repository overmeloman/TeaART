<script setup lang="ts">
import { reactive, ref } from 'vue'
import ProductCard from './ProductCard.vue'

let product1 = reactive({});
fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=2')
	.then(response => response.json())
	.then(data => Object.assign(product1, data[0]));

let product2 = reactive({});
fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=2')
	.then(response => response.json())
	.then(data => Object.assign(product2, data[1]));

let productsData = ref([
	{
		"id": 1,
		"title": "Majestic Mountain Graphic T-Shirt",
		"price": 44,
		"description": "Elevate your wardrobe with this stylish black t-shirt featuring a striking monochrome mountain range graphic. Perfect for those who love the outdoors or want to add a touch of nature-inspired design to their look, this tee is crafted from soft, breathable fabric ensuring all-day comfort. Ideal for casual outings or as a unique gift, this t-shirt is a versatile addition to any collection.",
		"images": [
			"https://i.imgur.com/QkIa5tT.jpeg",
			"https://i.imgur.com/jb5Yu0h.jpeg",
			"https://i.imgur.com/UlxxXyG.jpeg"
		],
		"creationAt": "2025-02-17T14:28:44.000Z",
		"updatedAt": "2025-02-17T14:28:44.000Z",
		"category": {
			"id": 1,
			"name": "Clothes",
			"image": "https://i.imgur.com/QkIa5tT.jpeg",
			"creationAt": "2025-02-17T14:28:44.000Z",
			"updatedAt": "2025-02-17T14:28:44.000Z"
		}
	},
	{
		"id": 2,
		"title": "Classic Red Pullover Hoodie",
		"price": 10,
		"description": "Elevate your casual wardrobe with our Classic Red Pullover Hoodie. Crafted with a soft cotton blend for ultimate comfort, this vibrant red hoodie features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs for a snug fit. The timeless design ensures easy pairing with jeans or joggers for a relaxed yet stylish look, making it a versatile addition to your everyday attire.",
		"images": [
			"https://i.imgur.com/1twoaDy.jpeg",
			"https://i.imgur.com/FDwQgLy.jpeg",
			"https://i.imgur.com/kg1ZhhH.jpeg"
		],
		"creationAt": "2025-02-17T14:28:44.000Z",
		"updatedAt": "2025-02-17T14:28:44.000Z",
		"category": {
			"id": 1,
			"name": "Clothes",
			"image": "https://i.imgur.com/QkIa5tT.jpeg",
			"creationAt": "2025-02-17T14:28:44.000Z",
			"updatedAt": "2025-02-17T14:28:44.000Z"
		}
	},
]);

// fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=20')
// 	.then(response => response.json())
// 	.then(data => productsData = data);
// alert(productsData[0].title);

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