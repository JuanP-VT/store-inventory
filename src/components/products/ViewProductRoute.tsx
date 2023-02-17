import { useEffect, useState } from "react";
import { Categorie, Product } from "../../interfaces";
import FilterProduct from "./productFilter/FilterProduct";
import getAllProductsRequest from "./getAllProductsRequest";
import ViewProductDisplay from "./ViewProductDisplay";

// This component is in charge of requesting information to the API and sorting data
// This data is then passed as props to the Product Display component
function ViewProduct() {
  const [productList, setProductList] = useState<Product[]>([]);
  const [categorieList, setCategorieList] = useState<Categorie[]>([]);
  const [updateComponent, setUpdateComponent] = useState(0);
  // Fetch product and categorie list from API , dependencie is used
  // to reload component when needed
  useEffect(() => {
    getAllProductsRequest(setProductList, setCategorieList);
  }, [updateComponent]);

  return (
    <>
      <ViewProductDisplay
        productList={productList}
        categorieList={categorieList}
        setUpdateComponent={setUpdateComponent}
      />
    </>
  );
}

export default ViewProduct;
