<script setup lang="ts">
import { ref, reactive, watch } from "vue";
import Button from "@/components/base/Button.vue";

const props = defineProps<{
  pagesNumber: number;
  currentPage: number;
}>();

const emits = defineEmits<{
  changePage: [newPage: number];
  // (e: "changePage", newPage: number): void;
}>();
</script>

<template>
  <div v-if="props.pagesNumber > 1" class="flex gap-[5px] justify-center">
    <Button
      v-if="props.currentPage != 1"
      :title="'<-'"
      :type="'button'"
      @click="emits('changePage', props.currentPage - 1)"
      class="hover:bg-gray text-15-400 text-center py-[5px] px-[15px] cursor-pointer border-[2px] border-black/70 rounded-[5px]"
    />
    <Button
      v-for="pageId in props.pagesNumber"
      :key="pageId"
      :title="`${pageId}`"
      :type="'button'"
      @click="emits('changePage', pageId)"
      class="hover:bg-gray text-15-400 text-center py-[5px] px-[15px] cursor-pointer border-[2px] border-black/70 rounded-[5px]"
      :class="{ 'bg-lightgray': pageId == props.currentPage }"
    />
    <Button
      v-if="props.currentPage != props.pagesNumber"
      :title="'->'"
      :type="'button'"
      @click="emits('changePage', props.currentPage + 1)"
      class="hover:bg-gray text-15-400 text-center py-[5px] px-[15px] cursor-pointer border-[2px] border-black/70 rounded-[5px]"
    />
  </div>
</template>

<style scoped></style>
