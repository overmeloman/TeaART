<script setup lang="ts">
import { RouterLink } from "vue-router";

const props = defineProps<{
  name: string;
  link: string;
}>();
</script>

<template>
  <RouterLink :to="props.link" class="text-15-500 p-[5px] hover:bg-gray">
    {{ props.name }}
  </RouterLink>
</template>

<style scoped></style>
