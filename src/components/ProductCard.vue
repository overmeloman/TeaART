<script setup lang="ts">
import { ref } from "vue";
import type { ProductProps } from "@/types/interfaces";
import ButtonToCart from "@/components/buttons/ButtonToCart.vue";

const props = defineProps<ProductProps>();

const imageLoaded = ref(false);
const onImageLoad = () => (imageLoaded.value = true);
</script>

<template>
  <div
    class="flex flex-col items-center p-[10px] border border-black/30 rounded-[5px] gap-[10px] h-min"
  >
    <div class="w-full h-[200px]">
      <img
        v-if="props.images[0]"
        @load="onImageLoad"
        :src="props.images[0]"
        alt="productImage"
        class="object-cover opacity-0 transition-all duration-300 w-full h-full border border-black/70 rounded-[5px]"
        :class="{ 'opacity-100': imageLoaded }"
      />
    </div>
    <div class="text-14-400 text-center min-h-[63px] box-content w-full">
      {{ props.title }}
    </div>
    <div class="text-15-500 text-center">{{ props.price }} $</div>

    <ButtonToCart :id="id" />
  </div>
</template>

<style scoped></style>
