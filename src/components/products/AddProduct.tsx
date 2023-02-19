import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

import handleOnSubmitProduct from "./handleOnSubmitProduct";
import { Category } from "../../interfaces";
interface NewProduct {
  name: string;
  category: string;
  stock: number;
  price: number;
}
// This component create a request from the form to create a new product to the database
function AddProduct() {
  const [newProduct, setNewProduct] = useState<NewProduct>({
    name: "",
    category: "",
    stock: 0,
    price: 0,
  });
  console.log(newProduct);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [formIsValidated, setFormIsValidated] = useState(false);
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  // Get registered categories in the database
  useEffect(() => {
    callApi();
    async function callApi() {
      const res = await fetch("https://wild-waterfall-1243.fly.dev/categories");
      const data = await res.json();
      setCategoryList(data);
    }
  }, []);
  return (
    <>
      <Container>
        <p style={{ fontSize: "2rem", fontWeight: "700", paddingTop: "10px" }}>
          Add New Product
        </p>
        <Form
          noValidate
          validated={formIsValidated}
          onSubmit={(e) =>
            handleOnSubmitProduct(
              e,
              setFeedbackMessage,
              setFormIsValidated,
              newProduct
            )
          }
        >
          <Form.Group controlId="productName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              required
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />
            <Form.Control.Feedback>Looks good</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="productCategory">
            <Form.Label>Category</Form.Label>
            <Form.Select
              onChange={(e) =>
                setNewProduct({ ...newProduct, category: e.target.value })
              }
            >
              <option>No Category</option>
              {categoryList.map((item, index) => (
                <option key={`catList-${index}`}>{item.name}</option>
              ))}
            </Form.Select>
            <Form.Control.Feedback>Looks good</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="productStock">
            <Form.Label>Stock</Form.Label>
            <Form.Control
              type="number"
              required
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  stock: parseInt(e.target.value),
                })
              }
            />
            <Form.Control.Feedback>Looks good</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="productPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              required
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  price: parseInt(e.target.value),
                })
              }
            />
            <Form.Control.Feedback>Looks good</Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3">
            Submit
          </Button>
          {feedbackMessage !== "" && feedbackMessage !== "Success" ? (
            <Alert variant="danger" className="mt-3">
              {feedbackMessage}
            </Alert>
          ) : (
            ""
          )}
          {feedbackMessage !== "" && feedbackMessage === "Success" ? (
            <Alert variant="success" className="mt-3">
              {feedbackMessage}
            </Alert>
          ) : (
            ""
          )}
        </Form>
      </Container>
    </>
  );
}

export default AddProduct;
