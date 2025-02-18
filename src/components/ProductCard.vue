<script setup lang="ts">
interface Props {
	title?: string,
	price?: number,
	image?: string,
}
const props = withDefaults(defineProps<Props>(), {
  title: 'defaultTitle',
  price: -1,
	image: "../images/TeaDefault.jpg",
})
</script>

<template>
	<div class=" flex flex-col items-center p-[10px] flex-[0_0_24%] border ">
		<img src="../images/TeaDefault.jpg" alt="(image)">
		<a>
			{{ title }}
		</a>
		<div>
			{{ price }}
		</div>
		<button>
			to cart
		</button>
	</div>
</template>

<style scoped>

</style>
