<script setup lang="ts">
import { RouterLink } from "vue-router";

const props = defineProps<{
  name: string;
  link: string;
}>();
</script>

<template>
  <RouterLink :to="link" class="text-[15px] font-[500]">
    {{ props.name }}
  </RouterLink>
</template>

<style scoped></style>
