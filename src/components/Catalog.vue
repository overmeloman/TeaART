<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { CategorieProps } from '@/types/interfaces';
import CatalogItem from './CatalogItem.vue'

const categoryID = defineModel()
function changeCategory(id: number) {
  categoryID.value = id
}

const categoriesData: Array<CategorieProps> = reactive([])
fetch('https://api.escuelajs.co/api/v1/categories?limit=5')
	.then(response => response.json())
	.then(data => data.forEach(
		(obj: CategorieProps) => categoriesData.push(Object.assign({}, obj))
	));

</script>

<template>
	<div class=" flex flex-col gap-[5px] pr-[15px] border-r flex-[0_0_15%]  ">
		<div>
			{{ categoryID }}
		</div>
		<CatalogItem
			@change-category="(id) => changeCategory(id)"

			v-for="category in categoriesData"
			:id="category.id"
			:name="category.name"
		>
		</CatalogItem>
	</div>
</template>

<style scoped>

</style>