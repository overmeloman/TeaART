<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Catalog from './components/Catalog.vue'
import Products from './components/Products.vue'
import Footer from './components/Footer.vue'
</script>

<template>
	<div class="w-[1160px] mx-auto " >
		<Header />
		<div class="flex py-[12px] ">
			<Catalog />
			<Products />
		</div>
		<Footer />
	</div>
</template>

<style scoped>

</style>