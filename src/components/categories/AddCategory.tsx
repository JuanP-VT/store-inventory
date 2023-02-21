import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import handleOnSubmitCategory from "./handleOnSubmitCategory";
import { Container } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import { Category } from "../../interfaces";

// This form component create a new Category Object from the user input
// and calls a handle function to submit the data
function AddCategory() {
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [formIsValidated, setFormIsValidated] = useState(false);
  const [newCategory, setNewCategory] = useState<Category>({
    name: "",
    iconUrl: "",
  });
  return (
    <>
      <Container
        style={{
          padding: "10px",
          paddingLeft: "400px",
          paddingRight: "400px",
        }}
      >
        <h1>Add New Category</h1>
        <Form
          noValidate
          validated={formIsValidated}
          onSubmit={(e) =>
            handleOnSubmitCategory(
              e,
              setFeedbackMessage,
              setFormIsValidated,
              newCategory
            )
          }
        >
          <Form.Group controlId="categoryName">
            <Form.Label>Category Name</Form.Label>
            <Form.Control
              type="text"
              required
              onChange={(e) =>
                setNewCategory({ ...newCategory, name: e.target.value })
              }
            />
            <Form.Control.Feedback>Looks good</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="iconUrl">
            <Form.Label>Icon Url</Form.Label>
            <Form.Control
              type="text"
              required
              onChange={(e) =>
                setNewCategory({ ...newCategory, iconUrl: e.target.value })
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

export default AddCategory;
