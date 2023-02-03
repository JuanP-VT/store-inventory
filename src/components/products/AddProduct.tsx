import React, { useEffect } from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import { Categorie } from "../../interfaces";
import addProductRequest from "./addProductRequest";
// This component create a request from the form to create a new product to the database
function AddProduct() {
  const [Message, setMessage] = useState("");
  const [validated, setValidated] = useState(false);
  const [categorieList, setCategorieList] = useState<Categorie[]>([]);
  // Get registered categories in the database
  useEffect(() => {
    callApi();
    async function callApi() {
      const res = await fetch("https://wild-waterfall-1243.fly.dev/categories");
      const data = await res.json();
      setCategorieList(data);
    }
  }, []);
  return (
    <>
      <Container
        style={{
          padding: "10px",
          paddingLeft: "400px",
          paddingRight: "400px",
        }}
      >
        <Form
          noValidate
          validated={validated}
          onSubmit={(e) => addProductRequest(e, setMessage, setValidated)}
        >
          <Form.Group controlId="productName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" required />
            <Form.Control.Feedback>Looks good</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="productCategorie">
            <Form.Label>Categorie</Form.Label>
            <Form.Select>
              <option>No Categorie</option>
              {categorieList.map((item, index) => (
                <option key={`catList-${index}`}>{item.name}</option>
              ))}
            </Form.Select>
            <Form.Control.Feedback>Looks good</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="productStock">
            <Form.Label>Stock</Form.Label>
            <Form.Control type="number" required />
            <Form.Control.Feedback>Looks good</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="productPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" required />
            <Form.Control.Feedback>Looks good</Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3">
            Submit
          </Button>
          {Message !== "" && Message !== "Success" ? (
            <Alert variant="danger" className="mt-3">
              {Message}
            </Alert>
          ) : (
            ""
          )}
          {Message !== "" && Message === "Success" ? (
            <Alert variant="success" className="mt-3">
              {Message}
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
