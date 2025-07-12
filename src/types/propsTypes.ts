export interface ProductProps {
  title: string;
  price: number;
  id: number;
  images: string[];
  description?: string;
  category: CategoryProps;
}

export interface CategoryProps {
  id: number;
  name: string;
}

export interface UserProps {
  email: string;
  name: string;
  password: string;
  role?: string;
  avatar: string;
}

export interface LoginProps {
  email: string;
  password: string;
}
