<script setup lang="ts">
import type { ProductProps } from "@/types/interfaces";

const props = withDefaults(defineProps<ProductProps>(), {
  title: "defaultTitle",
  price: -1,
  id: 0,
});
</script>

<template>
  <div class="flex items-center p-[10px] border border-black/30 gap-[15px]">
    <img
      src="../images/TeaDefault.jpg"
      alt="(image)"
      class="w-[60px] h-[60px]"
    />
    <div class="text-[14px] text-center font-[400] flex-[1_0_150px]">
      <!-- TODO: props.title/props.price -->
      {{ title }}
    </div>
    <div class="text-[15px] text-center font-[500]">{{ price }} $</div>
  </div>
</template>

<style scoped></style>
