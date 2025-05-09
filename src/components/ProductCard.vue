<script setup lang="ts">
import { ref } from "vue";
import type { ProductProps } from "@/types/propsTypes";
import Button from "@/components/base/Button.vue";
import { RouterLink } from "vue-router";

const props = defineProps<ProductProps>();

// todo
// add image component
const imageLoaded = ref(false);
const onImageLoad = () => (imageLoaded.value = true);
</script>

<template>
  <div
    class="flex flex-col items-center p-[10px] border-[2px] border-black/30 rounded-[5px] gap-[10px] h-min"
  >
    <div class="w-full h-[200px] border-[2px] border-black/70 rounded-[5px]">
      <img
        @load="onImageLoad"
        :src="props.images[0] || '@/images/imgPlaceHolder.jpg'"
        alt="productImage"
        class="object-cover opacity-100 transition-all duration-300 w-full h-full rounded-[2px]"
        :class="{ 'opacity-100': imageLoaded }"
      />
    </div>
    <!-- todo попробовать сделать alt = имя категории -->
    <div class="min-h-[73px]">
      <RouterLink
        :to="{ path: '/products/' + props.id }"
        class="text-14-400 text-center box-content w-full py-[5px]"
      >
        {{ props.title }}
      </RouterLink>
    </div>

    <div class="text-15-500 text-center">{{ props.price }} $</div>

    <Button
      :title="'To Cart'"
      :type="'button'"
      class="bg-green hover:bg-darkgreen rounded-[5px] text-15-400 text-center text-white py-[10px] px-[15px] w-[100%] cursor-pointer"
    />
  </div>
</template>

<style scoped></style>
