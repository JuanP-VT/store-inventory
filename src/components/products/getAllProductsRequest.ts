import { ApiProduct, Categorie, Product } from "../../interfaces";

export default async function getAllProductsRequest(
  setProductList: React.Dispatch<React.SetStateAction<Product[]>>,
  setCategorieList: React.Dispatch<React.SetStateAction<Categorie[]>>
) {
  const prodRes = await fetch("https://wild-waterfall-1243.fly.dev/products");
  const productData = (await prodRes.json()) as ApiProduct[];
  const catRes = await fetch("https://wild-waterfall-1243.fly.dev/categories");
  const categorieData = (await catRes.json()) as Categorie[];
  const modProductList = productData.map((product) => {
    const categorieIconUrl = categorieData.find(
      (cat) => product.categorie == cat.name
    )?.iconUrl;
    return {
      name: product.name,
      categorie: product.categorie,
      categorieIconUrl: categorieIconUrl,
      stock: product.stock,
      price: product.price,
      _id: product._id,
    };
  });
  setProductList(modProductList);
  setCategorieList(categorieData);
}
