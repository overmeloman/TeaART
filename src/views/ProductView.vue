<script setup lang="ts">
import { ref, reactive, computed, watch } from "vue";
import type { ProductProps } from "@/types/propsTypes";
import { getProduct } from "@/queries/queries";
import Button from "@/components/base/Button.vue";

const props = defineProps<{
  id: number;
}>();

const productsData = ref<ProductProps | null>(null);

getProduct({
  productId: props.id,
}).then((data) => (productsData.value = data));

const imageLoaded = ref(false);
const onImageLoad = () => (imageLoaded.value = true);
</script>

<template>
  <div class="flex flex-col gap-[15px] py-[15px]">
    <div class="">id {{ props.id }}</div>
    <div class="text-22-700">{{ productsData?.title }}</div>
    <div class="w-[300px] h-[300px] border border-black/70 rounded-[5px]">
      <img
        v-if="productsData?.images[0]"
        @load="onImageLoad"
        :src="productsData?.images[0]"
        alt="productImage"
        class="object-cover opacity-0 transition-all duration-300 w-full h-full rounded-[5px]"
        :class="{ 'opacity-100': imageLoaded }"
      />
    </div>
    <div class="text-15-500">{{ productsData?.price }} $</div>
    <Button
      :title="'To Cart'"
      :type="'button'"
      class="bg-green hover:bg-darkgreen rounded-[5px] text-15-400 text-center text-white py-[10px] px-[15px] w-[300px] cursor-pointer"
    />
    <p>{{ productsData?.description }}</p>
  </div>
</template>

<style scoped></style>
