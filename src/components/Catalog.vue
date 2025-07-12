<script setup lang="ts">
import { computed, reactive } from "vue";
import Button from "@/components/base/Button.vue";
import Pagination from "@/components/Pagination.vue";
import {
  getCategoriesQuery,
  getPagesNumberQuery,
} from "@/queries/queriesTanStack";

const filter = reactive({ currentCategoryId: 0, currentPage: 1 });

const { data: categoriesData } = getCategoriesQuery({ offset: 0, limit: 5 });
const { data: pagesNumber } = getPagesNumberQuery(
  computed(() => {
    return {
      categoryId: filter.currentCategoryId,
    };
  })
);

const changeCategory = (id: number) => {
  filter.currentCategoryId = id;
  filter.currentPage = 1;
};

const changePage = (id: number) => {
  filter.currentPage = id;
};

const reset = () => {
  changeCategory(0);
  changePage(1);
};
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
        v-if="pagesNumber"
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
