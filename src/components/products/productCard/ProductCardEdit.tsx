import React, { useState } from "react";
import { Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { Category, Product } from "../../../interfaces";
import handleProductEdit from "./handleProductEdit";
import { FaCheck } from "react-icons/fa";
type Props = {
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  product: Product;
  categoryList: Category[];
  setUpdateComponent: React.Dispatch<React.SetStateAction<number>>;
};

function ProductCardEdit({
  product,
  setEditMode,
  categoryList: categoryList,
  setUpdateComponent,
}: Props) {
  const [feedback, setFeedback] = useState(false);
  const [_id] = useState(product._id);
  const [name, setName] = useState(product.name);
  const [category, setCategory] = useState(product.category);
  const [stock, setStock] = useState(product.stock);
  const [price, setPrice] = useState(product.price);
  const editedProduct = {
    _id: _id,
    name: name,
    category: category,
    stock: stock,
    price: price,
  };
  return (
    <>
      <Card
        data-_id={product._id}
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
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </Form.Group>
        <Form.Group controlId="productCategory">
          <Form.Label style={{ fontSize: "13px" }} className="m-0">
            Category
          </Form.Label>
          <Form.Select
            defaultValue={category}
            className=" m-0 w-75"
            style={{ height: "30px", fontSize: "11px" }}
            onChange={(e) => setCategory(e.currentTarget.value)}
          >
            <option style={{ fontSize: "10px" }}>No Category</option>
            {categoryList.map((item, index) => (
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
            onChange={(e) =>
              setStock(
                e.currentTarget.value == ""
                  ? 0
                  : parseInt(e.currentTarget.value)
              )
            }
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
            onChange={(e) =>
              setPrice(
                e.currentTarget.value == ""
                  ? 0
                  : parseInt(e.currentTarget.value)
              )
            }
          />
        </Form.Group>

        <Stack direction="horizontal">
          {feedback === true ? (
            <>
              <FaCheck
                color="green"
                style={{ marginLeft: "10px", marginRight: "10px" }}
              />
              <p className="text-justify mt-2">Update Successful</p>
            </>
          ) : (
            <>
              <Button
                onClick={(e) =>
                  handleProductEdit(
                    editedProduct,
                    e,
                    setUpdateComponent,
                    setFeedback,
                    setEditMode
                  )
                }
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
            </>
          )}
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
          src={product.categoryIconUrl}
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
