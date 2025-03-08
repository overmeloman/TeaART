<script setup lang="ts">
import { ref, reactive, watch } from "vue";
import ButtonCategory from "@/components/buttons/ButtonCategory.vue";
import ButtonPage from "@/components/buttons/ButtonPage.vue";
import type { CategoryProps } from "@/types/interfaces";
import { getCategories } from "@/queries/queries";
import { getPagesNumber } from "@/queries/queries";

const currentCategoryId = ref(0);
const categoriesData: Array<CategoryProps> = reactive([]);
const currentPage = ref(1);
const pages: number[] = reactive([]);

const changeCategory = (id: number) => {
  currentCategoryId.value = id;
};

const changePage = (id: number) => {
  currentPage.value = id;
};

//TODO: async/await
getCategories(0, 5).then((data: Array<CategoryProps>) =>
  data.forEach((obj: CategoryProps) => categoriesData.push(obj))
);

//TODO: watchEffect?
watch(
  currentCategoryId,
  async (newCategoryId) => {
    pages.length = 0;
    currentPage.value = 1;
    //??????
    getPagesNumber(newCategoryId).then((pagesNumber: number) => {
      for (let i = 1; i <= pagesNumber; i++) {
        pages.push(i);
      }
    });
  },
  { immediate: true }
);
</script>

<template>
  <div class="flex py-[15px]">
    <div class="flex flex-col gap-[5px] pr-[15px] border-r flex-[0_0_15%]">
      <!-- TODO: handle reset -->
      <button
        type="reset"
        @click="changeCategory(0), changePage(1)"
        class="py-[5px] px-[10px] hover:bg-gray text-center text-[15px] font-[500] cursor-pointer rounded-[5px]"
      >
        RESET
      </button>
      <ButtonCategory
        v-for="category in categoriesData"
        :key="category.id"
        :id="category.id"
        :name="category.name"
        @change-category="(id) => changeCategory(id)"
        :class="{ 'bg-lightgray': category.id == currentCategoryId }"
      />
      <!-- checkme -->
      <!-- id VS category.id, why? -->
    </div>

    <div class="flex-[0_0_85%] px-[15px] flex flex-col gap-[15px]">
      <slot :currentCategoryId="currentCategoryId" :currentPage="currentPage" />

      <div class="flex gap-[5px] justify-center">
        <ButtonPage
          v-for="pageId in pages"
          :key="pageId"
          :pageId="pageId"
          @change-page="(pageId) => changePage(pageId)"
        ></ButtonPage>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
