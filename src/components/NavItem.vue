<script setup lang="ts">
import { RouterLink } from "vue-router";
//TODO: always add props as constant
// const props = defineProps<{
// 		.....
// }>
// because it's show you, where props are and where some computed constants

defineProps<{
  name: String;
  //TODO: never use any, string or something better then any. because you loose all featuches of ts
  link: any;
}>();

//TODO: look unplugin-vue-router it's types routes
</script>

<template>
  <RouterLink :to="link">
    <!-- TODO: props.name -->
    {{ name }}
  </RouterLink>
</template>

<style scoped></style>
