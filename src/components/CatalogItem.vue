<script setup lang="ts">
const props = defineProps({
  name: String,
})
</script>

<template>
	<a href="http://localhost:5173/" >
		{{ name }}
	</a>
</template>

<style scoped>

</style>