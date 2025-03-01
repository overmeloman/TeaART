<script setup lang="ts">
const props = defineProps<{
  id: number;
}>();
</script>

<template>
  <button
    type="button"
    class="bg-green hover:bg-darkgreen rounded-[5px] text-white text-[15px] text-center font-[400] py-[10px] px-[15px] w-[100%] cursor-pointer"
  >
    <span class="text-[12px]">id{{ props.id }}</span>
    To cart
  </button>
</template>

<style scoped></style>
