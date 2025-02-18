<script setup lang="ts">
defineProps<{
  name: String,
}>()
</script>

<template>
	<a href="http://localhost:5173/" >
		{{ name }}
	</a>
</template>

<style scoped>

</style>