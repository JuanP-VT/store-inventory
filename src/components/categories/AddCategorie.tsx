import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import addCategorieRequest from "./addCategorieRequest";
import { Container } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

function AddCategorie() {
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
          <Form.Group controlId="categorieName">
            <Form.Label>Categorie Name</Form.Label>
            <Form.Control type="text" required />
            <Form.Control.Feedback>Looks good</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="iconUrl">
            <Form.Label>Icon Url</Form.Label>
            <Form.Control type="text" required />
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

export default AddCategorie;
