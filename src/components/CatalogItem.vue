<script setup lang="ts">
import type { CategoryProps } from "@/types/interfaces";

const emit = defineEmits<{
  changeCategory: [id: number];
}>();
const props = defineProps<CategoryProps>();
</script>

<template>
  <button
    @click="emit('changeCategory', id)"
    class="py-[5px] px-[10px] text-green hover:bg-lightgray text-left text-[15px] font-[400] cursor-pointer"
  >
    <span class="text-[12px]">id{{ props.id }}</span>
    {{ props.name }}
  </button>
</template>

<style scoped></style>
