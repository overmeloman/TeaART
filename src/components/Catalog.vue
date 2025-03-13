<script setup lang="ts">
import { ref, reactive, watch } from "vue";
import Button from "@/components/base/Button.vue";
import type { CategoryProps } from "@/types/interfaces";
import { getCategories } from "@/queries/queries";
import { getPagesNumber } from "@/queries/queries";

const categoriesData: Array<CategoryProps> = reactive([]);

const currentCategoryId = ref(0);

const currentPage = ref(1);
const pagesNumber = ref(1);

const changeCategory = (id: number) => {
  currentCategoryId.value = id;
};

const changePage = (id: number) => {
  currentPage.value = id;
};

const reset = () => {
  changeCategory(0);
  changePage(1);
};

getCategories({ offset: 0, limit: 5 }).then((data) =>
  data.forEach((obj) => categoriesData.push(obj))
);

watch(
  currentCategoryId,
  async (newCategoryId) => {
    currentPage.value = 1;
    getPagesNumber(newCategoryId).then((newPagesNumber) => {
      pagesNumber.value = newPagesNumber;
    });
  },
  { immediate: true }
);
</script>

<template>
  <div class="flex py-[15px]">
    <div class="flex flex-col gap-[5px] pr-[15px] border-r flex-[1_0]">
      <Button
        :id="0"
        :title="'RESET'"
        :type="'reset'"
        @click="reset()"
        :styles="'py-[5px] px-[10px] hover:bg-gray rounded-[5px] text-15-500 text-center cursor-pointer'"
      />

      <Button
        v-for="category in categoriesData"
        :key="category.id"
        :id="category.id"
        :title="category.name"
        :type="'button'"
        @click="changeCategory(category.id)"
        :styles="'py-[5px] px-[10px] text-green hover:bg-gray text-15-500 text-left cursor-pointer rounded-[5px]'"
        :class="{ 'bg-lightgray': category.id == currentCategoryId }"
      />
    </div>

    <div class="flex-[5_0] px-[15px] flex flex-col gap-[15px]">
      <slot :currentCategoryId="currentCategoryId" :currentPage="currentPage" />

      <div class="flex gap-[5px] justify-center">
        <Button
          v-for="pageId in pagesNumber"
          :key="pageId"
          :id="pageId"
          :title="`${pageId}`"
          :type="'button'"
          @click="changePage(pageId)"
          :styles="'hover:bg-gray text-15-400 text-center py-[5px] px-[15px] cursor-pointer border border-black/70 rounded-[5px]'"
          :class="{ 'bg-lightgray': pageId == currentPage }"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
