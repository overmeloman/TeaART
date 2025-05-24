<script setup lang="ts">
import { ref } from "vue";
import Image from "@/components/base/Image.vue";
import type { ProductProps } from "@/types/propsTypes";

const props = defineProps<ProductProps>();
</script>

<template>
  <div
    class="flex items-center justify-between p-[10px] border-[2px] border-black/30 rounded-[5px] gap-[15px]"
  >
    <div class="h-[60px] w-[60px] border-[2px] border-black/70 rounded-[5px]">
      <Image :src="props.images[0]" :alt="props.category.name" />
    </div>
    <div class="text-14-400 text-center">
      {{ props.title }}
    </div>
    <div class="text-15-500 text-center">{{ props.price }} $</div>
  </div>
</template>

<style scoped></style>
