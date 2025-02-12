<script setup lang="ts">
import { RouterLink } from 'vue-router'
const props = defineProps({
  name: String,
	link: String,
})
</script>

<template>
	<RouterLink :to=link>
		{{ name }}
	</RouterLink>
</template>

<style scoped>

</style>