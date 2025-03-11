<script setup lang="ts">
const props = defineProps<{
  id: number;
  title: string;
  type: "submit" | "reset" | "button";
  styles?: string;
}>();
</script>

<template>
  <button :type="props.type" :class="props.styles">
    {{ props.title }}
  </button>
</template>

<style scoped></style>
