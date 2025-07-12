<script setup lang="ts">
import { getSingleProductQuery } from "@/queries/queriesTanStack";
import Button from "@/components/base/Button.vue";
import Image from "@/components/base/Image.vue";

const props = defineProps<{
  id: number;
}>();

// const productData = ref<ProductProps | null>(null);

const { data: singleProductData } = getSingleProductQuery({
  productId: props.id,
});
</script>

<template>
  <Transition name="fade-in"
    ><div v-if="singleProductData" class="flex flex-col gap-[15px] py-[15px]">
      <!-- <div class="">id {{ props.id }}</div> -->
      <div class="text-22-700">{{ singleProductData?.title }}</div>
      <div class="text-20-500">{{ singleProductData?.category.name }}</div>
      <div class="w-[300px] h-[300px] border border-black/70 rounded-[5px]">
        <Image
          :src="singleProductData?.images[0]"
          :alt="singleProductData?.category.name"
        />
      </div>
      <div class="text-15-500">{{ singleProductData?.price }} $</div>
      <Button
        :title="'To Cart'"
        :type="'button'"
        class="bg-green hover:bg-darkgreen rounded-[5px] text-15-400 text-center text-white py-[10px] px-[15px] w-[300px] cursor-pointer"
      />
      <p>{{ singleProductData?.description }}</p>
    </div>
  </Transition>
</template>

<style scoped>
.fade-in-enter-active {
  transition: opacity 0.5s ease;
}
.fade-in-enter-from {
  opacity: 0;
}
</style>
