import { ApiProduct, Category, Product } from "../../interfaces";

export default async function getAllProductsRequest(
  setProductList: React.Dispatch<React.SetStateAction<Product[]>>,
  setCategoryList: React.Dispatch<React.SetStateAction<Category[]>>
) {
  const prodRes = await fetch("https://wild-waterfall-1243.fly.dev/products");
  const productData = (await prodRes.json()) as ApiProduct[];
  const catRes = await fetch("https://wild-waterfall-1243.fly.dev/categories");
  const categoryData = (await catRes.json()) as Category[];
  const modProductList = productData.map((product) => {
    const categoryIconUrl = categoryData.find(
      (cat) => product.category == cat.name
    )?.iconUrl;
    return {
      name: product.name,
      category: product.category,
      categoryIconUrl: categoryIconUrl,
      stock: product.stock,
      price: product.price,
      _id: product._id,
    };
  });
  setProductList(modProductList);
  setCategoryList(categoryData);
}
