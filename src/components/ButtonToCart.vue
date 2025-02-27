<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    id?: number;
  }>(),
  {
    id: 0,
  }
);
</script>

<template>
  <!-- TODO: props.id -->
  <!-- TODO: add type button type="button" to buttons -->
  <button
    class="bg-green hover:bg-darkgreen rounded-[5px] text-white text-[15px] text-center font-[400] py-[10px] px-[15px] w-[100%] cursor-pointer"
  >
    <span class="text-[12px]">id{{ id }}</span>
    To cart
  </button>
</template>

<style scoped></style>
