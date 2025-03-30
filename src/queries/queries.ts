import type { ProductProps, CategoryProps } from "@/types/interfaces";

const BASE_URL = "https://api.escuelajs.co/api/v1/";

export const getProduct = async (params: { productId: number }) => {
  const link = `${BASE_URL}products/${params.productId}`;
  const response = await fetch(link);
  const data = await response.json();
  return data as unknown as ProductProps;
};

export const getProducts = async (params: {
  offset: number;
  limit: number;
  categoryId: number;
}) => {
  const link = () => {
    if (params.categoryId > 0)
      return `${BASE_URL}products/?categoryId=${params.categoryId}&offset=${params.offset}&limit=${params.limit}`;
    return `${BASE_URL}products?offset=${params.offset}&limit=${params.limit}`;
  };
  const response = await fetch(link());
  const data = await response.json();
  return data as unknown as ProductProps[];
};

export const getCategories = async (params: {
  offset: number;
  limit: number;
}) => {
  const link = () => {
    if (params.limit > 0)
      return `${BASE_URL}categories?offset=${params.offset}&limit=${params.limit}`;
    return `${BASE_URL}categories`;
  };
  const response = await fetch(link());
  const data = await response.json();
  return data as unknown as CategoryProps[];
};

export const getPagesNumber = async (categoryId: number) => {
  const link = () => {
    if (categoryId > 0) return `${BASE_URL}products/?categoryId=${categoryId}`;
    return `${BASE_URL}products`;
  };
  let pagesNumber = 1;
  const response = await fetch(link());
  const data = await response.json();
  pagesNumber = Math.floor((data.length - 1) / 20) + 1;
  return pagesNumber;
};
