import { useState } from "react";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import addCategorieRequest from "./addCategorieRequest";
type Props = {};

function AddCategorie({}: Props) {
  const [Message, setMessage] = useState("");

  return (
    <>
      <Stack
        style={{
          padding: "10px",
          paddingLeft: "400px",
          paddingRight: "400px",
        }}
      >
        <Form>
          <Form.Group controlId="categorieName">
            <Form.Label>Categorie Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="iconUrl">
            <Form.Label>Icon Url</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Button
            onClick={(e) => addCategorieRequest(e)}
            variant="primary"
            type="submit"
            className="mt-3"
          >
            Submit
          </Button>
          <div>{Message}</div>
        </Form>
      </Stack>
    </>
  );
}

export default AddCategorie;
