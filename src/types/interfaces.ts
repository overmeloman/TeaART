export interface ProductProps {
  title: string;
  price: number;
  id: number;
  images: string[];
  description?: string;
}

export interface CategoryProps {
  id: number;
  name: string;
}
