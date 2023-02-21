import React from "react";
import { Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Product } from "../../../interfaces";
type Props = {
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  product: Product;
};

function ProductCardView({ setEditMode, product }: Props) {
  return (
    <>
      <Card
        border="secondary"
        style={{ width: "13rem", height: "12rem" }}
        className="position-relative shadow-sm border"
      >
        <Card.Body className="pb-0 mb-0">
          <Card.Title style={{ textTransform: "capitalize" }}>
            {product.name}
          </Card.Title>
          <Card.Subtitle style={{ textTransform: "capitalize" }}>
            {product.category}
          </Card.Subtitle>
          <Card.Text className="mb-0">Stock : {product.stock}</Card.Text>
          <Card.Text className="mb-0">Price : {product.price}$ </Card.Text>
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
          src={product.categoryIconUrl}
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
