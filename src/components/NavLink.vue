<script setup lang="ts">
import { RouterLink } from "vue-router";

const props = defineProps<{
  name: string;
  link: string;
}>();
</script>

<template>
  <RouterLink :to="link">
    {{ props.name }}
  </RouterLink>
</template>

<style scoped></style>
