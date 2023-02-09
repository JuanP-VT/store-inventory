import { useEffect, useState } from "react";
import { Categorie, Product } from "../../interfaces";
import createPagination from "./createPagination";
import getAllProductsRequest from "./getAllProductsRequest";
import ViewProductDisplay from "./ViewProductDisplay";

// This component is in charge of requesting information to the API and sorting data
// This data is then passed as props to the Product Display component
function ViewProduct() {
  const [productList, setProductList] = useState<Product[]>([]);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [paginatedProductList, setPaginatedProductList] = useState<Product[][]>(
    []
  );
  const [categorieList, setCategorieList] = useState<Categorie[]>([]);

  // Fetch product and categorie list from API , dependencie is used
  // to reload component when needed
  const [updateComponent, setUpdateComponent] = useState(0);
  useEffect(() => {
    getAllProductsRequest(setProductList, setCategorieList);
  }, [updateComponent]);

  // Create pagination from product list
  useEffect(() => {
    const paginatedArray = createPagination(productList, 18);
    setPaginatedProductList(paginatedArray);
  }, [productList]);
  return (
    <ViewProductDisplay
      paginatedProductList={paginatedProductList}
      categorieList={categorieList}
      currentPageIndex={currentPageIndex}
      setCurrentPageIndex={setCurrentPageIndex}
      setUpdateComponent={setUpdateComponent}
    />
  );
}

export default ViewProduct;
