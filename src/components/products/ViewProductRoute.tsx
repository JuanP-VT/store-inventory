import React, { useEffect, useState } from "react";
import { Category, Product } from "../../interfaces";
import getAllProductsRequest from "./getAllProductsRequest";
import FilterProduct from "./productFilter/FilterProduct";
import ViewProductDisplay from "./ViewProductDisplay";

// This component is in charge of requesting information to the API and sorting data
// This data is then passed as props to the Product Display component
function ViewProduct() {
  const [productList, setProductList] = useState<Product[]>([]);
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const [updateComponent, setUpdateComponent] = useState(0);
  // Fetch product and category list from API , dependency is used
  // to reload component when needed
  useEffect(() => {
    getAllProductsRequest(setProductList, setCategoryList);
  }, [updateComponent]);
  // Filtering
  const [selectedCategory, setSelectedCategory] = useState("No Category");
  const [selectedName, setSelectedName] = useState("");
  const filteredByCategory =
    selectedCategory === "No Category"
      ? productList
      : productList.filter((prod) => prod.category === selectedCategory);
  const filteredByName = filteredByCategory.filter((prod) =>
    prod.name.startsWith(selectedName)
  );
  return (
    <>
      <FilterProduct
        setSelectedCategory={setSelectedCategory}
        setSelectedName={setSelectedName}
      />
      <ViewProductDisplay
        productList={filteredByName}
        setUpdateComponent={setUpdateComponent}
      />
    </>
  );
}

export default ViewProduct;
