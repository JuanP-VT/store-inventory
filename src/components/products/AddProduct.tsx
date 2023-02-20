import { useEffect, useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import handleOnSubmitProduct from "./handleOnSubmitProduct";
import useGetCategoriesList from "../../hooks/useGetCategoriesList";
import FormControlText from "../forms/FormControlText";
import FormControlCategorySelector from "../forms/FormControlCategorySelector";
interface NewProduct {
  name: string;
  category: string;
  stock: number;
  price: number;
  minStock: number | null;
  maxStock: number | null;
}
// This component creates a new product from the form
function AddProduct() {
  const [newProduct, setNewProduct] = useState<NewProduct>({
    name: "",
    category: "",
    stock: 0,
    price: 0,
    minStock: null,
    maxStock: null,
  });
  console.log(newProduct);
  // Form validation state and feedback for the user
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [formIsValidated, setFormIsValidated] = useState(false);
  // If stock range is disabled transform minStock and maxStock to null
  const stockRangeCheck = useRef<HTMLInputElement>(null);
  const [hasStockRange, setHasStockRange] = useState(false);
  useEffect(() => {
    if (hasStockRange === false) {
      setNewProduct({ ...newProduct, minStock: null, maxStock: null });
    }
  }, [hasStockRange]);
  return (
    <>
      <Container>
        <p style={{ fontSize: "2rem", fontWeight: "700", paddingTop: "10px" }}>
          Add New Product
        </p>
        <Form
          noValidate
          validated={formIsValidated}
          onSubmit={(e) =>
            handleOnSubmitProduct(
              e,
              setFeedbackMessage,
              setFormIsValidated,
              newProduct
            )
          }
        >
          <FormControlText
            name="name"
            state={newProduct}
            setNewProperty={setNewProduct}
            label="Product Name"
            id="productName"
          />
          <FormControlCategorySelector
            state={newProduct}
            setNewProperty={setNewProduct}
          />
          <Form.Group controlId="productStock">
            <Form.Label>Stock</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  stock: e.target.value === "" ? 0 : parseInt(e.target.value),
                })
              }
            />
            <Form.Control.Feedback>Looks good</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="productPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  price: e.target.value === "" ? 0 : parseInt(e.target.value),
                })
              }
            />
            <Form.Control.Feedback>Looks good</Form.Control.Feedback>
          </Form.Group>
          <Form.Check
            label="Set Stock Range"
            ref={stockRangeCheck}
            onChange={(e) => setHasStockRange(e.currentTarget.checked)}
            className="my-2"
          />
          <Form.Group controlId="minStock">
            <Form.Label>Minimum Stock</Form.Label>
            <Form.Control
              disabled={!hasStockRange}
              type="number"
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  minStock:
                    e.target.value === "" ? null : parseInt(e.target.value),
                })
              }
              value={newProduct.minStock === null ? "" : newProduct.minStock}
              placeholder="optional"
            />
            <Form.Control.Feedback>Looks good</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="maxStock">
            <Form.Label>Maximum Stock</Form.Label>
            <Form.Control
              disabled={!hasStockRange}
              type="number"
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  maxStock:
                    e.target.value === "" ? null : parseInt(e.target.value),
                })
              }
              value={newProduct.maxStock === null ? "" : newProduct.maxStock}
              placeholder="optional"
            />
            <Form.Control.Feedback>Looks good</Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3">
            Submit
          </Button>

          {feedbackMessage !== "" && feedbackMessage !== "Success" ? (
            <Alert variant="danger" className="mt-3">
              {feedbackMessage}
            </Alert>
          ) : (
            ""
          )}
          {feedbackMessage !== "" && feedbackMessage === "Success" ? (
            <Alert variant="success" className="mt-3">
              {feedbackMessage}
            </Alert>
          ) : (
            ""
          )}
        </Form>
      </Container>
    </>
  );
}

export default AddProduct;
