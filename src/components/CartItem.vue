<script setup lang="ts">
import { ref } from "vue";
import type { ProductProps } from "@/types/interfaces";

const props = defineProps<ProductProps>();

const imageLoaded = ref(false);
const onImageLoad = () => (imageLoaded.value = true);
</script>

<template>
  <div class="flex items-center p-[10px] border border-black/30 gap-[15px]">
    <div class="h-full w-[60px]">
      <img
        v-if="props.images[0]"
        @load="onImageLoad"
        :src="props.images[0]"
        alt="productImage"
        class="object-cover opacity-0 transition-all duration-300 w-full h-full"
        :class="{ 'opacity-100': imageLoaded }"
      />
    </div>
    <div class="text-[14px] text-center font-[400] flex-[1_0_150px]">
      {{ props.title }}
    </div>
    <div class="text-[15px] text-center font-[500]">{{ props.price }} $</div>
  </div>
</template>

<style scoped></style>
