<script setup lang="ts">
import { ref, reactive, watch } from "vue";
import Button from "@/components/base/Button.vue";
import Pagination from "@/components/Pagination.vue";
import type { CategoryProps } from "@/types/propsTypes";
import { getCategoriesQuery, getPagesNumber } from "@/queries/queriesTanStack";

// const categoriesData: Array<CategoryProps> = reactive([]);

const categoriesQueryParams = { offset: 0, limit: 5 };
const categoriesQuery = getCategoriesQuery(categoriesQueryParams);
const categoriesData = categoriesQuery.data;

const filter = reactive({ currentCategoryId: 0, currentPage: 0 });

const pagesNumber = ref(1);

const changeCategory = (id: number) => {
  filter.currentCategoryId = id;
};

const changePage = (id: number) => {
  filter.currentPage = id;
};

const reset = () => {
  changeCategory(0);
  changePage(1);
};

watch(
  () => filter.currentCategoryId,
  async (newCategoryId) => {
    filter.currentPage = 1;
    getPagesNumber({ categoryId: newCategoryId }).then((newPagesNumber) => {
      pagesNumber.value = newPagesNumber;
    });
  },
  { immediate: true }
);
</script>

<template>
  <div class="flex py-[15px]">
    <div class="flex flex-col gap-[5px] pr-[15px] border-r-[2px] flex-[1_0]">
      <Button
        :title="'RESET'"
        :type="'reset'"
        @click="reset()"
        class="py-[5px] px-[10px] hover:bg-gray transition-all duration-300 ease-[cubic-bezier(.2,.8,.2,.8)] rounded-[5px] text-15-500 text-center cursor-pointer"
      />
      <TransitionGroup name="categories">
        <Button
          v-for="category in categoriesData"
          :key="category.id"
          :title="category.name"
          :type="'button'"
          @click="changeCategory(category.id)"
          class="py-[5px] px-[10px] text-green hover:bg-gray transition-all duration-300 ease-[cubic-bezier(.2,.8,.2,.8)] text-15-500 text-left cursor-pointer rounded-[5px]"
          :class="{ 'bg-lightgray': category.id == filter.currentCategoryId }"
        />
      </TransitionGroup>
    </div>

    <div class="flex-[5_0] px-[15px] flex flex-col gap-[15px] min-h-[100vh]">
      <slot v-bind="filter" />

      <Pagination
        :currentPage="filter.currentPage"
        :pagesNumber="pagesNumber"
        @change-page="changePage"
      />
    </div>
  </div>
</template>

<style scoped>
.categories-enter-from {
  opacity: 0;
}
.categories-enter-active {
  transition: all 0.5s ease;
}
</style>
