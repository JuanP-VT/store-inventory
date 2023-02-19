import React from "react";
import { Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
type Props = {
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
  category?: string;
  categoryIconUrl: string;
  stock: number;
  price: number;
};

function ProductCardView({
  setEditMode,
  name,
  category: category,
  categoryIconUrl: categoryIconUrl,
  price,
  stock,
}: Props) {
  return (
    <>
      <Card
        border="secondary"
        style={{ width: "13rem", height: "12rem" }}
        className="position-relative shadow-sm border"
      >
        <Card.Body className="pb-0 mb-0">
          <Card.Title style={{ textTransform: "capitalize" }}>
            {name}
          </Card.Title>
          <Card.Subtitle style={{ textTransform: "capitalize" }}>
            {category}
          </Card.Subtitle>
          <Card.Text className="mb-0">Stock : {stock}</Card.Text>
          <Card.Text className="mb-0">Price : {price}$ </Card.Text>
        </Card.Body>
        <Stack direction="horizontal">
          <Button
            onClick={() => setEditMode(true)}
            size="sm"
            style={{
              width: "60px",
              marginLeft: "10px",
              marginBottom: "15px",
            }}
          >
            Edit
          </Button>
          <Button
            style={{ width: "60px", marginLeft: "10px", marginBottom: "15px" }}
            variant="danger"
            size="sm"
          >
            Delete
          </Button>
        </Stack>
        <Card.Img
          src={categoryIconUrl}
          style={{
            width: "45px",
            height: "45px",
            position: "absolute",
            top: "25%",
            right: "20px",
          }}
        />
      </Card>
    </>
  );
}

export default ProductCardView;
