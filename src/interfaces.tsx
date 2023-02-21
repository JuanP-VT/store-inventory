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
  minStock: number | null;
  maxStock: number | null;
}
export interface Product extends ApiProduct {
  categoryIconUrl: string | undefined;
}
