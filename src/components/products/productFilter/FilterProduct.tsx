import React, { useState } from "react";

import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Product } from "../../../interfaces";
import FormControlCategorySelector from "../../forms/FormControlCategorySelector";
type Props = {
  productList: Product[];
};

function FilterProduct({ productList }: Props) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  return (
    <>
      <Dropdown className="p-2 d-inline mx-2" autoClose="outside">
        <Dropdown.Toggle id="dropdown-autoclose-outside">
          Filter Product
        </Dropdown.Toggle>
        <Dropdown.Menu className="p-2">
          <Form>
            <Form.Group>
              <FormControlCategorySelector setState={setSelectedCategory} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Product Name</Form.Label>
              <Form.Control type="text"></Form.Control>
            </Form.Group>
            <Button size="sm" className="m-2">
              Reset Filters
            </Button>
          </Form>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default FilterProduct;
