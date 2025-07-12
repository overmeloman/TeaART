import { useQuery, useMutation } from "@tanstack/vue-query";

import type {
  ProductProps,
  CategoryProps,
  UserProps,
  LoginProps,
} from "@/types/propsTypes";
import type { MaybeRef, Ref } from "vue";

const BASE_URL = "https://api.escuelajs.co/api/v1/";

export const getSingleProductQuery = (params: { productId: number }) => {
  return useQuery({
    queryKey: ["product", params],
    queryFn: async () => {
      const response = await fetch(`${BASE_URL}products/${params.productId}`);
      const data = await response.json();
      return data as unknown as ProductProps;
    },
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

export const getProductsQuery = (
  params: Ref<{
    categoryId: number;
    offset: number;
    limit: number;
  }>
) => {
  return useQuery({
    queryKey: ["products", params],
    queryFn: async () => {
      const response = await fetch(getProductsLink(params.value));
      const data = await response.json();
      return data as unknown as ProductProps[];
    },
  });
};

export const getCategoriesQuery = (params: {
  offset: number;
  limit: number;
}) => {
  return useQuery({
    queryKey: ["categories", params],
    queryFn: async () => {
      const response = await fetch(
        `${BASE_URL}categories?offset=${params.offset}&limit=${params.limit}`
      );
      const data = await response.json();
      return data as unknown as CategoryProps[];
    },
  });
};

export const getPagesNumberQuery = (params: Ref<{ categoryId: number }>) => {
  return useQuery({
    queryKey: ["pagesNumber", params],
    queryFn: async () => {
      const link = () => {
        if (params.value.categoryId > 0)
          return `${BASE_URL}products/?categoryId=${params.value.categoryId}`;
        return `${BASE_URL}products`;
      };
      let pagesNumber = 1;
      const response = await fetch(link());
      const data = (await response.json()) as unknown as ProductProps[];
      pagesNumber = Math.floor((data.length - 1) / 20) + 1;
      return pagesNumber;
    },
  });
};

export const getRegisterMutation = () => {
  return useMutation({
    mutationFn: (params: { newUser: UserProps }) =>
      fetch(`${BASE_URL}users/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(params.newUser),
      }),
  });
};

export const getLoginMutation = () => {
  return useMutation({
    mutationFn: async (params: { loginData: LoginProps }) => {
      const response = await fetch(`${BASE_URL}auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(params.loginData),
      });
      const data = await response.json();
      localStorage.setItem("access_token", JSON.stringify(data.access_token));
      localStorage.setItem("refresh_token", JSON.stringify(data.refresh_token));
      window.location.reload();
    },
  });
};

export const getUserDataQuery = () => {
  return useQuery({
    queryKey: ["userData"],
    queryFn: async () => {
      const accessToken = await getAccessToken();
      const response = await fetch(`${BASE_URL}auth/profile`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await response.json();
      return data as unknown as UserProps;
    },
  });
};

export const getTokensMutation = () => {
  return useMutation({
    mutationFn: async () => {
      const refreshToken = await getRefreshToken();
      const response = await fetch(`${BASE_URL}auth/refresh-token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(refreshToken),
      });
      const data = await response.json();
      localStorage.setItem("access_token", JSON.stringify(data.access_token));
      localStorage.setItem("refresh_token", JSON.stringify(data.refresh_token));
      window.location.reload();
    },
  });
};

export const getAccessToken = async () => {
  return JSON.parse(localStorage.getItem("access_token") as string);
};

export const getRefreshToken = async () => {
  return JSON.parse(localStorage.getItem("refresh_token") as string);
};
