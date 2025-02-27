<script setup lang="ts">
import type { CategorieProps } from "@/types/interfaces";

const props = withDefaults(defineProps<CategorieProps>(), {
  id: 0,
  name: "defaultName",
});
</script>

<template>
  <button
    @click="$emit('changeCategory', id)"
    class="py-[5px] px-[10px] text-green hover:bg-lightgray text-left text-[15px] font-[400] cursor-pointer"
  >
    <span class="text-[12px]">id{{ id }}</span>
    {{ name }}
  </button>
</template>

<style scoped></style>
