import { useEffect, useState } from "react";
import { Categorie, Product, ApiProduct } from "../../interfaces";
import createPagination from "./createPagination";
import ProductCard from "./productCard/ProductCard";
import Container from "react-bootstrap/Container";
import { Stack } from "react-bootstrap";
import Pagination from "./Pagination";
import getAllProductsRequest from "./getAllProductsRequest";

function ViewProduct() {
  const [productList, setProductList] = useState<Product[]>([]);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [paginatedProductList, setPaginatedProductList] = useState<Product[][]>(
    []
  );
  const [categorieList, setCategorieList] = useState<Categorie[]>([]);

  // Reload component when needed
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
    <>
      <Stack>
        <Container
          fluid
          style={{
            height: "90vh",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            padding: "10px",
          }}
        >
          {paginatedProductList[0] !== undefined
            ? paginatedProductList[currentPageIndex].map((product, index) => (
                <ProductCard
                  key={`itm${index}`}
                  name={product.name}
                  categorie={product.categorie}
                  categorieIconUrl={product.categorieIconUrl!}
                  stock={product.stock}
                  price={product.price}
                  categorieList={categorieList}
                  _id={product._id}
                  setUpdateComponent={setUpdateComponent}
                />
              ))
            : ""}
        </Container>
        <Container fluid style={{ height: "5vh" }}>
          <Pagination
            currentPageIndex={currentPageIndex}
            setCurrentPageIndex={setCurrentPageIndex}
            paginatedProductList={paginatedProductList}
          />
        </Container>
      </Stack>
    </>
  );
}

export default ViewProduct;
