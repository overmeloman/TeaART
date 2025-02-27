<script setup lang="ts">
import type { ProductProps } from "@/types/interfaces";
import ButtonToCart from "./ButtonToCart.vue";

const props = withDefaults(defineProps<ProductProps>(), {
  title: "defaultTitle",
  price: -1,
  id: 0,
});
</script>

<template>
  <div
    class="flex flex-col items-center p-[10px] flex-[0_0_24%] border border-black/30 gap-[10px]"
  >
    <!-- TODO: add unique alt for images -->
    <img src="../images/TeaDefault.jpg" alt="(image)" />
    <div class="text-[14px] text-center font-[400] min-h-[42px] box-content">
      <!-- TODO: props.title/props.price -->
      {{ title }}
    </div>
    <div class="text-[15px] text-center font-[500]">{{ price }} $</div>

    <ButtonToCart :id="id" />
  </div>
</template>

<style scoped></style>
