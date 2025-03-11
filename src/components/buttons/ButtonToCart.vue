<script setup lang="ts">
const props = defineProps<{
  id: number;
}>();
</script>

<template>
  <button
    type="button"
    class="bg-green hover:bg-darkgreen rounded-[5px] text-15-400 text-center text-white py-[10px] px-[15px] w-[100%] cursor-pointer"
  >
    To cart
  </button>
</template>

<style scoped></style>
