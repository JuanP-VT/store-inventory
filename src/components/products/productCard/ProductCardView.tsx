import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
type Props = {
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
};

function ProductCardView({ setEditMode }: Props) {
  return (
    <>
      <Card style={{ width: "17rem", height: "12rem", position: "relative" }}>
        <Card.Body>
          <Card.Title>Watermelon</Card.Title>
          <Card.Subtitle className="mb-2">Fruits</Card.Subtitle>
          <Card.Text>Current Stock : 500</Card.Text>
          <Card.Text>Price : 10$ </Card.Text>
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
          src="https://th.bing.com/th/id/OIP.TwG2_TWf8QS2ebyhO7jQnQHaFQ?pid=ImgDet&rs=1"
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
