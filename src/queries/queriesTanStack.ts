import type { ProductProps, CategoryProps } from "@/types/propsTypes";
import { useQuery } from "@tanstack/vue-query";
import type { Ref } from "vue";

const BASE_URL = "https://api.escuelajs.co/api/v1/";

const getSingleProduct = async (params: { productId: number }) => {
  const response = await fetch(`${BASE_URL}products/${params.productId}`);
  const data = await response.json();
  return data as unknown as ProductProps;
};

export const getSingleProductQuery = (params: { productId: number }) => {
  return useQuery({
    queryKey: ["product", params],
    queryFn: () => getSingleProduct(params),
  });
};

const getProductsLink = (params: {
  categoryId: number;
  offset: number;
  limit: number;
}): string => {
  let link = `${BASE_URL}products`;
  if (params.categoryId > 0) {
    link += `/?categoryId=${params.categoryId}`;
  } else {
    link += `?`;
  }
  link += `&offset=${params.offset}`;
  link += `&limit=${params.limit}`;
  return link;
};

const getProducts = async (params: {
  categoryId: number;
  offset: number;
  limit: number;
}): Promise<ProductProps[]> => {
  const response = await fetch(getProductsLink(params));
  const data = await response.json();
  return data as unknown as ProductProps[];
};

export const getProductsQuery = (
  params: Ref<{
    categoryId: number;
    offset: number;
    limit: number;
  }>
) => {
  return useQuery({
    queryKey: ["products", params],
    queryFn: () => getProducts(params.value),
  });
};

const getCategories = async (params: { offset: number; limit: number }) => {
  const response = await fetch(
    `${BASE_URL}categories?offset=${params.offset}&limit=${params.limit}`
  );
  const data = await response.json();
  return data as unknown as CategoryProps[];
};

export const getCategoriesQuery = (params: {
  offset: number;
  limit: number;
}) => {
  return useQuery({
    queryKey: ["categories", params],
    queryFn: () => getCategories(params),
  });
};

export const getPagesNumber = async (params: { categoryId: number }) => {
  const link = () => {
    if (params.categoryId > 0)
      return `${BASE_URL}products/?categoryId=${params.categoryId}`;
    return `${BASE_URL}products`;
  };
  let pagesNumber = 1;
  const response = await fetch(link());
  const data = (await response.json()) as unknown as ProductProps[];
  pagesNumber = Math.floor((data.length - 1) / 20) + 1;
  return pagesNumber;
};
