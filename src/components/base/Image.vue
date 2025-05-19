<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  src: string;
  alt: string;
}>();

const imageLoaded = ref(false);
const onImageLoad = () => (imageLoaded.value = true);
</script>

<template>
  <img
    @load="onImageLoad()"
    :src="props.src || '@/images/imgPlaceHolder.jpg'"
    :alt="props.alt"
    class="object-cover opacity-0 transition-opacity duration-300 delay-200 w-full h-full rounded-[2px]"
    :class="{ 'opacity-100': imageLoaded }"
  />
</template>

<style scoped></style>
