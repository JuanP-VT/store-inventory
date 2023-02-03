import React from "react";
import { useState } from "react";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import addCategorieRequest from "../categories/addCategorieRequest";
import { Container } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

function AddProduct() {
  const [Message, setMessage] = useState("");
  const [validated, setValidated] = useState(false);
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
          onSubmit={(e) => addCategorieRequest(e, setMessage, setValidated)}
        >
          <Form.Group controlId="productName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" required />
            <Form.Control.Feedback>Looks good</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="productCategorie">
            <Form.Label>Categorie</Form.Label>
            <Form.Control type="text" required />
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
