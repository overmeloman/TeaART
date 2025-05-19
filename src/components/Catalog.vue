<script setup lang="ts">
import { ref, reactive, watch } from "vue";
import Button from "@/components/base/Button.vue";
import Pagination from "@/components/Pagination.vue";
import type { CategoryProps } from "@/types/propsTypes";
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
    <div class="flex flex-col gap-[5px] pr-[15px] border-r-[2px] flex-[1_0]">
      <Button
        v-if="categoriesData.length > 0"
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
          :class="{ 'bg-lightgray': category.id == currentCategoryId }"
        />
      </TransitionGroup>
    </div>

    <div class="flex-[5_0] px-[15px] flex flex-col gap-[15px] min-h-[100vh]">
      <slot :currentCategoryId="currentCategoryId" :currentPage="currentPage" />

      <Pagination
        :currentPage="currentPage"
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
