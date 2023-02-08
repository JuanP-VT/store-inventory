import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
type Props = {
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
  categorie?: string;
  categorieIconUrl: string;
  stock: number;
  price: number;
};

function ProductCardView({
  setEditMode,
  name,
  categorie,
  categorieIconUrl,
  price,
  stock,
}: Props) {
  return (
    <>
      <Card style={{ width: "17rem", height: "12rem", position: "relative" }}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2">{categorie}</Card.Subtitle>
          <Card.Text>Current Stock : {stock}</Card.Text>
          <Card.Text>Price : {price}$ </Card.Text>
        </Card.Body>
        <Button
          onClick={() => setEditMode(true)}
          size="sm"
          style={{ width: "150px", marginLeft: "50px", marginBottom: "5px" }}
        >
          Edit
        </Button>
        <Button
          style={{
            position: "absolute",
            top: "3px",
            right: "3px",
            fontSize: "10px",
          }}
          variant="danger"
          size="sm"
        >
          X
        </Button>
        <Card.Img
          src={categorieIconUrl}
          style={{
            width: "70px",
            height: "70px",
            position: "absolute",
            top: "25%",
            right: "10px",
          }}
        />
      </Card>
    </>
  );
}

export default ProductCardView;
