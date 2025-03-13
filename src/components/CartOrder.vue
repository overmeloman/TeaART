<script setup lang="ts">
import { ref } from "vue";
import Button from "@/components/base/Button.vue";

const props = defineProps<{
  productsNumber: number;
  totalSum: number;
}>();
</script>

<template>
  <div class="pl-[15px] flex-[1_0]">
    <div
      class="flex flex-col p-[10px] border border-black/30 rounded-[5px] gap-[15px]"
    >
      <div class="text-15-500">Your order</div>
      <div class="text-15-400">
        Products in cart: {{ props.productsNumber }}
      </div>
      <div class="text-15-400">Total Sum: {{ props.totalSum }}</div>
      <Button
        :id="0"
        :title="'ORDER'"
        :type="'button'"
        :styles="'bg-green hover:bg-darkgreen rounded-[5px] text-15-400 text-center text-white py-[10px] px-[15px] w-[100%] cursor-pointer'"
      />
    </div>
  </div>
</template>

<style scoped></style>
