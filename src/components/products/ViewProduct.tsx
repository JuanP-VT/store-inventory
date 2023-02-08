import { useEffect, useState } from "react";
import {
  Categorie,
  modProduct,
  Product,
  ProductPaginatedArray,
} from "../../interfaces";
import createPagination from "./createPagination";
import ProductCard from "./productCard/ProductCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Stack } from "react-bootstrap";

function ViewProduct() {
  const [productList, setProductList] = useState<modProduct[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedProductList, setPaginatedProductList] =
    useState<ProductPaginatedArray>([]);

  //Fetch categorie and product list from API, then merge them
  useEffect(() => {
    callApi();
    async function callApi() {
      const prodRes = await fetch(
        "https://wild-waterfall-1243.fly.dev/products"
      );
      const productData = (await prodRes.json()) as Product[];
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
    }
  }, []);

  // Create pagination from product list
  useEffect(() => {
    const paginatedArray = createPagination(productList, 20);
    setPaginatedProductList(paginatedArray);
  }, [productList]);
  return (
    <>
      <Stack>
        <Container fluid style={{ border: "1px solid green", height: "90vh" }}>
          {paginatedProductList[0] !== undefined
            ? paginatedProductList[currentPage - 1].map((product, index) => (
                <ProductCard
                  key={`itm${index}`}
                  name={product.name}
                  categorie={product.categorie}
                  categorieIconUrl={product.categorieIconUrl!}
                  stock={product.stock}
                  price={product.price}
                />
              ))
            : ""}
        </Container>
        <Container fluid style={{ border: "1px solid red", height: "5vh" }}>
          Pagination
        </Container>
      </Stack>
    </>
  );
}

export default ViewProduct;
