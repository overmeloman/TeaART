<script setup lang="ts">
import { RouterLink } from 'vue-router'
defineProps<{
  name: String,
	link: any,
}>()
</script>

<template>
	<RouterLink :to=link>
		{{ name }}
	</RouterLink>
</template>

<style scoped>

</style>