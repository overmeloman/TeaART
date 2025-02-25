<script setup lang="ts">
const props = withDefaults(defineProps<{
	id?: number,
}>(), {
	id: 0,
})
</script>

<template>
	<button class=" bg-green hover:bg-darkgreen rounded-[5px] text-white text-[15px] text-center font-[400] py-[10px] px-[15px] w-[100%] cursor-pointer ">
		To cart (id{{ id }})
	</button>
</template>

<style scoped>

</style>
