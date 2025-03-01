<script setup lang="ts">
import { ref, reactive } from "vue";
import CatalogItem from "@/components/CatalogItem.vue";
import type { CategoryProps } from "@/types/interfaces";
import { getCategories } from "@/queries/queries";

const currentCategoryId = ref(0);

const changeCategory = (id: number) => {
  currentCategoryId.value = id;
};

const categoriesData: Array<CategoryProps> = reactive([]);

getCategories(0, 5).then((data: Array<CategoryProps>) =>
  data.forEach((obj: CategoryProps) => categoriesData.push(obj))
);
</script>

<template>
  <div class="flex py-[15px] min-h-screen">
    <div class="flex flex-col gap-[5px] pr-[15px] border-r flex-[0_0_15%]">
      <div>
        {{ currentCategoryId }}
      </div>
      <CatalogItem
        @change-category="(id) => changeCategory(id)"
        v-for="category in categoriesData"
        :key="category.id"
        :id="category.id"
        :name="category.name"
      />
    </div>

    <slot :currentCategoryId="currentCategoryId" />
  </div>
</template>

<style scoped></style>
