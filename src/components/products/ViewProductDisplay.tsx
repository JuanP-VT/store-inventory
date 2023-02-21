import React, { useEffect, useState } from "react";
import { Category, Product } from "../../interfaces";
import ProductCard from "./productCard/ProductCard";
import Container from "react-bootstrap/Container";
import { Stack } from "react-bootstrap";
import PaginationButtons from "./PaginationButtons";
import createPagination from "./createPagination";
import FilterProduct from "./productFilter/FilterProduct";

type Props = {
  productList: Product[];
  setUpdateComponent: React.Dispatch<React.SetStateAction<number>>;
};

// This component displays filtered products
function ViewProductDisplay({
  productList,

  setUpdateComponent,
}: Props) {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [paginatedProductList, setPaginatedProductList] = useState<Product[][]>(
    []
  );
  // Create pagination from product list
  useEffect(() => {
    const paginatedArray = createPagination(productList, 40);
    setPaginatedProductList(paginatedArray);
  }, [productList]);
  return (
    <>
      <Stack>
        <Stack direction="horizontal" gap={5}>
          <h3
            style={{ position: "absolute", right: "50%", marginTop: "-30px" }}
            className="text-end"
          >
            Catalog of products
          </h3>
        </Stack>
        <Container
          fluid
          style={{
            height: "85vh",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            justifyItems: "center",
            rowGap: "10px",
            padding: "10px",
            overflowY: "scroll",
          }}
        >
          {/* For each item in a page render a ProductCard */}
          {paginatedProductList[0] !== undefined &&
          paginatedProductList[0] !== null
            ? paginatedProductList[currentPageIndex].map((product, index) => (
                <ProductCard
                  key={`itm${index}`}
                  product={product}
                  setUpdateComponent={setUpdateComponent}
                />
              ))
            : ""}
        </Container>
        <Container fluid style={{ height: "5vh" }}>
          <PaginationButtons
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
