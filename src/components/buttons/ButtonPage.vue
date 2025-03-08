<script setup lang="ts">
const props = defineProps<{
  pageId: number;
}>();

const emits = defineEmits<{
  changePage: [id: number];
}>();
</script>

<template>
  <button
    type="button"
    @click="emits('changePage', props.pageId)"
    class="hover:bg-gray text-[15px] text-center font-[400] py-[5px] px-[15px] cursor-pointer border border-black/70 rounded-[5px]"
  >
    {{ props.pageId }}
  </button>
</template>

<style scoped></style>
