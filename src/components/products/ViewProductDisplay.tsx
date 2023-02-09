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
  //resizing logic
  const [itemsPerPage, setItemsPerPage] = useState(18);
  useEffect(() => {
    const resizeListener = () => {
      const width = window.innerWidth;
      if (width <= 2685 && width > 1920) {
        setItemsPerPage(24);
      }
      if (width < 1920 && width > 1820) {
        setItemsPerPage(18);
      }
      if (width < 1820 && width > 1520) {
        setItemsPerPage(20);
      }
      if (width < 1520 && width > 1220) {
        setItemsPerPage(16);
      }
      if (width < 1320 && width > 920) {
        setItemsPerPage(12);
      }
      if (width < 920 && width > 620) {
        setItemsPerPage(8);
      }
      if (width < 620) {
        setItemsPerPage(4);
      }
    };
    // set resize listener
    window.addEventListener("resize", resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener("resize", resizeListener);
    };
  }, []);
  // Create pagination from product list
  useEffect(() => {
    const paginatedArray = createPagination(productList, itemsPerPage);
    setPaginatedProductList(paginatedArray);
  }, [productList, itemsPerPage]);
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

export default ViewProductDisplay;
