import { useEffect, useState } from "react";
import {
  Categorie,
  Product,
  ApiProduct,
  ProductPaginatedArray,
} from "../../interfaces";
import createPagination from "./createPagination";
import ProductCard from "./productCard/ProductCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Stack } from "react-bootstrap";
import Pagination from "./Pagination";

function ViewProduct() {
  const [productList, setProductList] = useState<Product[]>([]);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [paginatedProductList, setPaginatedProductList] = useState<Product[][]>(
    []
  );
  const [categorieList, setCategorieList] = useState<Categorie[]>([]);
  //Fetch categorie and product list from API, then merge them
  useEffect(() => {
    callApi();
    async function callApi() {
      const prodRes = await fetch(
        "https://wild-waterfall-1243.fly.dev/products"
      );
      const productData = (await prodRes.json()) as ApiProduct[];
      const catRes = await fetch(
        "https://wild-waterfall-1243.fly.dev/categories"
      );
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
        };
      });
      setProductList(modProductList);
      setCategorieList(categorieData);
    }
  }, []);

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
            border: "1px solid green",
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
                />
              ))
            : ""}
        </Container>
        <Container fluid style={{ border: "1px solid red", height: "5vh" }}>
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
