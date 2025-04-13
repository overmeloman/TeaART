<script setup lang="ts">
//TODO: ButtonHTMLAttributes (type)
const props = defineProps<{
  id: number;
  title: string;
  type: "submit" | "reset" | "button";
}>();
</script>

<template>
  <button :type="props.type">
    {{ props.title }}
  </button>
</template>

<style scoped></style>
