import React, { useEffect, useRef, useState } from "react";
import Alert from "react-bootstrap/esm/Alert";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/esm/Form";
import handleOnSubmitProduct from "../products/handleOnSubmitProduct";
import FormControlCategorySelector from "./FormControlCategorySelector";
import FormControlNum from "./FormControlNum";
import FormControlText from "./FormControlText";
type newProduct = {
  name: string;
  category: string;
  stock: number | null;
  price: number | null;
  minStock: number | null;
  maxStock: number | null;
};
type Props = {
  setName: React.Dispatch<React.SetStateAction<string>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  setStock: React.Dispatch<React.SetStateAction<number | null>>;
  setPrice: React.Dispatch<React.SetStateAction<number | null>>;
  setMinStock: React.Dispatch<React.SetStateAction<number | null>>;
  setMaxStock: React.Dispatch<React.SetStateAction<number | null>>;
  minStock: number | null;
  maxStock: number | null;
  newProduct: newProduct;
};

function NewProductForm({
  setName,
  setCategory,
  setStock,
  setPrice,
  setMinStock,
  setMaxStock,
  minStock,
  maxStock,
  newProduct,
}: Props) {
  // Form validation and feedback for the user
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [formIsValidated, setFormIsValidated] = useState(false);
  // If stock range is disabled convert minStock and maxStock values to null
  const stockRangeCheck = useRef<HTMLInputElement>(null);
  const [hasStockRange, setHasStockRange] = useState(false);
  useEffect(() => {
    if (hasStockRange === false) {
      setMaxStock(null);
      setMinStock(null);
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
            setState={setName}
            label="Product Name"
            id="productName"
          />
          <FormControlCategorySelector setState={setCategory} />
          <FormControlNum
            label="Stock"
            setState={setStock}
            defaultEmptyValue={0}
          />

          <FormControlNum
            label="Price"
            setState={setPrice}
            defaultEmptyValue={0}
          />
          <Form.Check
            label="Set Stock Range"
            ref={stockRangeCheck}
            onChange={(e) => setHasStockRange(e.currentTarget.checked)}
            className="my-2"
          />
          <FormControlNum
            label="Minimum Stock"
            setState={setMinStock}
            defaultEmptyValue={null}
            disabled={!hasStockRange}
            value={minStock === null ? "" : minStock}
          />
          <FormControlNum
            label="Maximum Stock"
            setState={setMaxStock}
            defaultEmptyValue={null}
            disabled={!hasStockRange}
            value={maxStock === null ? "" : maxStock}
          />
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

export default NewProductForm;
