<script setup lang="ts">
import { ref, reactive, watch } from "vue";
import ButtonCategory from "@/components/buttons/ButtonCategory.vue";
import ButtonPage from "@/components/buttons/ButtonPage.vue";
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
    <div class="flex flex-col gap-[5px] pr-[15px] border-r flex-[0_0_15%]">
      <button
        type="reset"
        @click="reset()"
        class="py-[5px] px-[10px] hover:bg-gray rounded-[5px] text-15-500 text-center cursor-pointer"
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
    </div>

    <div class="flex-[0_0_85%] px-[15px] flex flex-col gap-[15px]">
      <slot :currentCategoryId="currentCategoryId" :currentPage="currentPage" />
      <div class="flex gap-[5px] justify-center">
        <ButtonPage
          v-for="pageId in pagesNumber"
          :key="pageId"
          :pageId="pageId"
          @change-page="(pageId) => changePage(pageId)"
        ></ButtonPage>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
