<script setup lang="ts">
import { reactive, ref } from "vue";
import type { CategorieProps } from "@/types/interfaces";
import CatalogItem from "./CatalogItem.vue";

const categoryID = defineModel();

//TODO: use () => {} functions
function changeCategory(id: number) {
  categoryID.value = id;
}

//TODO: add folder with all queries
//
// 'https://api.escuelajs.co/api/v1/' it's a base url
// const BASE_URL = "https://api.escuelajs.co/api/v1/";
//
// use async/await construction
//
// write queries:
// const getSmth = async (offset: number, limit: number) => {
//   const res = await fetch(
//     `${BASE_URL}products?offset=${offset}&limit=${limit}`
//   );
//   return res;
// };
//
// and import query in your component

const categoriesData: Array<CategorieProps> = reactive([]);
fetch("https://api.escuelajs.co/api/v1/categories?limit=5")
  .then((response) => response.json())
  .then((data) =>
    data.forEach((obj: CategorieProps) =>
      categoriesData.push(Object.assign({}, obj))
    )
  );
// TODO: add this component as navbar in layout
//TODO: aks me about slots
</script>

<template>
  <div class="flex flex-col gap-[5px] pr-[15px] border-r flex-[0_0_15%]">
    <div>
      {{ categoryID }}
    </div>
    <!-- TODO: when use v-for add unique key :key="category.id" -->
    <CatalogItem
      @change-category="(id) => changeCategory(id)"
      v-for="category in categoriesData"
      :id="category.id"
      :name="category.name"
    >
    </CatalogItem>
  </div>
</template>

<style scoped></style>
