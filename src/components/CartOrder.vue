<script setup lang="ts">
import { ref } from "vue";
import Button from "@/components/base/Button.vue";

const props = defineProps<{
  productsNumber: number;
  totalSum: number;
}>();
</script>

<template>
  <div class="max-lg:pt-[15px] lg:pl-[15px] flex-[1_0]">
    <div
      class="flex flex-col p-[10px] border-[2px] border-black/30 rounded-[5px] gap-[15px]"
    >
      <div class="text-15-500">Your order</div>
      <div class="text-15-400">
        Products in cart: {{ props.productsNumber }}
      </div>
      <div class="text-15-400">Total Sum: {{ props.totalSum }} $</div>
      <Button
        :title="'ORDER'"
        :type="'button'"
        class="bg-green hover:bg-darkgreen rounded-[5px] text-15-400 text-center text-white py-[10px] px-[15px] w-[100%] cursor-pointer"
      />
    </div>
  </div>
</template>

<style scoped></style>
