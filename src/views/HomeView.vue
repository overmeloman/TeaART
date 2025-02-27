<script setup lang="ts">
import { ref, provide } from 'vue'
import Catalog from '../components/Catalog.vue'
import Products from '../components/Products.vue'

const categoryID = ref(0);

</script>

<template>
		<div class="flex py-[12px] ">
			<Catalog v-model="categoryID"/>
			<Products v-model="categoryID"/>
		</div>
</template>

<style scoped>

</style>