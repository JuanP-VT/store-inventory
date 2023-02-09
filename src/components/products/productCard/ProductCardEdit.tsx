import React from "react";
import { Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { Categorie } from "../../../interfaces";
import handleProductEdit from "./handleProductEdit";
type Props = {
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
  categorie?: string;
  categorieIconUrl: string;
  stock: number;
  price: number;
  categorieList: Categorie[];
  _id: string;
  setUpdateComponent: React.Dispatch<React.SetStateAction<number>>;
};

function ProductCardEdit({
  setEditMode,
  name,
  categorie,
  categorieIconUrl,
  stock,
  price,
  categorieList,
  _id,
  setUpdateComponent,
}: Props) {
  return (
    <>
      <Card
        data-_id={_id}
        style={{
          width: "15rem",
          height: "17rem",
          position: "relative",
          padding: "5px",
        }}
      >
        <Form.Group controlId="productName">
          <Form.Label style={{ fontSize: "13px" }} className="m-0">
            Product Name
          </Form.Label>
          <Form.Control
            className="m-0 w-75"
            type="text"
            required
            style={{ height: "25px", fontSize: "13px" }}
            defaultValue={name}
          />
        </Form.Group>
        <Form.Group controlId="productCategorie">
          <Form.Label style={{ fontSize: "13px" }} className="m-0">
            Categorie
          </Form.Label>
          <Form.Select
            defaultValue={categorie}
            className=" m-0 w-75"
            style={{ height: "30px", fontSize: "11px" }}
          >
            <option style={{ fontSize: "10px" }}>No Categorie</option>
            {categorieList.map((item, index) => (
              <option key={`ct${index}`}>{item.name}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="productStock">
          <Form.Label style={{ fontSize: "13px" }} className="m-0">
            Stock
          </Form.Label>
          <Form.Control
            className="m-0 w-75"
            type="number"
            required
            style={{ height: "25px", fontSize: "13px" }}
            defaultValue={stock}
          />
        </Form.Group>
        <Form.Group controlId="productPrice">
          <Form.Label style={{ fontSize: "13px" }} className="m-0">
            Price
          </Form.Label>
          <Form.Control
            className="m-0 w-75"
            type="number"
            required
            style={{ height: "25px", fontSize: "13px" }}
            defaultValue={price}
          />
        </Form.Group>

        <Stack direction="horizontal">
          <Button
            onClick={(e) => handleProductEdit(e, setUpdateComponent)}
            size="sm"
            style={{ width: "100px", margin: "5px" }}
          >
            Update
          </Button>
          <Button
            variant="secondary"
            onClick={() => setEditMode(false)}
            size="sm"
            style={{ width: "100px", margin: "5px" }}
          >
            Back
          </Button>
        </Stack>
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
            width: "50px",
            height: "50px",
            position: "absolute",
            top: "25%",
            right: "5px",
          }}
        />
      </Card>
    </>
  );
}

export default ProductCardEdit;
