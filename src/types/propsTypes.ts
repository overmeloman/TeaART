export interface ProductProps {
  title: string;
  price: number;
  id: number;
  images: string[];
  description?: string;
  category: CategoryProps;
}

// export type ProductPropsList = Array<ProductProps>;

export interface CategoryProps {
  id: number;
  name: string;
}
