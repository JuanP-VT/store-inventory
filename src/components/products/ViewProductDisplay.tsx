import { Categorie, Product } from "../../interfaces";
import ProductCard from "./productCard/ProductCard";
import Container from "react-bootstrap/Container";
import { Stack } from "react-bootstrap";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";
import createPagination from "./createPagination";

type Props = {
  productList: Product[];
  categorieList: Categorie[];
  setUpdateComponent: React.Dispatch<React.SetStateAction<number>>;
};

function ViewProductDisplay({
  productList,
  categorieList,
  setUpdateComponent,
}: Props) {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [paginatedProductList, setPaginatedProductList] = useState<Product[][]>(
    []
  );

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
            justifyItems: "center",
            padding: "10px",
          }}
        >
          {/* For each item in a page render a ProductCard */}
          {paginatedProductList[0] !== undefined &&
          paginatedProductList[0] !== null
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

export default ViewProductDisplay;
