<script setup lang="ts">
import { ref } from "vue";
import type { ProductProps } from "@/types/propsTypes";

const props = defineProps<ProductProps>();

const imageLoaded = ref(false);
const onImageLoad = () => (imageLoaded.value = true);
</script>

<template>
  <div
    class="flex items-center p-[10px] border-[2px] border-black/30 rounded-[5px] gap-[15px]"
  >
    <div class="h-full w-[60px]">
      <img
        v-if="props.images[0]"
        @load="onImageLoad"
        :src="props.images[0]"
        alt="productImage"
        class="object-cover opacity-0 transition-all duration-300 w-full h-full border border-black/70 rounded-[5px]"
        :class="{ 'opacity-100': imageLoaded }"
      />
    </div>
    <div class="text-14-400 text-center flex-[1_0_150px]">
      {{ props.title }}
    </div>
    <div class="text-15-500 text-center">{{ props.price }} $</div>
  </div>
</template>

<style scoped></style>
