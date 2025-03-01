// const products = await getSmth(1, 1);

const BASE_URL = "https://api.escuelajs.co/api/v1/";

export const getCategories = async (offset: number, limit: number) => {
  const res = await fetch(
    `${BASE_URL}categories?offset=${offset}&limit=${limit}`
  ).then((response) => response.json());
  return res;
};

export const getProducts = async (
  offset: number,
  limit: number,
  categoryId: number
) => {
  const res = await fetch(getProductsLink(offset, limit, categoryId)).then(
    (response) => response.json()
  );
  return res;
};

const getProductsLink = (offset: number, limit: number, categoryId: number) => {
  if (categoryId > 0)
    return `${BASE_URL}products/?categoryId=${categoryId}&offset=${offset}&limit=${limit}`;
  return `${BASE_URL}products?offset=${offset}&limit=${limit}`;
};
