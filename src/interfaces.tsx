export interface Categorie {
  name: string;
  iconUrl: string | undefined;
}
export interface ApiProduct {
  name: string;
  categorie: string;
  stock: number;
  price: number;
  _id: string;
}
export interface Product {
  name: string;
  categorie: string;
  categorieIconUrl: string | undefined;
  stock: number;
  price: number;
  _id: string;
}
