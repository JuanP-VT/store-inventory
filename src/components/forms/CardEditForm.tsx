import React, { useState, useRef, useEffect } from "react";
import { Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import handleProductEdit from "../products/productCard/handleProductEdit";
import { FaCheck } from "react-icons/fa";
import { Product } from "../../interfaces";
import useGetCategoriesList from "../../hooks/useGetCategoriesList";

type Props = {
  setName: React.Dispatch<React.SetStateAction<string>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  setStock: React.Dispatch<React.SetStateAction<number>>;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
  setMinStock: React.Dispatch<React.SetStateAction<number | null>>;
  setMaxStock: React.Dispatch<React.SetStateAction<number | null>>;
  product: Product;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  setUpdateComponent: React.Dispatch<React.SetStateAction<number>>;
};

function CardEditForm({
  setName,
  setCategory,
  setStock,
  setPrice,
  setMinStock,
  setMaxStock,
  product,
  setUpdateComponent,
  setEditMode,
}: Props) {
  console.log(product);
  const [feedback, setFeedback] = useState(false);
  // If stock range is disabled convert minStock and maxStock values to null
  const stockRangeCheck = useRef<HTMLInputElement>(null);
  const [hasStockRange, setHasStockRange] = useState(true);
  useEffect(() => {
    if (product.minStock === null && product.maxStock === null) {
      setHasStockRange(false);
    }
  }, []);
  useEffect(() => {
    if (hasStockRange === false) {
      setMaxStock(null);
      setMinStock(null);
    }
  }, [hasStockRange]);
  const categoryList = useGetCategoriesList();
  return (
    <>
      <Card
        data-_id={product._id}
        style={{
          width: "15rem",
          height: "24rem",
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
            value={product.name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </Form.Group>
        <Form.Group controlId="productCategory">
          <Form.Label style={{ fontSize: "13px" }} className="m-0">
            Category
          </Form.Label>
          <Form.Select
            value={product.category}
            className=" m-0 w-75"
            style={{ height: "30px", fontSize: "11px" }}
            onChange={(e) => setCategory(e.currentTarget.value)}
          >
            <option style={{ fontSize: "10px" }}>No Category</option>
            {categoryList.map((item, index) => (
              <option
                style={{ textTransform: "capitalize" }}
                key={`ct${index}`}
              >
                {item.name}
              </option>
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
            value={product.stock}
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
            value={product.price}
            onChange={(e) =>
              setPrice(
                e.currentTarget.value == ""
                  ? 0
                  : parseInt(e.currentTarget.value)
              )
            }
          />
        </Form.Group>
        <Form.Check
          label="Set Stock Range"
          ref={stockRangeCheck}
          onChange={(e) => setHasStockRange(e.currentTarget.checked)}
          style={{ fontSize: "13px", margin: "0" }}
          checked={hasStockRange}
        />
        <Form.Group controlId="minStock" style={{ margin: "0" }}>
          <Form.Label style={{ fontSize: "13px" }} className="m-0">
            Minimum Stock
          </Form.Label>
          <Form.Control
            className="m-0 w-75"
            type="number"
            style={{ height: "25px", fontSize: "13px" }}
            value={product.minStock === null ? "" : product.minStock}
            disabled={!hasStockRange}
            onChange={(e) =>
              setMinStock(
                e.currentTarget.value == ""
                  ? null
                  : parseInt(e.currentTarget.value)
              )
            }
          />
        </Form.Group>
        <Form.Group controlId="maxStock">
          <Form.Label style={{ fontSize: "13px" }} className="m-0">
            Maximum Stock
          </Form.Label>
          <Form.Control
            className="m-0 w-75"
            type="number"
            style={{ height: "25px", fontSize: "13px" }}
            value={product.maxStock === null ? "" : product.maxStock}
            disabled={!hasStockRange}
            onChange={(e) =>
              setMaxStock(
                e.currentTarget.value == ""
                  ? null
                  : parseInt(e.currentTarget.value)
              )
            }
          />
        </Form.Group>
        <Stack direction="horizontal" className="mt-1">
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
                    product,
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

export default CardEditForm;
