import React from "react";
import { Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
type Props = {
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
};

function CategorieCardEdit({ setEditMode }: Props) {
  return (
    <Card
      style={{
        width: "12rem",
        height: "12rem",
        padding: "2px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Card.Img
        src="https://cdn-icons-png.flaticon.com/512/2153/2153788.png"
        style={{ width: "2rem" }}
        alt="Card image"
      />
      <Form.Group
        controlId="categorieName"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Form.Label className="m-0">Categorie Name</Form.Label>
        <Form.Control
          type="text"
          required
          style={{ height: "30px", width: "80%" }}
        />
      </Form.Group>
      <Form.Group
        controlId="iconUrl"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Form.Label className="m-0">Icon Url</Form.Label>
        <Form.Control
          className="m-0"
          type="text"
          required
          style={{ height: "30px", width: "80%" }}
        />
      </Form.Group>
      <Stack direction="horizontal" style={{ justifyContent: "space-around" }}>
        <Button variant="primary" type="submit" className="mt-2" size="sm">
          Update
        </Button>
        <Button
          variant="secondary"
          type="submit"
          className="mt-2"
          size="sm"
          style={{}}
          onClick={() => setEditMode(false)}
        >
          Back
        </Button>
      </Stack>
    </Card>
  );
}

export default CategorieCardEdit;
