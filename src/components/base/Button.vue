<script setup lang="ts">
// import type { ButtonHTMLAttributes } from "vue";
// interface IButton extends /* @vue-ignore */ ButtonHTMLAttributes {

const props = defineProps<{
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
