import { Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
type Props = {};

function CategorieCard({}: Props) {
  return (
    <>
      <Card
        style={{
          width: "12rem",
          height: "12rem",
          padding: "2px",
          position: "relative",
        }}
      >
        <Card.Body
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            display: "flex",
          }}
        >
          <Card.Title className="m-0" style={{ textAlign: "center" }}>
            Vegetablessss
          </Card.Title>
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
            src="https://cdn-icons-png.flaticon.com/512/2153/2153788.png"
            style={{ width: "6rem" }}
            alt="Card image"
          />
          <Button variant="primary" size="sm">
            Edit
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default CategorieCard;
