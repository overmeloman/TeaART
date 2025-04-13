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
    <div class="flex flex-col gap-[5px] pr-[15px] border-r-[2px] flex-[1_0]">
      <!-- TODO: can add Transition -->
      <Button
        v-if="categoriesData.length > 0"
        :id="0"
        :title="'RESET'"
        :type="'reset'"
        @click="reset()"
        class="py-[5px] px-[10px] hover:bg-gray rounded-[5px] text-15-500 text-center cursor-pointer"
      />

      <Button
        v-for="category in categoriesData"
        :key="category.id"
        :id="category.id"
        :title="category.name"
        :type="'button'"
        @click="changeCategory(category.id)"
        class="py-[5px] px-[10px] text-green hover:bg-gray text-15-500 text-left cursor-pointer rounded-[5px]"
        :class="{ 'bg-lightgray': category.id == currentCategoryId }"
      />
    </div>

    <div class="flex-[5_0] px-[15px] flex flex-col gap-[15px]">
      <slot :currentCategoryId="currentCategoryId" :currentPage="currentPage" />

      <!-- TODO: move to Pagination component -->
      <div v-if="pagesNumber > 1" class="flex gap-[5px] justify-center">
        <Button
          v-if="currentPage != 1"
          :id="0"
          :title="'<-'"
          :type="'button'"
          @click="changePage(currentPage - 1)"
          class="hover:bg-gray text-15-400 text-center py-[5px] px-[15px] cursor-pointer border-[2px] border-black/70 rounded-[5px]"
        />
        <Button
          v-for="pageId in pagesNumber"
          :key="pageId"
          :id="pageId"
          :title="`${pageId}`"
          :type="'button'"
          @click="changePage(pageId)"
          class="hover:bg-gray text-15-400 text-center py-[5px] px-[15px] cursor-pointer border-[2px] border-black/70 rounded-[5px]"
          :class="{ 'bg-lightgray': pageId == currentPage }"
        />
        <Button
          v-if="currentPage != pagesNumber"
          :id="pagesNumber + 1"
          :title="'->'"
          :type="'button'"
          @click="changePage(currentPage + 1)"
          class="hover:bg-gray text-15-400 text-center py-[5px] px-[15px] cursor-pointer border-[2px] border-black/70 rounded-[5px]"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
