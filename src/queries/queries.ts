const BASE_URL = "https://api.escuelajs.co/api/v1/";

// checkme
// two ways to get link, which is better?

export const getCategories = async (offset: number, limit: number) => {
  // 1st
  const link = () => {
    if (limit > 0)
      return `${BASE_URL}categories?offset=${offset}&limit=${limit}`;
    return `${BASE_URL}categories`;
  };
  const res = await fetch(link()).then((response) => response.json());
  return res;
};

export const getProducts = async (
  offset: number,
  limit: number,
  categoryId: number
) => {
  // 2nd
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

export const getPagesNumber = async (categoryId: number) => {
  const link = () => {
    if (categoryId > 0) return `${BASE_URL}products/?categoryId=${categoryId}`;
    return `${BASE_URL}products`;
  };
  let res = 1;
  await fetch(link())
    .then((response) => response.json())
    .then((data) => {
      res = Math.floor(data.length / 20) + 1;
    });
  return res;
};
