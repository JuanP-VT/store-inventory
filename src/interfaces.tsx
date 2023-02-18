export interface Category {
  name: string;
  iconUrl: string | undefined;
}
export interface ApiProduct {
  name: string;
  category: string;
  stock: number;
  price: number;
  _id: string;
}
export interface Product {
  name: string;
  category: string;
  categoryIconUrl: string | undefined;
  stock: number;
  price: number;
  _id: string;
}
